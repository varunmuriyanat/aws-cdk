# from aws_cdk import (
#     Stack,
#     RemovalPolicy
# )
# from aws_cdk import aws_s3 as s3
# from constructs import Construct

# class MyS3BucketStack(Stack):
#     def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
#         super().__init__(scope, construct_id, **kwargs)

#         s3.Bucket(
#             self,
#             "com.varunmuriyanat.input-files",
#             block_public_access=s3.BlockPublicAccess.BLOCK_ALL,   # block public access
#             encryption=s3.BucketEncryption.S3_MANAGED,            # S3-managed encryption
#             versioned=True,                                       # enable versioning
#             removal_policy=RemovalPolicy.DESTROY                  # delete bucket on stack destroy
#         )


from aws_cdk import (
    Stack,
    RemovalPolicy,
    aws_s3 as s3,
)
from constructs import Construct

class MyStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        # Create an S3 bucket
        bucket = s3.Bucket(self, 
            "com.varunmuriyanat.input-files",
            versioned=True,              # enable versioning
            removal_policy=RemovalPolicy.DESTROY,  # auto-delete bucket when stack is destroyed (dev only)
            auto_delete_objects=True     # delete all objects when bucket is deleted
        )
