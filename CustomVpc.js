"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomVpc = void 0;
const ec2 = require("aws-cdk-lib/aws-ec2");
const constructs_1 = require("constructs");
class CustomVpc extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        this.vpc = new ec2.Vpc(this, 'CustomVPC', {
            maxAzs: 3,
            natGateways: 1,
            ...props,
        });
    }
}
exports.CustomVpc = CustomVpc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tVnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3VzdG9tVnBjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyQztBQUMzQywyQ0FBdUM7QUFFdkMsTUFBYSxTQUFVLFNBQVEsc0JBQVM7SUFHcEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFvQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDdEMsTUFBTSxFQUFFLENBQUM7WUFDVCxXQUFXLEVBQUUsQ0FBQztZQUNkLEdBQUcsS0FBSztTQUNYLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQVhELDhCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZWMyIGZyb20gJ2F3cy1jZGstbGliL2F3cy1lYzInO1xyXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WcGMgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZwYzogZWMyLlZwYztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGVjMi5WcGNQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XHJcbiAgICAgICAgdGhpcy52cGMgPSBuZXcgZWMyLlZwYyh0aGlzLCAnQ3VzdG9tVlBDJywge1xyXG4gICAgICAgICAgICBtYXhBenM6IDMsXHJcbiAgICAgICAgICAgIG5hdEdhdGV3YXlzOiAxLFxyXG4gICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==