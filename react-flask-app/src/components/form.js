import React, { Component } from 'react';

class Form extends Component {
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
        <h1>Sample Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        {submittedName && submittedEmail && (
          <div>
            <h2>Result:</h2>
            <p>Hello, {submittedName}. Your email is {submittedEmail}.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Form;
