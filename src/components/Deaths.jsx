import React, { Component } from 'react';
import axios from 'axios';

class Deaths extends Component {
    state = {
        deaths : []
    }

    componentDidMount() {
        axios.get('https://breakingbadapi.com/api/deaths')
            .then(death => {
                this.setState({
                    deaths: death.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="quotes">
                {this.state.deaths.map(d => (
                    <div className="quote-text">
                        <h4>Character: {d.death}</h4>
                        <p>Cause: {d.cause}</p>
                        <p>Killer: {d.responsible}</p>
                        <p>Last Words: ❝ {d.last_words} ❞</p>
                        <p>Number of Deaths: {d.number_of_deaths}</p>
                        <p>Season: {d.season}, Episode: {d.episode}</p>
                    </div>
                ))}
            </div>
        )
    }
}


export default Deaths;

