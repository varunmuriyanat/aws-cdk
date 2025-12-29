import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as secretsManager from 'aws-cdk-lib/aws-secretsmanager';

interface LambdaWithMonitoringProps extends cdk.StackProps {
    functionName: string;
    runtime: lambda.Runtime;
    handler: string;
    codePath: string;
}

interface LambdaWithSecretsProps extends LambdaWithMonitoringProps {
    secretArn: string;
}

class LambdaWithMonitoringStack extends cdk.Stack {
    public readonly lambdaFunction: lambda.Function;

    constructor(scope: cdk.App, id: string, props: LambdaWithMonitoringProps) {
        super(scope, id, props);

        const logGroup = new logs.LogGroup(this, 'LambdaLogGroup', {
            logGroupName: `/aws/lambda/${props.functionName}`,
            retention: logs.RetentionDays.ONE_WEEK,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        this.lambdaFunction = new lambda.Function(this, 'LambdaFunction', {
            functionName: props.functionName,
            runtime: props.runtime,
            handler: props.handler,
            code: lambda.Code.fromAsset(props.codePath),
            logRetention: logs.RetentionDays.ONE_WEEK,
        });

        const errorMetric = this.lambdaFunction.metricErrors({
            period: cdk.Duration.minutes(5),
            statistic: 'Sum',
        });

        new cloudwatch.Alarm(this, 'LambdaErrorAlarm', {
            metric: errorMetric,
            threshold: 1,
            evaluationPeriods: 1,
            alarmDescription: `Alarm if the function ${props.functionName} experiences a single error within 5 minutes`,
            alarmName: `${props.functionName}-ErrorAlarm`,
        });
    }
}

class LambdaWithSecretsStack extends LambdaWithMonitoringStack {
    private readonly secret: secretsManager.ISecret;

    constructor(scope: cdk.App, id: string, props: LambdaWithSecretsProps) {
        super(scope, id, props);
        this.secret = secretsManager.Secret.fromSecretNameV2(this, 'myTestSecret', props.secretArn);
        this.lambdaFunction.addEnvironment('SECRET_ARN', this.secret.secretArn);
        this.secret.grantRead(this.lambdaFunction);
    }
}

export { LambdaWithMonitoringStack, LambdaWithMonitoringProps, LambdaWithSecretsStack, LambdaWithSecretsProps };