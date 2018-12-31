import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // constructor functions very first function ...like initialize in ruby.
    // constructor(props){
    //     super(props); // super, like a in ruby... Takes the parents constructor function.
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     }
    // }

// If we initialize the state like this we are required to put additional logic in the componentDidMount() function.
    state = {lat:  null, errorMessage: ''}

    // 21 Hours (Roughly) Of Video Remaining At This Point.
    // Seriously? As I begin to learn React, the more I feel I'm enjoying this framework.
    // With these three functions down here it makes each component feel like an mtg card.
    //
    // componentDidMount(){
    //     // This function will be call when the component is rendered on the screen
    //          // Clearly this a enters the battlefield.
            // Btw apparently it is considered best practice to include additional functions outside the constructor function inside
            // this function... However it is allegedly fine (from a technical standpoint) to do it here or in the constructor function.

    // }

    // componentDidUpdate(){
    //     // This function will be call when the component is updated (when it is updated).
                // Clearly this is a tap ability.
    // }

    // componentWillUnmount(){
    //     // This function will be call when the component is to be destroyed (when it is updated).
                // So you destroy it... Or sac it.
    // }
    
    // Btw these are called Lifecycle Methods.

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // Call this.setState to set the state of the object.
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
                // Do not do this:
                // this.state.lat = position.coords.latitude
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