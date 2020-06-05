import React from 'react';
import './App.css';
import axios from 'axios';

const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
class App extends React.Component {
    state = {
        color: 'black',
        quote: {text: '', author: ''},
        quotes: []
    }
    async componentDidMount(){
        const response = await axios.get(API);

        this.setState({quotes: response.data.quotes})
        this.setState({quote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]}) 
    }
    colors = ['blue', 'red', 'orange', 'green', 'black', 'yellow']
    
    onClick = () => {
        this.setState({ color: this.colors[Math.floor(Math.random() * this.colors.length)] })
        this.setState({quote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]})
    }
    render() {
        return (
            <div id='wrapper' style={{ backgroundColor: `${this.state.color}` }}>
                <div id='quote-box' className='jumbotron' style={{ backgroundColor: 'white' }}>
                    
                    <h4 id='text' style={{ color: `${this.state.color}` }}>{this.state.quote.quote}</h4>
                    <p id='author' style={{ color: `${this.state.color}` }}>{`-${this.state.quote.author}`}</p>
                    <div className='clicks'>
                        <a id='tweet-quote' title='tweet this code' href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote}`} target= "_blank" rel="noopener noreferrer"  style={{ color: `${this.state.color}` }}><i className="fab fa-twitter-square"></i></a>
                        <button onClick={this.onClick} id='new-quote' className="btn" style={{ backgroundColor: `${this.state.color}` }}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default App