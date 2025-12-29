import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

class L2ConstructStack2 extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define a Lambda function using an L2 construct
        const myFunction = new lambda.Function(this, 'MyL2Function', {
            runtime: lambda.Runtime.NODEJS_22_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
            timeout: cdk.Duration.seconds(30),
        });

        // Define an API Gateway REST API using an L2 construct
        const myApi = new apigateway.RestApi(this, 'MyL2Api', {
            restApiName: 'My L2 API',
            description: 'This is an example of an API Gateway REST API using L2 constructs',
            deployOptions: {
                stageName: 'dev',
            },
        });

        const lambdaIntegration = new apigateway.LambdaIntegration(myFunction);
        myApi.root.addMethod('GET', lambdaIntegration);

        // Output the API endpoint URL
        new cdk.CfnOutput(this, 'ApiEndpoint', {
            value: myApi.url,
            description: 'The endpoint URL of the L2 API Gateway',
        });
    }
}

export { L2ConstructStack2 };