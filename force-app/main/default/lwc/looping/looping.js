import UserPreferencesNewLightningReportRunPageEnabled from '@salesforce/schema/User.UserPreferencesNewLightningReportRunPageEnabled';
import { LightningElement } from 'lwc';


export default class Looping extends LightningElement {
    frndName=["Rahul", "Subash", "Ramnath", "Razz"]

    pmName=[
        {
            id:1,
            country:"Nepal",
             pm:"Sherbahadur Deuwa"
        },
        {
            id:2,
            country:"India",
             pm:"Modi"
        },
        {
            id:3,
            country:"USA",
             pm:"Joe Biden"
        },
        {
            id:4,
            country:"China",
             pm:"Xi Jinping"
        }
    ]

    areDetailsVisible = false;

    handleChange() {
        this.areDetailsVisible = !this.areDetailsVisible;
        console.log(areDetailsVisible);
}
    } 
   