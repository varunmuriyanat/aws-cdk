import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

interface EnvironmentConfig {
    instanceType: ec2.InstanceType;
}

const environments: { [key: string]: EnvironmentConfig } = {
    'dev': {
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    },
    'prod': {
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.M5, ec2.InstanceSize.LARGE),
    },
};

class MultiEnvStack extends cdk.Stack {
    constructor(scope: Construct, id: string, config: EnvironmentConfig, props?: cdk.StackProps) {
        super(scope, id, props);

        new ec2.Instance(this, 'Instance', {
            vpc: ec2.Vpc.fromLookup(this, 'DefaultVPC', { isDefault: true }),
            instanceType: config.instanceType,
            machineImage: ec2.MachineImage.latestAmazonLinux2023(),
        });
    }
}

const app = new cdk.App();
const currentEnv = app.node.tryGetContext('env') || 'dev';
new MultiEnvStack(app, `MultiEnvStack-${currentEnv}`, environments[currentEnv]);