import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    state = {
        color: 'black',
        qoute: {text: '', author: ''},
        quotes: []
    }
    async componentDidMount(){
        const response = await axios.get('https://type.fit/api/quotes');
        
        this.setState({quotes: response.data})
        this.setState({qoute: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]}) 
    }
    colors = ['blue', 'red', 'orange', 'green', 'black', 'yellow']
    
    onClick = () => {
        this.setState({ color: this.colors[Math.floor(Math.random() * this.colors.length)] })
        this.setState({qoute: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]})
    }
    render() {
        return (
            <div id='wrapper' style={{ backgroundColor: `${this.state.color}` }}>
                <div id='quote-box' className='jumbotron' style={{ backgroundColor: 'white' }}>
                    
                    <h4 id='text' style={{ color: `${this.state.color}` }}>{this.state.qoute.text}</h4>
                    <p id='author' style={{ color: `${this.state.color}` }}>{`-${this.state.qoute.author}`}</p>
                    <div className='clicks'>
                        <a id='tweet-quote' title='tweet this code' href={`https://twitter.com/intent/tweet?text=${this.state.qoute.text}`} target= "_blank" style={{ color: `${this.state.color}` }}><i className="fab fa-twitter-square"></i></a>
                        <button onClick={this.onClick} id='new-quote' className="btn btn-primary" style={{ backgroundColor: `${this.state.color}` }}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default App