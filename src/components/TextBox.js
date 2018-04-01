
import React, { Component } from 'react';

import { changeCity } from '../ducks/WeatherDuck';


export class TextBox extends Component {
    constructor(props) {
        super(props);

        // Initial state for this component
        this.state = {
            value: props.city
        }

        this.dispatch = props.dispatch // This is haxor, but let it be for now
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <input type='text'
                value={this.state.value}
                autoFocus='autofocus'
                onChange={this.handleChange.bind(this)}
                onBlur={() => this.dispatch(changeCity(this.state.value))}
            />
        )
    }
}