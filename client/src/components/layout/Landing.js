import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

//Images

class Landing extends Component {
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
  // row 1
}

    <div class="row">

      <div class="col s3">
       <div class="card grey darken-4">
        <div class="card-content white-text">
       <span class="card-title">Peterbilt</span>
       <p>I am a very simple card. I am good at containing small bits of information.
       I am convenient because I require little markup to use effectively.</p>
       </div>
       <div class="card-action">
       <Link to="/Trucks">Learn More</Link>
       </div>
     </div>
   </div>

   <div class="aligncard2">
     <div class="col s8">
      <div class="card grey darken-4">
       <div class="card-content white-text">
      <span class="card-title">Trailers</span>
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
      <Link to="/Trailers">Learn More</Link>
      </div>
    </div>
  </div>
</div>

 </div>


 <footer class="page-footer black">
     <div class="container">
       <div class="row">
         <div class="col l6 s12">
           <h5 class="white-text">The Long Haul</h5>
           <p class="grey-text text-lighten-4"></p>
         </div>
         <div class="col l4 offset-l2 s12">
           <h5 class="white-text">Links</h5>
           <ul>
             <li><Link to="/"class="grey-text text-lighten-3">Home</Link></li>
             <li><Link to="/Trailers"class="grey-text text-lighten-3">Trailers</Link></li>
             <li><Link to="/Trucks"class="grey-text text-lighten-3">Trucks</Link></li>
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
export default Landing;
