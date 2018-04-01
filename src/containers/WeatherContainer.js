import { connect } from 'react-redux';
import { Weather } from '../components/Weather';


function mapStateToProps(state, ownProps) {
    console.log("mapStateToProps");
    console.log(state);
    console.log(ownProps);
    return {
        ...ownProps,
        ready: state.weather.ready,
        weatherdata: state.weather.weatherdata
    }
}

export default connect(mapStateToProps)(Weather);

