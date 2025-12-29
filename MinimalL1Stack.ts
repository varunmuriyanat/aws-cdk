import * as cdk from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';

export class MinimalL1Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnBucket(this, 'MinimalBucket', {
      bucketName: 'com.varunmuriyanat.minimal-l1-bucket' + cdk.Aws.ACCOUNT_ID,
    });
  }
}
