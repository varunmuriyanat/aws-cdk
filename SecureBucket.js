"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureBucket = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
class SecureBucket extends cdk.Stack {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        // Define an S3 bucket with custom security options
        new s3.Bucket(this, 'SecureBucket', {
            ...props,
            encryption: props.enableEncryption ? s3.BucketEncryption.S3_MANAGED : undefined,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.RETAIN, // Retain the bucket on stack deletion
        });
    }
}
exports.SecureBucket = SecureBucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJlQnVja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VjdXJlQnVja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFNekMsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDdkMsWUFBWSxLQUFjLEVBQUUsRUFBVSxFQUFFLFFBQTJCLEVBQUU7UUFDakUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsbURBQW1EO1FBQ25ELElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ2hDLEdBQUcsS0FBSztZQUNSLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDL0UsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVM7WUFDakQsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsc0NBQXNDO1NBQ2xGLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWJELG9DQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcclxuXHJcbmludGVyZmFjZSBTZWN1cmVCdWNrZXRQcm9wcyBleHRlbmRzIGNkay5TdGFja1Byb3BzIHtcclxuICAgIGVuYWJsZUVuY3J5cHRpb24/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJlQnVja2V0IGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wczogU2VjdXJlQnVja2V0UHJvcHMgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgICAgICAvLyBEZWZpbmUgYW4gUzMgYnVja2V0IHdpdGggY3VzdG9tIHNlY3VyaXR5IG9wdGlvbnNcclxuICAgICAgICBuZXcgczMuQnVja2V0KHRoaXMsICdTZWN1cmVCdWNrZXQnLCB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICBlbmNyeXB0aW9uOiBwcm9wcy5lbmFibGVFbmNyeXB0aW9uID8gczMuQnVja2V0RW5jcnlwdGlvbi5TM19NQU5BR0VEIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBibG9ja1B1YmxpY0FjY2VzczogczMuQmxvY2tQdWJsaWNBY2Nlc3MuQkxPQ0tfQUxMLFxyXG4gICAgICAgICAgICB2ZXJzaW9uZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LlJFVEFJTiwgLy8gUmV0YWluIHRoZSBidWNrZXQgb24gc3RhY2sgZGVsZXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==