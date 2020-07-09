import React, { Component } from 'react';
import axios from 'axios';
// import quote from '../media/quote.png';
// ❝  ❞

class Quotes extends Component {
    state = {
        quotes : []
    }
    componentDidMount() {
        axios.get('https://breakingbadapi.com/api/quotes')
            .then(quote => {
                this.setState({
                    quotes: quote.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className="quotes">
                {this.state.quotes.map(q => (
                    <div className="quote-text">
                        <h4>❝ {q.quote} ❞</h4>
                        <p>- {q.author} ( {q.series} )</p>
                    </div>
                ))}
            </div>
        )
    }
}


export default Quotes;

