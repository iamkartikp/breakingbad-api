import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Characters extends Component {
    state = {
        posts : []
    }
    componentDidMount() {
        axios.get('https://www.breakingbadapi.com/api/characters')
            .then(res => {
                this.setState({
                    posts : res.data
                })
                console.log(res.data);
            })
            .catch(err => {
                console.log('Loading',err);
            })
    }
    render() {
        return (
            <div className="characters">
                {this.state.posts.slice(0,62).map(res => (
                    <div className="character-container" key={res.char_id}>
                        <img className="responsive-img character-img" src={res.img} alt={res.img} /> <br />
                        <Link to={'/' + res.char_id}>{res.name}</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Characters;

