import { LightningElement, api } from 'lwc';
export default class VolunteerProfileCard extends LightningElement {
    @api name = 'John Doe';
    @api skills = 'Teaching, Event Management';
    @api availability = 'Morning';
}
