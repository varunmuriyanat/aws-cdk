import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class CustomVpc extends Construct {
    public readonly vpc: ec2.Vpc;

    constructor(scope: Construct, id: string, props?: ec2.VpcProps) {
        super(scope, id);
        this.vpc = new ec2.Vpc(this, 'CustomVPC', {
            maxAzs: 3,
            natGateways: 1,
            ...props,
        });
    }
}