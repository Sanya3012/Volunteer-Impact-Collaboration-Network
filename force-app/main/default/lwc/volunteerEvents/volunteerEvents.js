import { LightningElement, wire } from 'lwc';
import getVolunteerEvents from '@salesforce/apex/VolunteerEventController.getVolunteerEvents';

const COLUMNS = [
    { label: 'Event Name', fieldName: 'Name' },
    { label: 'Start Date', fieldName: 'StartDate', type: 'date' },
    { label: 'End Date', fieldName: 'EndDate', type: 'date' },
    { label: 'Location', fieldName: 'Location__c' }
];

export default class VolunteerEvents extends LightningElement {
    columns = COLUMNS;
    @wire(getVolunteerEvents) events;
}
