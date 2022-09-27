import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubSubChildOne extends LightningElement {
    
    buttonHandler(evt){
        this.eventPublish(evt.target.innerText)
    }
    eventPublish(data){
        pubsub.publish("accordionTriggered", data)  
    }
}