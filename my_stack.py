from aws_cdk import Stack, aws_s3 as s3, RemovalPolicy
from constructs import Construct

class MyStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        # Create an S3 bucket
        s3.Bucket(self, "com.varunmuriyanat.input-files",
            versioned=True,
            removal_policy=RemovalPolicy.DESTROY,  # Only for dev/testing
            auto_delete_objects=True
        )
