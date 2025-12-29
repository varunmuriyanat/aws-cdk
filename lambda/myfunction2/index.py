def handler(event, context):
    # Basic hello world response
    message = "Hello from AWS Lambda - myfunction2!"
    # Echo back the event for debugging
    return {
        "statusCode": 200,
        "body": {
            "message": message,
            "input": event
        }
    }