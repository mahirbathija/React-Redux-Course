import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    state = {lat:null, errmess: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({errmess:err.message})
        );
    }

    renderContent() {
        if (!this.state.errmess && this.state.lat) {
            return (
                <SeasonDisplay lat = {this.state.lat} />
            );
        }

        if (this.state.errmess && !this.state.lat) {
            return (
                <div>Error: {this.state.errmess}</div>
            );
        }

        return (
            <Loader message = 'Accept location request'/>
        );
    }
    render() {  
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('#root'))
