import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { JsonToTable } from "react-json-to-table";


class Showresults extends Component {
    constructor() {
        super();
        this.state = { items: [] }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { search } = this.props.search;
        const items = {
            Name: search.user,
            Surname: search.surname,
            Gender: search.gender,
            Region: search.region,
            Phone: search.phone,
            Email: search.email,
            Password: search.password,
            Photo: search.photo
        };

        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">

                        <h5>
                            <b>Search Results</b>

                        </h5>
                        <div>

                            <JsonToTable json={items} />

                        </div>
                        <button
                            style={{
                                width: "110px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Logout
            </button>
                    </div>
                </div>
            </div>
        );
    }
}
Showresults.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    search: state.search
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Showresults);