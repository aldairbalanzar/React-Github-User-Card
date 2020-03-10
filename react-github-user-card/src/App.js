import React, { Component } from 'react';
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
    return(
      <div>
        <p>{this.state.user.login}</p>
        {this.state.followersList.map(item => {
          return(
          <p>{item.login}</p>
          )
        })}
      </div>
    )
  }
}

export default App;
