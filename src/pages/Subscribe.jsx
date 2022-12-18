import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class Subscribe extends Component {
  render() {
    return (
        <Mailchimp
        action='https://gmail.us14.list-manage.com/subscribe/post?u=b03d9109a26cfb0577cdcd37a&amp;id=ea73fb1632&amp;f_id=00f582e0f0'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    );
  }
}
 
export default Subscribe;