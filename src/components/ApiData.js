import React, { Component } from 'react';
import Form from './Form';
import Weather from './Weather';

const API_KEY = "6cc48ffd9f03a046b3d30f0f3b5e0742";


export class ApiData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined,  
            main: undefined,
            search_history: [],
        };
    }
    

    getWeather = async e => {
        e.preventDefault();

        const city = e.target.city.value;

        if (city) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

            const response = await api_call.json();
            // const { main, name, weather } = await api_call.json()
              console.log(response)
            this.setState({
                
                city: response.name,
                temperature: response.main.temp,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: "",
                // search_history: [...this.state.search_history,{city:this.state.city}]

            });
            if(city!=undefined){
                this.setState({
                    search_history: [...this.state.search_history,{city:this.state.city}]
                })
            }
        }
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values.",
                // search_history: [...this.state.search_history]
            });
        }


    }
    render() {
        return (
            <div>
 <Form getWeather={this.getWeather} />
 {console.log(this.state.search_history)}
 <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                   history= {this.state.search_history}
                  />

                  
            </div>
        )
    }
}

export default ApiData;
