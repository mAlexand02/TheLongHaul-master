import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
<div>
      <div class="row">
          <div class="col 12 black">
            <div className="title">
              <Link to="/" class="white-text">The Long Haul</Link>
            </div>
          </div>
        </div>


        
</div>
    );
  }
}
export default Navbar;
