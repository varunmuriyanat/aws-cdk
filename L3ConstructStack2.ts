import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import { DefinitionBody } from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';

class L3ConstructStack2 extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define Lambda functions
        const fn1 = new lambda.Function(this, 'MyFunction1', {
            runtime: lambda.Runtime.PYTHON_3_14,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda/myfunction1'),
        });

        const fn2 = new lambda.Function(this, 'MyFunction2', {
            runtime: lambda.Runtime.PYTHON_3_14,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda/myfunction2'),
        });

        // Define Step Functions tasks
        const task1 = new tasks.LambdaInvoke(this, 'Invoke MyFunction1', {
            lambdaFunction: fn1,
        });

        const task2 = new tasks.LambdaInvoke(this, 'Invoke MyFunction2', {
            lambdaFunction: fn2,
        });

        // Define the Step Functions state machine
        new stepfunctions.StateMachine(this, 'MyStateMachine', {
            definitionBody: DefinitionBody.fromChainable(task1.next(task2)),
            timeout: cdk.Duration.minutes(5),
        });
    }
}

export { L3ConstructStack2 };