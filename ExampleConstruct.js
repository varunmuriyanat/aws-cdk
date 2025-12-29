"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleConstruct = void 0;
const cdk = require("aws-cdk-lib");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
class ExampleConstruct extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define a new S3 bucket with default configuration
        const bucket = new aws_s3_1.Bucket(this, 'ExampleBucket', {
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY
        });
        // Output the bucket name
        new cdk.CfnOutput(this, 'BucketNameOutput', {
            value: bucket.bucketName,
            description: 'The name of the example S3 bucket',
        });
    }
}
exports.ExampleConstruct = ExampleConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZUNvbnN0cnVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkV4YW1wbGVDb25zdHJ1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLCtDQUE0QztBQUU1QyxNQUFNLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3BDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixvREFBb0Q7UUFDcEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87U0FDM0MsQ0FBQyxDQUFDO1FBRUgseUJBQXlCO1FBQ3pCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDeEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO1lBQ3hCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRVEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0IHsgQnVja2V0IH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcclxuXHJcbmNsYXNzIEV4YW1wbGVDb25zdHJ1Y3QgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGEgbmV3IFMzIGJ1Y2tldCB3aXRoIGRlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gICAgICAgIGNvbnN0IGJ1Y2tldCA9IG5ldyBCdWNrZXQodGhpcywgJ0V4YW1wbGVCdWNrZXQnLCB7XHJcbiAgICAgICAgICAgIHZlcnNpb25lZDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPdXRwdXQgdGhlIGJ1Y2tldCBuYW1lXHJcbiAgICAgICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0J1Y2tldE5hbWVPdXRwdXQnLCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBidWNrZXQuYnVja2V0TmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbmFtZSBvZiB0aGUgZXhhbXBsZSBTMyBidWNrZXQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBFeGFtcGxlQ29uc3RydWN0IH07XHJcbiJdfQ==