import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

class ParameterizedStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucketNameParam = new cdk.CfnParameter(this, 'BucketNameParam', {
            type: 'String',
            description: 'The name of the S3 bucket to create',
            default: 'my-parameterized-bucket-' + cdk.Aws.ACCOUNT_ID,
        });

        new s3.Bucket(this, 'ParameterizedBucket', {
            bucketName: bucketNameParam.valueAsString,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });
    }
}

export { ParameterizedStack };
