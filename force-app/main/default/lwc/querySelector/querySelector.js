import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    userName=["Bishal", "Rahul", "Subash", "Ramnath"]
    show=false;
    target(){
 const para=this.template.querySelector('h1');
 para.style.border= "1px solid red"
 console.log(para.innerText);

 const users=this.template.querySelectorAll(".name");
Array.from(users).forEach(item => {
    console.log(item.innerText)
    item.setAttribute("title", item.innerText)
});

const clild=this.template.querySelector('.child');
clild.innerHTML='<p>Hey i am child element</p>'
this.show=true;

    }
}