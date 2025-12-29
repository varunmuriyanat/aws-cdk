import * as cdk from 'aws-cdk-lib';
import { CfnRole } from 'aws-cdk-lib/aws-iam';

class L1ConstructStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define an IAM Role using L1 construct
        new CfnRole(this, 'MyL1Role', {
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

export { L1ConstructStack };