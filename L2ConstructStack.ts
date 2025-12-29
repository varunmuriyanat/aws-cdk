import * as cdk from 'aws-cdk-lib';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';

class L2ConstructStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define a new S3 bucket with server-side encryption enabled
        new Bucket(this, 'L2ConstructBucket', {
            encryption: BucketEncryption.S3_MANAGED,
            versioned: true,
        });
    }
}

export { L2ConstructStack };