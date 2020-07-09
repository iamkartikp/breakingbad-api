import React, { Component } from 'react';
import axios from 'axios';

class Episodes extends Component {
    state = {
        episodes : []
    }
    componentDidMount() {
        axios.get('https://breakingbadapi.com/api/episodes')
            .then(res => {
                this.setState({
                    episodes: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className="episodes-card">
                {this.state.episodes.map(epi => (
                    <div className="episodes">
                        <h4>{epi.series}</h4>
                        <h6>Title: {epi.title}</h6>
                        <p>Season: {epi.season} Episode: {epi.episode}</p>
                        <p>Air Date: {epi.air_date} </p>
                        <p>Characters: {epi.characters.slice(0,6)}</p>
                    </div>
                ))}
            </div>
        )
    }
}


export default Episodes;

