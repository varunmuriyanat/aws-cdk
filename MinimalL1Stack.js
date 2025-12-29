"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalL1Stack = void 0;
const cdk = require("aws-cdk-lib");
const aws_s3_1 = require("aws-cdk-lib/aws-s3");
class MinimalL1Stack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        new aws_s3_1.CfnBucket(this, 'MinimalBucket', {
            bucketName: 'com.varunmuriyanat.minimal-l1-bucket' + cdk.Aws.ACCOUNT_ID,
        });
    }
}
exports.MinimalL1Stack = MinimalL1Stack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWluaW1hbEwxU3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNaW5pbWFsTDFTdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsK0NBQStDO0FBRS9DLE1BQWEsY0FBZSxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzNDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLGtCQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNuQyxVQUFVLEVBQUUsc0NBQXNDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVO1NBQ3hFLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVJELHdDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0IHsgQ2ZuQnVja2V0IH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5pbWFsTDFTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIG5ldyBDZm5CdWNrZXQodGhpcywgJ01pbmltYWxCdWNrZXQnLCB7XHJcbiAgICAgIGJ1Y2tldE5hbWU6ICdjb20udmFydW5tdXJpeWFuYXQubWluaW1hbC1sMS1idWNrZXQnICsgY2RrLkF3cy5BQ0NPVU5UX0lELFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==