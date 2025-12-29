import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class SimpleBucketConstruct extends Construct {
    public readonly bucket: s3.IBucket;

    constructor(scope: Construct, id: string, props?: s3.BucketProps) {
        super(scope, id);
        this.bucket = new s3.Bucket(this, 'SimpleBucket', {
            ...props,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
        });
    }
}