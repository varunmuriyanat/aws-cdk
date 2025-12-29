import * as cdk from 'aws-cdk-lib';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as redshift from 'aws-cdk-lib/aws-redshift';
import * as eventsources from 'aws-cdk-lib/aws-lambda-event-sources';

class DataPipelineStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create a Kinesis Data Stream
        const stream = new kinesis.Stream(this, 'DataStream', {
            streamName: 'MyDataStream',
            shardCount: 2,
        });

        // Define a Lambda function to process stream records
        const processor = new lambda.Function(this, 'StreamProcessor', {
            runtime: lambda.Runtime.NODEJS_24_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda/stream-processor'),
        });

        processor.addEventSource(new eventsources.KinesisEventSource(stream, {
            startingPosition: lambda.StartingPosition.TRIM_HORIZON,
            batchSize: 100,
            bisectBatchOnError: true,
            retryAttempts: 2,
        }));

        // Create a Redshift cluster
        const cluster = new redshift.CfnCluster(this, 'RedshiftCluster', {
            masterUsername: 'admin',
            masterUserPassword: 'MyPassword123!', // In production, use Secrets Manager
            nodeType: 'ra3.xlplus',
            clusterType: 'single-node',
            dbName: 'mydb'
        });
    }
}
export { DataPipelineStack };