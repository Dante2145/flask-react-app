import React, { Component } from 'react';

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: '',
      IP: '',
      submittedDomain: '',
      submittedIP: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { domain, IP } = this.state;
    // Process the form data here

    this.setState({
      submittedDomain: domain,
      submittedIP: IP,
    });
  };

  render() {
    const { domain, IP, submittedDomain, submittedIP } = this.state;
    return (
      <div>
        <h1>My Domain Scanner</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="domain">Domain:</label>
          <input
            type="text"
            id="domain"
            name="domain"
            required
            value={domain}
            placeholder='Enter Domain'
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="IP">IP Address:</label>
          <input
            type="text"
            id="IP"
            name="IP"
            required
            value={IP}
            placeholder='Enter IP Address or Domain'
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>

        {submittedDomain && submittedIP && (
          <div>
            <h2>Result:</h2>
            <p>Hello, {submittedDomain}. Your IP Address {submittedIP}.</p>
          </div>
        )}

      </div>
    );
  }
}

export default Scanner;
