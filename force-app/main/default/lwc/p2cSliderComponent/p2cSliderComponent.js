import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {

    val = 20;
    val1 = 20;
    changeHandler(event) {
        this.val=event.target.value
    }
     changeHandler1(event) {
        this.val1=event.target.value
    }
    @api reset() {
        this.val = 50;
        this.val1 = 50;
     }

}