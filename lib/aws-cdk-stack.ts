import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
 
export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
 
    const s3Bucket = new s3.Bucket(this, 'muriyanv', {
      bucketName: 'com.varunmuriyanat.input-files',
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
 
    s3Bucket.grantRead(new iam.AccountRootPrincipal());
  }
}
 
const app = new cdk.App();
new AwsCdkStack(app, 'S3BucketStack');
app.synth();