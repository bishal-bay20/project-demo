import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetailes
    @api

     get detail() {
        return this.userDetailes
     } 

     set detail(data){
        let newSprice = (data.sPrice / 100)*(data.discount)
        this.userDetailes = {...data, dPrice:data.sPrice - newSprice}
     }


   
}