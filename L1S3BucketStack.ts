import * as cdk from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';

class L1S3BucketStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define an S3 bucket with detailed configuration
        new CfnBucket(this, 'L1DetailedBucket', {
            bucketName: 'com.varunmuriyanat.l1-detailed-bucket-' + cdk.Aws.ACCOUNT_ID,
            versioningConfiguration: {
                status: 'Enabled'
            },
            lifecycleConfiguration: {
                rules: [
                    {
                        status: 'Enabled',
                        transitions: [
                            {
                                storageClass: 'GLACIER',
                                transitionInDays: 30
                            }
                        ],
                        expirationInDays: 365
                    }
                ]
            }
        });
    }
}

export { L1S3BucketStack };