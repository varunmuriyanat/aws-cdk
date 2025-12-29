import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import * as tasks from 'aws-cdk-lib/aws-stepfunctions-tasks';

class CustomL3ConstructStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const fn = new lambda.Function(this, 'ExampleFunction', {
            runtime: lambda.Runtime.NODEJS_24_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda/example'),
        });

        const task = new tasks.LambdaInvoke(this, 'Invoke ExampleFunction', {
            lambdaFunction: fn,
        });

        const stateMachine = new stepfunctions.StateMachine(this, 'ExampleStateMachine', {
            definitionBody: stepfunctions.DefinitionBody.fromChainable(task),
            timeout: cdk.Duration.minutes(5),
        });

        // Add CloudWatch event to trigger and monitor the State Machine
        new events.Rule(this, 'ScheduleRule', {
            // schedule: events.Schedule.rate(cdk.Duration.minutes(15)),
            schedule: events.Schedule.cron({ minute: '0', hour: '4' }), // Daily at 4:00 AM UTC
            targets: [new targets.SfnStateMachine(stateMachine)],
        });
    }
}
export { CustomL3ConstructStack };