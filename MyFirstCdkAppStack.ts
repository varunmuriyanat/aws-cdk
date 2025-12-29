import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';


export class MyFirstCdkAppStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define an S3 bucket
        new s3.Bucket(this, 'MyFirstBucket', {
        bucketName: 'com.varunmuriyanat-' + cdk.Aws.ACCOUNT_ID,
        versioned: true,  // Enable versioning for the bucket
            removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
        });
    }
}
