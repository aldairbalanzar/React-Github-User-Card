import React, { Component } from 'react';
import Card from './Card'

import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followersList: []
    };
  }

  componentDidMount() {
      axios
      .get(`https:api.github.com/users/aldairbalanzar`)
      .then(res => {
        console.log('res: ', res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log('err: ', err);
      })
      axios
      .get('https:api.github.com/users/aldairbalanzar/followers')
      .then(res => {
        console.log('followers res: ', res.data);
          res.data.map(item => {
            axios.get(item.url)
            .then(res => {
              this.setState({
                followersList: [...this.state.followersList, res.data]
              })
            })
          })
      })
  }

  componentDidUpdate() {
    console.log(this.state.followersList)
  }

  render(){

    const mystyle = {
      backgroundColor: "DodgerBlue"
    };

    return(
      <div>
        <Card styles={mystyle} user={this.state.user} />
        {this.state.followersList.map(item => {
          return(
          <Card user={item} />
          )
        })}
      </div>
    )
  }
}

export default App;
