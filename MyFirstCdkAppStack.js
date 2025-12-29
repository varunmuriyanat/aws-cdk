"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFirstCdkAppStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
class MyFirstCdkAppStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define an S3 bucket
        new s3.Bucket(this, 'MyFirstBucket', {
            bucketName: 'com.varunmuriyanat-' + cdk.Aws.ACCOUNT_ID,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
        });
    }
}
exports.MyFirstCdkAppStack = MyFirstCdkAppStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlGaXJzdENka0FwcFN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTXlGaXJzdENka0FwcFN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFHekMsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsc0JBQXNCO1FBQ3RCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3JDLFVBQVUsRUFBRSxxQkFBcUIsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFDdEQsU0FBUyxFQUFFLElBQUk7WUFDWCxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsc0NBQXNDO1NBQ25GLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVhELGdEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTXlGaXJzdENka0FwcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBhbiBTMyBidWNrZXRcclxuICAgICAgICBuZXcgczMuQnVja2V0KHRoaXMsICdNeUZpcnN0QnVja2V0Jywge1xyXG4gICAgICAgIGJ1Y2tldE5hbWU6ICdjb20udmFydW5tdXJpeWFuYXQtJyArIGNkay5Bd3MuQUNDT1VOVF9JRCxcclxuICAgICAgICB2ZXJzaW9uZWQ6IHRydWUsICAvLyBFbmFibGUgdmVyc2lvbmluZyBmb3IgdGhlIGJ1Y2tldFxyXG4gICAgICAgICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZLCAvLyBOT1QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gY29kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==