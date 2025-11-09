import { LightningElement, wire, track } from 'lwc';
import getProjects from '@salesforce/apex/VolunteerProjectHelper.getProjects';
import { refreshApex } from '@salesforce/apex';
import { NavigationMixin } from 'lightning/navigation';

export default class VolunteerProjects extends NavigationMixin(LightningElement) {
    @track projects;
    wiredProjectsResult;

    @wire(getProjects)
    wiredProjects(result) {
        this.wiredProjectsResult = result;
        if (result.data) {
            this.projects = result.data;
        }
    }

    // Refresh when child sends event
    handleRefresh() {
        refreshApex(this.wiredProjectsResult);
    }
    handleView(event) {
    const recordId = event.target.dataset.id;
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: recordId,
            actionName: 'view'
        }
    });
}

}
