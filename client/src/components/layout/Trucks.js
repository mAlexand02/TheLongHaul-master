import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Trucks.css";

import TruckOne from "./assets/TruckOne.jpg";

class Trucks extends Component {
  constructor(props){
    super(props);

    this.state = {
      on: false,
      off: true,

    }
  };
  toggle = () => {
  this.setState ({ on: !this.state.on})
}
  render() {
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
          <li><Link to="/Login"><i class="material-icons left">account_box</i>Log In</Link></li>
        </ul>
        </div>
      </div>
    </nav>

{
  // Title
}
        <div class="truckstitle white-text">Trucks</div>

{
  // Filter Dropdown
}
        <div class="filter">
          <a class="waves-effect grey darken-4 btn" onClick={this.toggle}><i class="material-icons right">arrow_drop_down</i>Filters</a>
        </div>

        {this.state.on && (

          <div class="filterrow">
            <a class="waves-effect grey darken-4 btn">Mack</a>
            <a class="waves-effect grey darken-4 btn">Peterbilt</a>
            <a class="waves-effect grey darken-4 btn">Volvo</a>
            <a class="waves-effect grey darken-4 btn">Clear Filter</a>
          </div>

        )}
{
  // Row 1
}
    <div class="alignrow">
      <div class="row">

        <div class="col s2">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={TruckOne}/>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Peterbilt 379<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Peterbilt 379<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">TerraPro<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">TerraPro<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Granite<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Granite<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Pinnacle<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Pinnacle<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Mack Anthem<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Mack Anthem<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>


        </div>

{
  //Row 2
}

        <div class="row">

        <div class="col s2">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={TruckOne}/>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">W990<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">W990<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">T680<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">T680<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">W900<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">W900<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Peterbilt 579<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Peterbilt 579<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

          <div class="col s2">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={TruckOne}/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Peterbilt 389<i class="material-icons right">more_vert</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Peterbilt 389<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>


        </div>
      </div>

{
  // Footer
}

      <footer class="page-footer black">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">The Long Haul</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><Link to="/"class="grey-text text-lighten-3">Home</Link></li>
                  <li><Link to="/Trailers"class="grey-text text-lighten-3">Trailers</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Copyright Text Here
            </div>
          </div>
        </footer>




      </div>
    );
  }
}
export default Trucks;
