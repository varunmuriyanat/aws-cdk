import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

class IntegrationStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define an L2 IAM role
        const myRole = new iam.Role(this, 'IntegrationL2Role', {
            // roleName: 'IntegrationL2Role',
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')
            ]
        });

        // Define a Lambda function that uses the L1 IAM role
        new lambda.Function(this, 'IntegrationLambdaFunction', {
            functionName: 'IntegrationLambdaFunction',
            runtime: lambda.Runtime.NODEJS_22_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
            role: myRole,
        });
    }
}

export { IntegrationStack };