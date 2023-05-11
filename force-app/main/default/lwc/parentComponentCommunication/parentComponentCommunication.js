import { LightningElement } from 'lwc';

export default class ParentComponentCommunication extends LightningElement {
    percentage=20;
    handleOnChange(event){
        this.percentage = event.target.value;
    }
}