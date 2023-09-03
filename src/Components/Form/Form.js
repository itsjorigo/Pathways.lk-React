import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      dob: '',
      education: '',
      dreamOccupation: '',
      location: '',
      message: '',
      errors: {
        fullname: '',
        email: '',
        dob: '',
        education: '',
        dreamOccupation: '',
        location: '',
        message: '',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      // Process the form data or make API calls here
      console.log('Form submitted:', this.state);
      // Clear the form after submission
      this.setState({
        fullname: '',
        email: '',
        dob: '',
        education: '',
        message: '',
      });
    }
  };

  handleReset = () => {
    this.setState({
      fullname: '',
      email: '',
      dob: '',
      education: '',
      message: '',
      errors: {
        fullname: '',
        email: '',
        dob: '',
        education: '',
        message: '',
      },
    });
  };

  validateForm = () => {
    const { fullname, email, dob, education, message } = this.state;
    const errors = {};

    if (!fullname) {
      errors.fullname = 'Full name is required';
    }
    // Add more validation rules for other fields

    this.setState({ errors });
    return Object.values(errors).every((error) => error === '');
  };

  render() {
    const {
      fullname,
      email,
      dob,
      education,
      message,
      dreamOccupation,
      location,
      errors,
    } = this.state;

    return (
      <div className="form-container">
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={this.handleChange}
            />
            {errors.fullname && <div className="error">{errors.fullname}</div>}
          </div>
          
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          
          <div className="form-field">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={this.handleChange}
            />
            {errors.dob && <div className="error">{errors.dob}</div>}
          </div>
          
          <div className="form-field">
            <label>Highest Education:</label>
            <select name="education" value={education} onChange={this.handleChange}>
              <option value="">Select</option>
              <option value="highschool">High School</option>
              <option value="undergrad">Undergraduate</option>
              <option value="graduate">Graduate</option>
            </select>
            {errors.education && <div className="error">{errors.education}</div>}
          </div>

          <div className="form-field">
          <label>Dream Occupation:</label>
          <input
            type="text"
            name="dreamOccupation"
            value={dreamOccupation}
            onChange={this.handleChange}
          />
        </div>
        
        <div className="form-field">
          <label>Location:</label>
          <select name="location" value={location} onChange={this.handleChange}>
            <option value="">Select</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            <option value="city3">City 3</option>
            {/* Add more location options */}
          </select>
        </div>
          
          <div className="form-field">
            <label>Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.handleReset}>Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;