import React,{Component} from 'react';

class Clan extends Component{
    constructor(props){
        super(props);
        this.state = {
            idLoaded:false,
            data:{},
        }
    }

    componentDidMount(){
        fetch('https://api.royaleapi.com/clan/R0V8RCC', { headers: { auth: this.state.apikey } })
            .then(response => response.json())
            .then(json => { this.setState({ isLoaded: true, data: json })})
            .catch(err => console.log('err in api connection'))
    }

    render(){
        if(this.state.isLoaded)
        return(
            <div>
               {this.state.data} 
            </div>
        );
        else{
            return(
                <div>
                    unable to fetch data
                </div>
            );
        }
    }
}
export default Clan;