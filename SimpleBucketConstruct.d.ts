import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
export declare class SimpleBucketConstruct extends Construct {
    readonly bucket: s3.IBucket;
    constructor(scope: Construct, id: string, props?: s3.BucketProps);
}
