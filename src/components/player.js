import React, { Component } from 'react';
import Trophie from './assests/clashroyal.jpg';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseurl: 'https://api.royaleapi.com/',
            value: '',
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQ4OCwiaWRlbiI6IjQ3OTY5MTc3MjkzMTYwNDQ5MSIsIm1kIjp7fSwidHMiOjE1MzQ0MzgyMDE5MTV9.5txM8uXDCjCIVLTQMFRpC9GRzB2OsPnsiqLMxU8yNcI',
            query: '',
            data: {},
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://api.royaleapi.com/player/9Q0LQ92J/', { headers: { auth: this.state.apikey } })
            .then(response => response.json())
            .then(json => { this.setState({ isLoaded: true, data: json })})
            .catch(err => console.log('err in api connection'))
    }
            

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="App">
                    <div className="container">
                        <div className="profile">
                            <div className="name">{this.state.data.name}</div>
                            <div className="tag">#{this.state.data.tag}</div>
                            <div className="clan-image"><img src={this.state.data.clan.badge.image} /></div>
                            <span className="clan-name">{this.state.data.clan.name}</span>
                            <span className="clan-role">{this.state.data.clan.role}</span>
                            <span className="trophies">{this.state.data.trophies}</span>
                            <span className="trophie"><img src={Trophie} width="35px" height="35px" /></span>
                            <span className="arena">{this.state.data.arena.name}</span>
                        </div>
                        <div className="chests">
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return ('loading...');
            }
    }
}
export default Player;