import React, { Component } from 'react';

class Card extends Component {
    render() {
        const mystyle = {
            backgroundColor: "salmon",
            width: '30%',
            border: '4px solid lightblue',
            padding: '1% 0 1% 6%'
          };
        return (
            <div>
                <h1 style={mystyle}>{this.props.user.login}</h1>
                <img src={this.props.user.avatar_url} alt=""/>
            </div>
        );
    }
}

export default Card;