import * as cdk from 'aws-cdk-lib';
interface SecureBucketProps extends cdk.StackProps {
    enableEncryption?: boolean;
}
export declare class SecureBucket extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: SecureBucketProps);
}
export {};
