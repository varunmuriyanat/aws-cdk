import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

// Singleton Pattern
class SingletonConstruct extends Construct {
    private static instance: sns.Topic | null = null;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        if (!SingletonConstruct.instance) {
            SingletonConstruct.instance = new sns.Topic(this, 'SingletonTopic', {
                displayName: 'Singleton SNS Topic',
            });
        }

        return SingletonConstruct.instance;
    }
}


// Factory Pattern
class BucketFactory {
    static createBucket(scope: Construct, id: string, versioned: boolean = false): s3.Bucket {
        if (versioned) {
            return new s3.Bucket(scope, id, {
                versioned: true,
                removalPolicy: cdk.RemovalPolicy.DESTROY,
            });
        } else {
           return new s3.Bucket(scope, id, {
                versioned: false,
                removalPolicy: cdk.RemovalPolicy.RETAIN,
            });
        }
    }
}

const versionedBucket = BucketFactory.createBucket(new cdk.App(), 'VersionedBucket', true);
const nonVersionedBucket = BucketFactory.createBucket(new cdk.App(), 'NonVersionedBucket', false);


// Decorator Pattern
class CorsDecorator {
    static addCorsConfiguration(bucket: s3.Bucket): void {
        bucket.addCorsRule({
            allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.PUT],
            allowedOrigins: ['*'],
            allowedHeaders: ['*'],
        });
    }
}

CorsDecorator.addCorsConfiguration(versionedBucket);
CorsDecorator.addCorsConfiguration(nonVersionedBucket);


// Observer Pattern
class ObserverConstruct extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const myFunction = new lambda.Function(this, 'MyFunction', {
            runtime: lambda.Runtime.NODEJS_22_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
        });

        const myS3EventRule = new events.Rule(this, 'MyEventRule', {
            // schedule: events.Schedule.rate(cdk.Duration.minutes(5)),
            eventPattern: {
                source: ['aws.s3'],
                detailType: ['Object Created'],
                resources: [versionedBucket.bucketArn],
            },
        });

        myS3EventRule.addTarget(new targets.LambdaFunction(myFunction));
        const myEC2EventRule = new events.Rule(this, 'MyEventRule', {
            eventPattern: {
                source: ['aws.ec2'],
                detailType: ['EC2 Instance State-change Notification'],
                detail: {
                    state: ['running'],
                },        
            },
        });

        myEC2EventRule.addTarget(new targets.LambdaFunction(myFunction));
    }
}


// Builder Pattern
class VPCBuilder {
    private readonly subnets: ec2.SubnetConfiguration[] = [];

    addSubnet(name: string, type: ec2.SubnetType, cidrMask: number): VPCBuilder {
        this.subnets.push({
            name,
            subnetType: type,
            cidrMask
        });

        return this;
    }

    build(scope: Construct, id: string): ec2.Vpc {
        return new ec2.Vpc(scope, id, {
            subnetConfiguration: this.subnets
        });
    }
}

class VPCConstruct extends Construct {
    private static instance: sns.Topic | null = null;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const vpc = new VPCBuilder()
        .addSubnet('PublicSubnet', ec2.SubnetType.PUBLIC, 24)
        .addSubnet('PrivateSubnet', ec2.SubnetType.PRIVATE_WITH_EGRESS, 24)
        .build(this, 'CustomVPC');
    }
}


// Facade Pattern
class DatabaseSetup {
    static createDatabase(scope: Construct, clusterName: string, vpc: ec2.Vpc): rds.DatabaseCluster {
        return new rds.DatabaseCluster(scope, clusterName, {
            engine: rds.DatabaseClusterEngine.AURORA_POSTGRESQL,
            instanceProps: {
                instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.SMALL),
                vpc
            }
        });
    }
}
class DatabaseConstruct extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const simpleVpc = new ec2.Vpc(this, 'SimpleVpc');
        const myDatabase = DatabaseSetup.createDatabase(this, 'MyDatabaseCluster', simpleVpc);
    }
}

