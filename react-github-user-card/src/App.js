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
        console.log('followers res: ', res);
        this.setState({
          followersList: res.data.map(item => {
            axios.get(item.url)
            .then(res => {
              console.log('item res: ', res.data);
            })
          })
        })
      })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   axios
  //   .get('https:api.github.com/users/aldairbalanzar/followers')
  //   .then(res => {
  //     console.log('followers res: ', res.data);
  //     res.data.map(item => {
  //       axios.get(item.url)
  //       .then(res => {
  //         console.log('res: ', res.data);
  //         // this.setState({
  //         //   userList: res.data
  //         // })
  //       });
  //     })
  //   })
  // }

  render(){
    return(
      <div>
        <p>{this.state.user.login}</p>
      </div>
    )
  }
}

export default App;
