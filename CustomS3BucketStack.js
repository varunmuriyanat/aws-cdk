"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomS3BucketStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
class CustomS3BucketStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define an S3 bucket with custom configuration
        new s3.Bucket(this, 'CustomBucket', {
            bucketName: 'com.varunmuriyanat.custom-bucket-' + cdk.Aws.ACCOUNT_ID,
            versioned: true,
            publicReadAccess: false,
            removalPolicy: cdk.RemovalPolicy.RETAIN,
            lifecycleRules: [
                {
                    id: 'rule1',
                    enabled: true,
                    expiration: cdk.Duration.days(365),
                }
            ],
        });
    }
}
exports.CustomS3BucketStack = CustomS3BucketStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tUzNCdWNrZXRTdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkN1c3RvbVMzQnVja2V0U3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLHlDQUF5QztBQUV6QyxNQUFNLG1CQUFvQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3ZDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixnREFBZ0Q7UUFDaEQsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDaEMsVUFBVSxFQUFFLG1DQUFtQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUNwRSxTQUFTLEVBQUUsSUFBSTtZQUNmLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTTtZQUN2QyxjQUFjLEVBQUU7Z0JBQ1o7b0JBQ0ksRUFBRSxFQUFFLE9BQU87b0JBQ1gsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDckM7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVRLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCAqIGFzIHMzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XHJcblxyXG5jbGFzcyBDdXN0b21TM0J1Y2tldFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhbiBTMyBidWNrZXQgd2l0aCBjdXN0b20gY29uZmlndXJhdGlvblxyXG4gICAgICAgIG5ldyBzMy5CdWNrZXQodGhpcywgJ0N1c3RvbUJ1Y2tldCcsIHtcclxuICAgICAgICAgICAgYnVja2V0TmFtZTogJ2NvbS52YXJ1bm11cml5YW5hdC5jdXN0b20tYnVja2V0LScgKyBjZGsuQXdzLkFDQ09VTlRfSUQsXHJcbiAgICAgICAgICAgIHZlcnNpb25lZDogdHJ1ZSxcclxuICAgICAgICAgICAgcHVibGljUmVhZEFjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LlJFVEFJTixcclxuICAgICAgICAgICAgbGlmZWN5Y2xlUnVsZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ3J1bGUxJyxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb246IGNkay5EdXJhdGlvbi5kYXlzKDM2NSksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEN1c3RvbVMzQnVja2V0U3RhY2sgfTsiXX0=