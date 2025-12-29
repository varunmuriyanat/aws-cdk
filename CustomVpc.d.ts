import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
export declare class CustomVpc extends Construct {
    readonly vpc: ec2.Vpc;
    constructor(scope: Construct, id: string, props?: ec2.VpcProps);
}
