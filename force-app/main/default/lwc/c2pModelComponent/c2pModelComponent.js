import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close', {  
            bubbles:true,
            detail:{
                msg:"Model Closed Successfulll !!!"
            }
        })
        this.dispatchEvent(myEvent)
    }

    footerHandler(){
        console.log("FooterHandler Called")
    }
}