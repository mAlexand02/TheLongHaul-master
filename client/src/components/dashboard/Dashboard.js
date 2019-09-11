import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import "./Dashboard.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (

      <div>
  {
    // Nav
  }
        <nav>
          <div className = "nav-wrapper grey darken-4">
            <div className ="title">
               {/*<Link to="/Dashboard" class="">The Long Haul</Link>*/}
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/Trucks">Trucks</Link></li>
                <li><Link to="/Trailers">Trailers</Link></li>
                <li><Link to="/" onClick={this.onLogoutClick}><i class="material-icons left">account_box</i>Log Out</Link></li>
                </ul>
              </div>
            </div>
          </nav>
{
  // Welcome with your name
}

              <div className="welcome white-text">
                <b>Welcome,</b> {user.name.split(" ")[0]}
              </div>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
