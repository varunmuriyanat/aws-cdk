"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1S3BucketStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
class L1S3BucketStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define an S3 bucket with detailed configuration
        new aws_s3_1.CfnBucket(this, 'L1DetailedBucket', {
            bucketName: 'com.varunmuriyanat.l1-detailed-bucket-' + cdk.Aws.ACCOUNT_ID,
            versioningConfiguration: {
                status: 'Enabled'
            },
            lifecycleConfiguration: {
                rules: [
                    {
                        status: 'Enabled',
                        transitions: [
                            {
                                storageClass: 'GLACIER',
                                transitionInDays: 30
                            }
                        ],
                        expirationInDays: 365
                    }
                ]
            }
        });
    }
}
exports.L1S3BucketStack = L1S3BucketStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTDFTM0J1Y2tldFN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTDFTM0J1Y2tldFN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQywrQ0FBK0M7QUFFL0MsTUFBTSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ25DLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixrREFBa0Q7UUFDbEQsSUFBSSxrQkFBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUNwQyxVQUFVLEVBQUUsd0NBQXdDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1lBQ3pFLHVCQUF1QixFQUFFO2dCQUNyQixNQUFNLEVBQUUsU0FBUzthQUNwQjtZQUNELHNCQUFzQixFQUFFO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0g7d0JBQ0ksTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLFdBQVcsRUFBRTs0QkFDVDtnQ0FDSSxZQUFZLEVBQUUsU0FBUztnQ0FDdkIsZ0JBQWdCLEVBQUUsRUFBRTs2QkFDdkI7eUJBQ0o7d0JBQ0QsZ0JBQWdCLEVBQUUsR0FBRztxQkFDeEI7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVRLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0IHsgQ2ZuQnVja2V0IH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcclxuXHJcbmNsYXNzIEwxUzNCdWNrZXRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgYW4gUzMgYnVja2V0IHdpdGggZGV0YWlsZWQgY29uZmlndXJhdGlvblxyXG4gICAgICAgIG5ldyBDZm5CdWNrZXQodGhpcywgJ0wxRGV0YWlsZWRCdWNrZXQnLCB7XHJcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6ICdjb20udmFydW5tdXJpeWFuYXQubDEtZGV0YWlsZWQtYnVja2V0LScgKyBjZGsuQXdzLkFDQ09VTlRfSUQsXHJcbiAgICAgICAgICAgIHZlcnNpb25pbmdDb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdFbmFibGVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsaWZlY3ljbGVDb25maWd1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBydWxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnRW5hYmxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZUNsYXNzOiAnR0xBQ0lFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkluRGF5czogMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbkluRGF5czogMzY1XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEwxUzNCdWNrZXRTdGFjayB9OyJdfQ==