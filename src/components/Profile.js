import React, { Component } from 'react';
import '../Profile.css'

class Profile extends Component  {

  render() {
    return (
      <div class="Profile-card">
        <h1 class="Profile-name">{this.props.name}</h1>
        <p class="Age">{this.props.age}</p>
        <p class="Location">{this.props.location}</p>
      </div>
    );
  }
}

export default Profile;