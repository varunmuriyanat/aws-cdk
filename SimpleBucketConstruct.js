"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleBucketConstruct = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const constructs_1 = require("constructs");
class SimpleBucketConstruct extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        this.bucket = new s3.Bucket(this, 'SimpleBucket', {
            ...props,
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
        });
    }
}
exports.SimpleBucketConstruct = SimpleBucketConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlQnVja2V0Q29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2ltcGxlQnVja2V0Q29uc3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsMkNBQXVDO0FBRXZDLE1BQWEscUJBQXNCLFNBQVEsc0JBQVM7SUFHaEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDOUMsR0FBRyxLQUFLO1lBQ1IsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsc0NBQXNDO1NBQ25GLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVhELHNEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcclxuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlQnVja2V0Q29uc3RydWN0IGV4dGVuZHMgQ29uc3RydWN0IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBidWNrZXQ6IHMzLklCdWNrZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBzMy5CdWNrZXRQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XHJcbiAgICAgICAgdGhpcy5idWNrZXQgPSBuZXcgczMuQnVja2V0KHRoaXMsICdTaW1wbGVCdWNrZXQnLCB7XHJcbiAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICB2ZXJzaW9uZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksIC8vIE5PVCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiBjb2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=