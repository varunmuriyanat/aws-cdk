import * as cdk from 'aws-cdk-lib';
import { SimpleBucketConstruct } from './SimpleBucketConstruct';

class MyFirstCdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new SimpleBucketConstruct(this, 'MySimpleBucket', {
            bucketName: 'com.varunmuriyanat.simple-bucket-' + cdk.Aws.ACCOUNT_ID,
        });
    }
}

class SecondCdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new SimpleBucketConstruct(this, 'SecondBucket', {
            bucketName: 'com.varunmuriyanat.second-bucket-' + cdk.Aws.ACCOUNT_ID,
        });
    }
}

export { MyFirstCdkStack };