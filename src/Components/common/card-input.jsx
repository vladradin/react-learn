import React, { Component } from 'react';

function checkIfTypeIsParseableAs(textValueArrays = []) {
    var matchNumber = /^[0-9]{0,4}$/i;
    for (let nr of textValueArrays) {        
        if (!matchNumber.test(nr))
            return false;
    }
    return true;
}

function splitAtElementh(elementToSplitAt = 4, valueToSplit) {
    console.log(elementToSplitAt);
    return valueToSplit.split(" ",elementToSplitAt);
}
class CardInput extends Component {
    constructor(props) {
        super(props);
        this.state = { crtValue: "" };
        this.onChangedValue = this.onChangedValue.bind(this);
    }

    onChangedValue = (event) => {
        var val = event.target.value;
        var isParseableAsNumber = checkIfTypeIsParseableAs(splitAtElementh(4,val));
        if (isParseableAsNumber) {
            this.setState({ crtValue: event.target.value })
            return;
        }
        event.preventDefault();
    };

    render() {
        return <input type="text" value={this.state.crtValue} onChange={this.onChangedValue} />
    }
}

export default CardInput;