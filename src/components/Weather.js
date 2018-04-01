import React, { Component } from 'react';

// TODO: 
// - Extract more weather data

export class Weather extends Component {

    /*
    componentDidMount() {
        fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ this.state.city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then(response => response.json())
            .then(data => {
                console.log(data.query.results);
                console.log(data.query.results.channel.astronomy);
                console.log(data.query.results.channel.location.city);
                this.setState( {ready:true, weatherdata: data.query.results.channel });
                }
            );
    }
    */

    render() {
        const weatherdata = this.props.weatherdata;

        if (!weatherdata || Object.keys(weatherdata).length === 0) {
            return <div>Please enter the location</div>;
        }
        return (
            <div>
                <p>Location: {weatherdata.location.city}</p>
                <p>Sunrise: {weatherdata.astronomy.sunrise} Sunset: {weatherdata.astronomy.sunset}</p>
            </div>
        );
    }
}

