import React, { Component } from 'react';

import '../../../../node_modules/font-awesome/css/font-awesome.css';

const FullStar = ({ value, onClick }) => {
    const onStarClicked = () => onClick(value);
    return <i className="fa fa-star" style={{ color: "yellow", backgroundColor: "blue" }} onClick={onStarClicked}></i>
}

const EmptyStar = ({ value, onClick }) => {
    const onStarClicked = () => onClick(value);
    return <i className="fa fa-star fa-star-o" onClick={onStarClicked}></i>;
}

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        const currentValue = this.props.rating || 0;
        this.state = { currentValue };

        this.onRatingElementClicked = this.onRatingElementClicked.bind(this);
    }

    onRatingElementClicked(elementValue) {
        this.setState({ currentValue: elementValue });
        this.props.onChange && this.props.onChange(elementValue);
    }
    createArray(numberToGenerate) {
        const numbers = [];
        for (let i = 1; i <= numberToGenerate; i++)
            numbers.push(i);
        return numbers;
    }

    render() {
        const currentRating = this.state.currentValue;
        var starsArray = this.createArray(this.props.stars);

        return starsArray.map(ratingElement => {
            if (ratingElement <= currentRating)
                return <FullStar key={ratingElement} value={ratingElement} onClick={this.onRatingElementClicked} />;
            else
                return <EmptyStar key={ratingElement} value={ratingElement} onClick={this.onRatingElementClicked} />
        });
    }
}