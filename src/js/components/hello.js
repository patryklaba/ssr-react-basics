import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.initText
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event) {
        event.preventDefault();
        this.setState({text: 'Text changed in the browser!'});
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.onButtonClick}>change text!</button>
            </div>
        );
    }
}

export default Hello;