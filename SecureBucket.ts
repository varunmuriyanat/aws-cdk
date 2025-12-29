import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface SecureBucketProps extends cdk.StackProps {
    enableEncryption?: boolean;
}

export class SecureBucket extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props: SecureBucketProps = {}) {
        super(scope, id, props);

        // Define an S3 bucket with custom security options
        new s3.Bucket(this, 'SecureBucket', {
            ...props,
            encryption: props.enableEncryption ? s3.BucketEncryption.S3_MANAGED : undefined,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.RETAIN, // Retain the bucket on stack deletion
        });
    }
}