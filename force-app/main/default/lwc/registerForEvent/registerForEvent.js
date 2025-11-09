import { LightningElement, track } from 'lwc';
import registerVolunteer from '@salesforce/apex/VolunteerEventController.registerVolunteer';

export default class RegisterForEvent extends LightningElement {
    @track volunteerName;
    @track eventId;

    handleNameChange(event) {
        this.volunteerName = event.target.value;
    }

    handleEventChange(event) {
        this.eventId = event.target.value;
    }

    handleRegister() {
        registerVolunteer({ contactId: '003XXXXXXXXXXXX', eventId: this.eventId })
            .then(() => {
                alert('Volunteer registered successfully!');
                // Dispatch custom event to refresh parent
                this.dispatchEvent(new CustomEvent('refresh', {
                    bubbles: true,
                    composed: true
                }));
            })
            .catch(error => {
                console.error('Error registering volunteer:', error);
            });
    }
}
