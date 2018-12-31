import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // constructor functions very first function ...like initialize in ruby.
    constructor(props){
        super(props); // super, like a in ruby... Takes the parents constructor function.
        this.state = {
            lat: null,
            errorMessage: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // Call this.setState to set the state of the object.
                this.setState({ lat: position.coords.latitude })

                // Do not do this:
                // this.state.lat = position.coords.latitude
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );

    }

    // React says we have to define render!!
    render() {
      if(this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage } </div>
      }
      else if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat } </div>
      }
      else {
            return <div>Loading... </div>
      }
        //<SeasonDisplay/>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)