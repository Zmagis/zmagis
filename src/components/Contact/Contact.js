import React from "react";
import "./Contact.css";

const Contact = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     message: "",
  //     phone: ""
  //   };
  // }
  // render() {
  return (
    <div className="screen">
      <div className="title">
        <h1>Contact</h1>
      </div>
      <form name="contact" netlify>
        <input
          className="first-name"
          type="text"
          placeholder="First Name"
          // value={this.state.firstName}
          // onChange={e => this.setState({ firstName: e.target.value })}
          name="first-name"
        />
        <input
          className="last-name"
          type="text"
          placeholder="Last Name"
          // value={this.state.LastName}
          // onChange={e => this.setState({ lastName: e.target.value })}
          name="last-name"
        />
        <input
          className="email"
          type="email"
          required
          placeholder="Email"
          // value={this.state.email}
          // onChange={e => this.setState({ email: e.target.value })}
          name="email"
        />
        <input
          className="phone"
          placeholder="Phone"
          // value={this.state.phone}
          // onChange={e => this.setState({ phone: e.target.value })}
          type="phone"
          name="phone"
        />
        <textarea
          className="message"
          type="text"
          required
          placeholder="Message"
          // value={this.state.message}
          // onChange={e => this.setState({ message: e.target.value })}
          name="message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
// }

export default Contact;
