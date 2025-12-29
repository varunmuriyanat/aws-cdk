#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MinimalL1Stack } from '../MinimalL1Stack';
import { MyFirstCdkAppStack } from '../MyFirstCdkAppStack';
import { SecureBucket } from '../SecureBucket';
import { MyFirstCdkStack} from '../MyFirstCdkStack';
// import { ParameterizedStack } from '../ParameterizedStack';
import { ExampleConstruct } from '../ExampleConstruct';
import { L1ConstructStack } from '../L1ConstructStack';
import { L2ConstructStack } from '../L2ConstructStack';
import { L3ConstructStack } from '../L3ConstructStack';
import { L1S3BucketStack } from '../L1S3BucketStack';
import { CustomS3BucketStack } from '../CustomS3BucketStack';
import { L3ConstructStack2 } from '../L3ConstructStack2';
import { CustomL3ConstructStack } from '../CustomL3ConstructStack';
import { DataPipelineStack } from '../DataPipelineStack';
import { LambdaWithMonitoringStack, LambdaWithSecretsStack } from '../LambdaWithMonitoring';
import * as lambda from 'aws-cdk-lib/aws-lambda';
const app = new cdk.App();

// new MinimalL1Stack(app, 'MinimalL1Stack', {
//   /* If you don't specify 'env', this stack will be environment-agnostic.
//    * Account/Region-dependent features and context lookups will not work,
//    * but a single synthesized template can be deployed anywhere. */

//   /* Uncomment the next line to specialize this stack for the AWS Account
//    * and Region that are implied by the current CLI configuration. */
//   // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

//   /* Uncomment the next line if you know exactly what Account and Region you
//    * want to deploy the stack to. */
//   // env: { account: '123456789012', region: 'us-east-1' },

//   /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });

// new MyFirstCdkAppStack(app, 'MyFirstCdkAppStack', {
//   // Configure stack properties as needed
// });

// new SecureBucket(app, 'SecureBucketStack', {
//   enableEncryption: true,
// });

// new MyFirstCdkStack(app, 'MyFirstCdkStack', {
//   // Configure stack properties as needed
// });

// // new ParameterizedStack(app, 'ParameterizedStack', {
// //   // Configure stack properties as needed
// // });

// new ExampleConstruct(app, 'ExampleConstructStack', {
//   // Configure stack properties as needed
// });

// new L1ConstructStack(app, 'L1ConstructStack', {
//   // Configure stack properties as needed
// });

// new L2ConstructStack(app, 'L2ConstructStack', {
//   // Configure stack properties as needed
// });

// new L3ConstructStack(app, 'L3ConstructStack', {
//   // Configure stack properties as needed
// });

// new L1S3BucketStack(app, 'L1S3BucketStack', {
//   // Configure stack properties as needed
// });

// new CustomS3BucketStack(app, 'CustomS3BucketStack', {
//   // Configure stack properties as needed
// });

// new L3ConstructStack2(app, 'L3ConstructStack2', {
//   // Configure stack properties as needed
// });

// new CustomL3ConstructStack(app, 'CustomL3ConstructStack', {
//   // Configure stack properties as needed
// });

// new DataPipelineStack(app, 'DataPipelineStack', {
//   // Configure stack properties as needed
// });

new LambdaWithMonitoringStack(app, 'LambdaWithMonitoringStack', {
  functionName: 'MyMonitoredFunction',
  runtime: lambda.Runtime.NODEJS_24_X,
  handler: 'index.handler',
  codePath: 'lambda/monitored-function',
});

new LambdaWithSecretsStack(app, 'LambdaWithSecretsStack', {
  functionName: 'MySecretsFunction',
  runtime: lambda.Runtime.NODEJS_24_X,
  handler: 'index.handler',
  codePath: 'lambda/secrets-function',
  secretArn: 'arn:aws:secretsmanager:us-east-1:123456789012:secrets/mysecret-AbC123',
});

