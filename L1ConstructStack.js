"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1ConstructStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
class L1ConstructStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define an IAM Role using L1 construct
        new aws_iam_1.CfnRole(this, 'MyL1Role', {
            roleName: 'MyL1ConstructRole',
            assumeRolePolicyDocument: {
                Version: '2012-10-17',
                Statement: [
                    {
                        Effect: 'Allow',
                        Principal: {
                            Service: 'ec2.amazonaws.com',
                        },
                        Action: 'sts:AssumeRole',
                    },
                ],
            },
        });
    }
}
exports.L1ConstructStack = L1ConstructStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTDFDb25zdHJ1Y3RTdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkwxQ29uc3RydWN0U3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLGlEQUE4QztBQUU5QyxNQUFNLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3BDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qix3Q0FBd0M7UUFDeEMsSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDMUIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qix3QkFBd0IsRUFBRTtnQkFDdEIsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDUDt3QkFDSSxNQUFNLEVBQUUsT0FBTzt3QkFDZixTQUFTLEVBQUU7NEJBQ1AsT0FBTyxFQUFFLG1CQUFtQjt5QkFDL0I7d0JBQ0QsTUFBTSxFQUFFLGdCQUFnQjtxQkFDM0I7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVRLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcbmltcG9ydCB7IENmblJvbGUgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtaWFtJztcclxuXHJcbmNsYXNzIEwxQ29uc3RydWN0U3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGFuIElBTSBSb2xlIHVzaW5nIEwxIGNvbnN0cnVjdFxyXG4gICAgICAgIG5ldyBDZm5Sb2xlKHRoaXMsICdNeUwxUm9sZScsIHtcclxuICAgICAgICAgICAgcm9sZU5hbWU6ICdNeUwxQ29uc3RydWN0Um9sZScsXHJcbiAgICAgICAgICAgIGFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudDoge1xyXG4gICAgICAgICAgICAgICAgVmVyc2lvbjogJzIwMTItMTAtMTcnLFxyXG4gICAgICAgICAgICAgICAgU3RhdGVtZW50OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3Q6ICdBbGxvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW5jaXBhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZTogJ2VjMi5hbWF6b25hd3MuY29tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uOiAnc3RzOkFzc3VtZVJvbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMMUNvbnN0cnVjdFN0YWNrIH07Il19