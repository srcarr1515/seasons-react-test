import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
    summer: {text: 'Let\'s his the beach!', icon: 'sun'},
    winter: {text: 'Burr, it\'s cold!', icon: 'snowflake'}
}

const getSeason = (lat, month) => {
    var is_season = (lat) => {return  lat > 0 ? 'winter' : 'summer'};
    if(month > 2 && month < 9){
        return is_season(lat);
    }
    else {
        return is_season(lat);
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    return (
        <div className={`season-display ${season}`}>
            <i className={`massive icon-left ${seasonConfig[season].icon} icon`}></i>
            <h1>{ seasonConfig[season].text }</h1>
            <i className={`massive icon-right ${seasonConfig[season].icon} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;