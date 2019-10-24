import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            password2: "",
            gender: "",
            region: "",
            age: "",
            title: "",
            phone: "",
            birthdaymdy: "",
            creditcard: "",
            ccexp: "",
            ccpin: "",
            ccsecurity: "",
            photo: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            gender: this.state.gender,
            region: this.state.region,
            age: this.state.age,
            title: this.state.title,
            phone: this.state.phone,
            birthdaymdy: this.state.birthdaymdy,
            creditcard: this.state.creditcard,
            ccexp: this.state.ccexp,
            ccpin: this.state.ccpin,
            ccsecurity: this.state.ccsecurity,
            photo: this.state.photo
        };

        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to
                            home
            </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
              </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name
                                    })}
                                />
                                <label htmlFor="name">Name</label>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.surname}
                                    error={errors.surname}
                                    id="surname"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.surname
                                    })}
                                />
                                <label htmlFor="surname">Surname</label>
                                <span className="red-text">{errors.surname}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="red-text">{errors.password2}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.gender}
                                    error={errors.gender}
                                    id="gender"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.gender
                                    })}
                                />
                                <label htmlFor="gender">Gender</label>
                                <span className="red-text">{errors.gender}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.region}
                                    error={errors.region}
                                    id="region"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.region
                                    })}
                                />
                                <label htmlFor="region">Region</label>
                                <span className="red-text">{errors.region}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.age}
                                    error={errors.age}
                                    id="age"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.age
                                    })}
                                />
                                <label htmlFor="age">Age</label>
                                <span className="red-text">{errors.age}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    error={errors.title}
                                    id="title"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.title
                                    })}
                                />
                                <label htmlFor="title">Title</label>
                                <span className="red-text">{errors.title}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                    error={errors.phone}
                                    id="phone"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.phone
                                    })}
                                />
                                <label htmlFor="phone">Phone</label>
                                <span className="red-text">{errors.phone}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.birthdaymdy}
                                    error={errors.birthdaymdy}
                                    id="birthdaymdy"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.birthdaymdy
                                    })}
                                />
                                <label htmlFor="birthdaymdy">Birthday MDY</label>
                                <span className="red-text">{errors.birthdaymdy}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.creditcard}
                                    error={errors.creditcard}
                                    id="creditcard"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.creditcard
                                    })}
                                />
                                <label htmlFor="creditcard">Credit Card Number</label>
                                <span className="red-text">{errors.creditcard}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.ccexp}
                                    error={errors.ccexp}
                                    id="ccexp"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.ccexp
                                    })}
                                />
                                <label htmlFor="ccexp">Expiration Date MM/YY</label>
                                <span className="red-text">{errors.ccexp}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.ccpin}
                                    error={errors.ccpin}
                                    id="ccpin"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.ccpin
                                    })}
                                />
                                <label htmlFor="ccpin">Pin</label>
                                <span className="red-text">{errors.ccpin}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.ccsecurity}
                                    error={errors.ccsecurity}
                                    id="ccsecurity"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.ccsecurity
                                    })}
                                />
                                <label htmlFor="ccsecurity">CVV Code</label>
                                <span className="red-text">{errors.ccsecurity}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.photo}
                                    error={errors.photo}
                                    id="photo"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.photo
                                    })}
                                />
                                <label htmlFor="photo">Photo URL</label>
                                <span className="red-text">{errors.photo}</span>
                            </div>

                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                    Sign up
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));