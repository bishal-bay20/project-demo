import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import renderTemplate from './renderMethod.html'
import successTemplate from './successTemplate.html'
export default class RenderMethod extends LightningElement {

    selectedBtn=''
    success=''
     
    render(){
     return  this.selectedBtn === 'Signin' ? signInTemplate :
     this.selectedBtn === 'Signup' ? signUpTemplate :
     this.selectedBtn === 'Back' ? renderTemplate :
     this.selectedBtn === 'Submit' ? successTemplate :
     renderTemplate
    }

    handlerClick(event){
           this.selectedBtn = event.target.label
    }
    
     color=''
    

    submitHandler(event){
        this.selectedBtn = event.target.label
        if(event.target.title === 'Signin') {
            this.success=`${event.target.title}`
            this.color=`slds-text-heading_large slds-var-m-around_medium slds-var-m-bottom_medium slds-text-color_success`
               
        } else {
            this.success=`${event.target.title}`
            this.color=`slds-text-heading_large slds-var-m-around_medium slds-var-m-bottom_medium slds-text-color_error`
        } 
        
    }
}