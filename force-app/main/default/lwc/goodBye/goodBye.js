import { LightningElement, track } from 'lwc';

export default class GoodBye extends LightningElement {
    fullname="Rahul"
     /** Normal Properties  **/
    title="Chaprasi"

    changeHandler(event){   
       this.title= event.target.value
    }
 
    /**  @track properties  **/
    @track address={
        city:"Motisar",
        postCode:"94849",
        Country:"Nepal"
    }

    cityHandler(event){
        this.address.city = event.target.value
      // this.address={...this.address, "city":event.target.value}
    }

     /** Getter **/
     users=["Rahul", "Ramnath", "Bishal"]
       get firstuser(){
        return this.users[0]
       }

       num1=20;
       num2=30;
       get Sum(){
        return this.num1+this.num2
       }
}