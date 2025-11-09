import { LightningElement, wire, track } from 'lwc';
import getDashboardData from '@salesforce/apex/VolunteerProjectHelper.getDashboardData';

export default class ImpactDashboardWidget extends LightningElement {
    @track totalProjects;
    @track totalVolunteers;

    @wire(getDashboardData)
    wiredData({ data, error }) {
        if (data) {
            this.totalProjects = data.totalProjects;
            this.totalVolunteers = data.totalVolunteers;
        } else if (error) {
            console.error(error);
        }
    }
}
