
import React, { Component } from 'react';
import { loadWeather } from '../ducks/WeatherDuck';

export class Button extends Component {

    constructor(props) {
        super(props);
        this.dispatch = props.dispatch; // This is haxor, but let it be for now
    }

    render() {
        return (
            <button type='button' onClick={() => this.dispatch(loadWeather())}>Get weather</button>
        )
    }
}