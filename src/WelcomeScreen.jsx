import React from "react"; 
import './WelcomeScreen.css';

function WelcomeScreen(props) {

return props.showWelcomeScreen ?

(

<div className="WelcomeScreen">

<h1>Welcome to the Meet app</h1> <h4> Log in to see upcoming events around the world for full-stack developers </h4>

<div className="button_cont" align="center">

<div class="google-btn">

<div class="google-icon-wrapper">

<img class="google-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQlCyX_blcTa7zpGF5RgD1a_rGwb7IIBEe99yu2g6heT3zRsy1Wgjdz0U8v3pOCndWjk&usqp=CAU"

alt="Google sign-in"

/> </div>

<button onClick={() => { props.getAccessToken() }}

rel="nofollow noopener"

class="btn-text"

>

<b>Sign in with google</b> </button>

</div> </div> <a

href="https://darkolanovic.github.io/meet/privacy.html"

rel="nofollow noopener"

>

Privacy policy </a> </div>

) : null

}

export default WelcomeScreen;