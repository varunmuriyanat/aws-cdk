"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2ConstructStack2 = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class L2ConstructStack2 extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.L2ConstructStack2 = L2ConstructStack2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTDJDb25zdHJ1Y3RTdGFjazIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMMkNvbnN0cnVjdFN0YWNrMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsaURBQWlEO0FBQ2pELHlEQUF5RDtBQUV6RCxNQUFNLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3JDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixpREFBaUQ7UUFDakQsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDekQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsdURBQXVEO1FBQ3ZELE1BQU0sS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2xELFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFdBQVcsRUFBRSxtRUFBbUU7WUFDaEYsYUFBYSxFQUFFO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUUvQyw4QkFBOEI7UUFDOUIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDbkMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRVEsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcclxuXHJcbmNsYXNzIEwyQ29uc3RydWN0U3RhY2syIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhIExhbWJkYSBmdW5jdGlvbiB1c2luZyBhbiBMMiBjb25zdHJ1Y3RcclxuICAgICAgICBjb25zdCBteUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnTXlMMkZ1bmN0aW9uJywge1xyXG4gICAgICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjJfWCxcclxuICAgICAgICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxyXG4gICAgICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYScpLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMCksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhbiBBUEkgR2F0ZXdheSBSRVNUIEFQSSB1c2luZyBhbiBMMiBjb25zdHJ1Y3RcclxuICAgICAgICBjb25zdCBteUFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ015TDJBcGknLCB7XHJcbiAgICAgICAgICAgIHJlc3RBcGlOYW1lOiAnTXkgTDIgQVBJJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGFuIGV4YW1wbGUgb2YgYW4gQVBJIEdhdGV3YXkgUkVTVCBBUEkgdXNpbmcgTDIgY29uc3RydWN0cycsXHJcbiAgICAgICAgICAgIGRlcGxveU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHN0YWdlTmFtZTogJ2RldicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhbWJkYUludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24obXlGdW5jdGlvbik7XHJcbiAgICAgICAgbXlBcGkucm9vdC5hZGRNZXRob2QoJ0dFVCcsIGxhbWJkYUludGVncmF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gT3V0cHV0IHRoZSBBUEkgZW5kcG9pbnQgVVJMXHJcbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0FwaUVuZHBvaW50Jywge1xyXG4gICAgICAgICAgICB2YWx1ZTogbXlBcGkudXJsLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBlbmRwb2ludCBVUkwgb2YgdGhlIEwyIEFQSSBHYXRld2F5JyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTDJDb25zdHJ1Y3RTdGFjazIgfTsiXX0=