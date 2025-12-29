"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterizedStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
class ParameterizedStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const bucketNameParam = new cdk.CfnParameter(this, 'BucketNameParam', {
            type: 'String',
            description: 'The name of the S3 bucket to create',
            default: 'my-parameterized-bucket-' + cdk.Aws.ACCOUNT_ID,
        });
        new s3.Bucket(this, 'ParameterizedBucket', {
            bucketName: bucketNameParam.valueAsString,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });
    }
}
exports.ParameterizedStack = ParameterizedStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1ldGVyaXplZFN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGFyYW1ldGVyaXplZFN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFFekMsTUFBTSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN0QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNsRSxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsT0FBTyxFQUFFLDBCQUEwQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVTtTQUMzRCxDQUFDLENBQUM7UUFFSCxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3ZDLFVBQVUsRUFBRSxlQUFlLENBQUMsYUFBYTtZQUN6QyxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87WUFDeEMsaUJBQWlCLEVBQUUsSUFBSTtTQUMxQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFFUSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xyXG5pbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xyXG5cclxuY2xhc3MgUGFyYW1ldGVyaXplZFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQXBwLCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1Y2tldE5hbWVQYXJhbSA9IG5ldyBjZGsuQ2ZuUGFyYW1ldGVyKHRoaXMsICdCdWNrZXROYW1lUGFyYW0nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBuYW1lIG9mIHRoZSBTMyBidWNrZXQgdG8gY3JlYXRlJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJ215LXBhcmFtZXRlcml6ZWQtYnVja2V0LScgKyBjZGsuQXdzLkFDQ09VTlRfSUQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5ldyBzMy5CdWNrZXQodGhpcywgJ1BhcmFtZXRlcml6ZWRCdWNrZXQnLCB7XHJcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IGJ1Y2tldE5hbWVQYXJhbS52YWx1ZUFzU3RyaW5nLFxyXG4gICAgICAgICAgICB2ZXJzaW9uZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXHJcbiAgICAgICAgICAgIGF1dG9EZWxldGVPYmplY3RzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXJhbWV0ZXJpemVkU3RhY2sgfTtcclxuIl19