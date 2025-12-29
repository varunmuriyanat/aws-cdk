import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';

class ExampleConstruct extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define a new S3 bucket with default configuration
        const bucket = new Bucket(this, 'ExampleBucket', {
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });

        // Output the bucket name
        new cdk.CfnOutput(this, 'BucketNameOutput', {
            value: bucket.bucketName,
            description: 'The name of the example S3 bucket',
        });
    }
}

export { ExampleConstruct };
