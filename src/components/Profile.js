import React, { Component } from 'react';
import '../Profile.css'
import Chat from './Chat.js'


class Profile extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      isProfileHidden: false,
      isChatShown: false
    };
    this.hideProfileCard = this.hideProfileCard.bind(this);
    this.showChat = this.showChat.bind(this);
  }
  hideProfileCard() {
    this.setState({
      isProfileHidden: true
    })
  };
  showChat() {
    this.setState({
      isChatShown: true
    })
  }
  render() {
    return (
      <div className="Profile-card">
        <h1 className="Profile-name">{this.props.name}</h1>
        <p className="Age">{this.props.age}</p>
        <p className="Location">{this.props.location}</p>
        {this.state.isProfileHidden ? <p>You won't see him again</p> : <button onClick={this.hideProfileCard}>Dislike</button> }
        {this.state.isChatShown ? <Chat name={this.props.name}   /> : <button onClick={this.showChat}>Chat with him</button> }
      </div>
    );
  }
}

export default Profile;