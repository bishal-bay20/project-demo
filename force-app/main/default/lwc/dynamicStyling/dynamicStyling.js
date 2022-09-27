import { LightningElement } from 'lwc';

export default class DynamicStyling extends LightningElement {
     
    percent = 10
    changeHandler(event){
        
        if (event.target.value<=100) {
            this.percent = event.target.value
        } else {
             event.target.value= 10
             this.percent = event.target.value
        }
       
    }      

    get change() {
       
        if(this.percent<=100) {
            return `width:${this.percent}%` 
         
        }else {
            return `width:${this.percent=100}%`
        }
        
    }  
      
}



    
