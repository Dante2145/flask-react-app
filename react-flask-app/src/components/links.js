import React, { Component } from 'react';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      submittedName: '',
      submittedEmail: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    // Process the form data here

    this.setState({
      submittedName: name,
      submittedEmail: email,
    });
  };

  render() {
    const { name, email, submittedName, submittedEmail } = this.state;
    return (
      <div>
        <h1>Links</h1>
        <a href="/scanned_domains">View Scanned Domains</a>
      </div>
    );
  }
}

export default Links;
