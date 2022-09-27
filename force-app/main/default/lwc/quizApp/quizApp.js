import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={}  // for stroing answers
    correctAnswers=0; // to show the number of correct Answer
    isSubmitted=false // use to shoe the result
    myQuestion=[
        {
            id:"Question1",
            Question:"Who  is the PM of the Nepal",
            answer:{
                 a:"KP Sharma Oli",
                 b:"Pushpa Kamal Dahal",
                 c:"Sher Bahadur Deuba"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            Question:"Who is the mayor of birgunj nepal",
            answer:{
                 a:"Bijay Kumar Sarawagi",
                 b:"Rajesh Man Singh",
                 c:"Rahul Gupta"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            Question:"How much  Rahul Kumar have girl Frnd ",
            answer:{
                 a:"One",
                 b:"Four",
                 c:"infinite"
            },
            correctAnswer:"c"
        }

    ]

   get allNotSelected() {
       return !(Object.keys(this.selected).length === this.myQuestion.length)
   }

   get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswers?
    'slds-text-color_success':'slds-text-color_error'}`
   }
    changeHandler(event){
         const {name, value} = event.target
         this.selected={...this.selected, [name]:value}
    }

    submitHandler(event){
       event.preventDefault()
       let correct = this.myQuestion.filter(item=>this.selected[item.id]=== item.correctAnswer)
       this.correctAnswers = correct.length
       this.isSubmitted=true
       
    }

    resetHandler(){
         this.selected={}
         this.correctAnswers=0
         this.isSubmitted=false
    }
}