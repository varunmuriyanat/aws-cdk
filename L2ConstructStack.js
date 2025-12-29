"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L2ConstructStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
class L2ConstructStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define a new S3 bucket with server-side encryption enabled
        new aws_s3_1.Bucket(this, 'L2ConstructBucket', {
            encryption: aws_s3_1.BucketEncryption.S3_MANAGED,
            versioned: true,
        });
    }
}
exports.L2ConstructStack = L2ConstructStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTDJDb25zdHJ1Y3RTdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkwyQ29uc3RydWN0U3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLCtDQUE4RDtBQUU5RCxNQUFNLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3BDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2REFBNkQ7UUFDN0QsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO1lBQ2xDLFVBQVUsRUFBRSx5QkFBZ0IsQ0FBQyxVQUFVO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVRLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCB7IEJ1Y2tldCwgQnVja2V0RW5jcnlwdGlvbiB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XHJcblxyXG5jbGFzcyBMMkNvbnN0cnVjdFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhIG5ldyBTMyBidWNrZXQgd2l0aCBzZXJ2ZXItc2lkZSBlbmNyeXB0aW9uIGVuYWJsZWRcclxuICAgICAgICBuZXcgQnVja2V0KHRoaXMsICdMMkNvbnN0cnVjdEJ1Y2tldCcsIHtcclxuICAgICAgICAgICAgZW5jcnlwdGlvbjogQnVja2V0RW5jcnlwdGlvbi5TM19NQU5BR0VELFxyXG4gICAgICAgICAgICB2ZXJzaW9uZWQ6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEwyQ29uc3RydWN0U3RhY2sgfTsiXX0=