import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

class CustomS3BucketStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define an S3 bucket with custom configuration
        new s3.Bucket(this, 'CustomBucket', {
            bucketName: 'com.varunmuriyanat.custom-bucket-' + cdk.Aws.ACCOUNT_ID,
            versioned: true,
            publicReadAccess: false,
            removalPolicy: cdk.RemovalPolicy.RETAIN,
            lifecycleRules: [
                {
                    id: 'rule1',
                    enabled: true,
                    expiration: cdk.Duration.days(365),
                }
            ],
        });
    }
}

export { CustomS3BucketStack };