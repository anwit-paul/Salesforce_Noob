import { LightningElement } from 'lwc';

export default class BindHTMLDynamic extends LightningElement {
    myValue = "Salesforce Bolt";
    handleChange(event){
        this.myValue=event.target.value;
    }
}