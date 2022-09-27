import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisibel = false
    constructor(){
        super()
        console.log("Parent Constructor called");
    }

    connectedCallback(){
        console.log("Parent  connectedCallback called");
    }

    renderedCallback(){
        console.log("Parent   renderedCallback called");
    }
    clickHandler(){
      this.isChildVisibel  = !this.isChildVisibel 
    }
}