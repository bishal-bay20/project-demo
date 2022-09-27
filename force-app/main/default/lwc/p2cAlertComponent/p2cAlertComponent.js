import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api msg
    @api cardHeading
    @api number
    @api isValid
}