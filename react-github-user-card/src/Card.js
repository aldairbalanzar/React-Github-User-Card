import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.user.login}</h1>
                <img src={this.props.user.avatar_url} alt=""/>
            </div>
        );
    }
}

export default Card;