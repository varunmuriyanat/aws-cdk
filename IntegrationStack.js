"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationStack = void 0;
const cdk = require("aws-cdk-lib");
const iam = require("aws-cdk-lib/aws-iam");
const lambda = require("aws-cdk-lib/aws-lambda");
class IntegrationStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.IntegrationStack = IntegrationStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25TdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkludGVncmF0aW9uU3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFFakQsTUFBTSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNwQyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsd0JBQXdCO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDbkQsaUNBQWlDO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztZQUMzRCxlQUFlLEVBQUU7Z0JBQ2IsR0FBRyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQywwQ0FBMEMsQ0FBQzthQUN6RjtTQUNKLENBQUMsQ0FBQztRQUVILHFEQUFxRDtRQUNyRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLDJCQUEyQixFQUFFO1lBQ25ELFlBQVksRUFBRSwyQkFBMkI7WUFDekMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLElBQUksRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRVEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XHJcblxyXG5jbGFzcyBJbnRlZ3JhdGlvblN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhbiBMMiBJQU0gcm9sZVxyXG4gICAgICAgIGNvbnN0IG15Um9sZSA9IG5ldyBpYW0uUm9sZSh0aGlzLCAnSW50ZWdyYXRpb25MMlJvbGUnLCB7XHJcbiAgICAgICAgICAgIC8vIHJvbGVOYW1lOiAnSW50ZWdyYXRpb25MMlJvbGUnLFxyXG4gICAgICAgICAgICBhc3N1bWVkQnk6IG5ldyBpYW0uU2VydmljZVByaW5jaXBhbCgnbGFtYmRhLmFtYXpvbmF3cy5jb20nKSxcclxuICAgICAgICAgICAgbWFuYWdlZFBvbGljaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBpYW0uTWFuYWdlZFBvbGljeS5mcm9tQXdzTWFuYWdlZFBvbGljeU5hbWUoJ3NlcnZpY2Utcm9sZS9BV1NMYW1iZGFCYXNpY0V4ZWN1dGlvblJvbGUnKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhIExhbWJkYSBmdW5jdGlvbiB0aGF0IHVzZXMgdGhlIEwxIElBTSByb2xlXHJcbiAgICAgICAgbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnSW50ZWdyYXRpb25MYW1iZGFGdW5jdGlvbicsIHtcclxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiAnSW50ZWdyYXRpb25MYW1iZGFGdW5jdGlvbicsXHJcbiAgICAgICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMl9YLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXHJcbiAgICAgICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksXHJcbiAgICAgICAgICAgIHJvbGU6IG15Um9sZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgSW50ZWdyYXRpb25TdGFjayB9OyJdfQ==