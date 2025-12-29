import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';

class S3CloudFrontStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Create an S3 bucket to hold website content
        const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
            versioned: true,
            websiteIndexDocument: 'index.html',
            // publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
        });

        // Create a CloudFront distribution to serve content from the S3 bucket
        const distribution = new cloudfront.Distribution(this, 'WebsiteDistribution', {
            defaultBehavior: { origin: new origins.S3StaticWebsiteOrigin(websiteBucket) },
            defaultRootObject: 'index.html',
        });
        // Output the CloudFront distribution domain name
        new cdk.CfnOutput(this, 'DistributionDomainName', {
            value: distribution.domainName,
            description: 'The domain name of the CloudFront distribution',
        });
    }
}

export { S3CloudFrontStack };