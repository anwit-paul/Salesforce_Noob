import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    value = '';
    showMe = true;

    get options() {
        return [
            { label: 'Visible', value: 'I am visible once' },
            { label: 'Not Visible', value: 'I am not visible once' },
        ];
    }

    get selectedValues() {
        return this.value;
    }

    handleChange(e) {
        this.value = e.detail.value;
        if (this.value == true) {
            this.showMe=true;
        }
        if (this.value == true) {
            this.showMe=true;
        }
    }

    // get showMe(){
    //     if(this.value==='I am visible once'){
    //         return this.value;
    //     }
    //     if(this.value==='I am not visible once'){
    //         return this.value;
    //     }
    //     else{
    //         return '';
    //     }
    // }
}
