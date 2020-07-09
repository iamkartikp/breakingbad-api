import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Post extends Component {
    state = {
        chars: null
    }
    componentDidMount() {
        let id = this.props.match.params.char_id;
        axios.get('https://www.breakingbadapi.com/api/characters/' + id)
            .then(res => {
                this.setState({
                    chars: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const brba = this.state.chars ? (
            <div className="post">
                {this.state.chars.map(c => (
                    <div className="post-characters responsive-img" key={c.char_id}>
                        <img className="responsive-img post-img" src={c.img} alt={c.img} />
                        <h3>{c.name}</h3>
                        <h5>Birthdate: {c.birthday}</h5>
                        <h5>Status: {c.status}</h5>
                        <h5>Nickname: {c.nickname}</h5>
                        <h5>Portrayed By: {c.portrayed}</h5>
                        <h5>Occupation: {c.occupation}</h5>
                        <h5>Seasons Appeared: {c.appearance}</h5>
                    </div>
                ))}
            </div>
        ) : (
            <div className="loading center">
                <h1>Loading...</h1>
            </div>
        ) ;
        return (
            <div>
                {brba}
            </div>
        )
    }
}

export default Post;
