import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnOutput } from 'aws-cdk-lib';
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';

class L3ConstructStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const lambdaFunction = new lambda.Function(this, 'MyFunction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
        });

        const api = new RestApi(this, 'MyApi', {
            restApiName: 'My Service',
        });

        const lambdaIntegration = new LambdaIntegration(lambdaFunction);
        api.root.addMethod('GET', lambdaIntegration);

        new CfnOutput(this, 'ApiUrl', {
            value: api.url,
        });
    }
}

export { L3ConstructStack };