import React from 'react';
import "./Signup.css";
import img from '../../assets/nav.png';
import i from '../../assets/three.png';
import im from '../../assets/one.png';
import ima from '../../assets/two.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const Signup = () => {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="header">
            <img src={img}></img>
          </div>
          <div className="signinform">
            <h1>Sign Up</h1>
            <p class="mb-5">
            Sign up now to create your account and start managing all your meetings in one convenient place
            </p>
            <form>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">
                  First name
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  class="form-control"
                  placeholder="e.g: elonmusk@mars.com"
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">
                  Last name
                </label>
                <input
                  type="text"
                  id="form2Example1"
                  class="form-control"
                  placeholder="e.g: X A-12"                />
              </div>
              <div data-mdb-input-init class="form-outline mb-">
                <label class="form-label" for="form2Example2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="form2Example2"
                  class="form-control"
                  
                />
              </div>
             
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-primary btn-block mb-4 mt-5 w-100 rounded-pill">
                Create My Account
              </button>
            </form>
          </div>
        </div>  
        <div className='chatbot-container'>
          <div className='chatbot'>
            <h1>AI Chatbots</h1>
            <p>Consolidate all your meetings, track their progress, participants, and details in one central location</p>
          </div>
          <div className='card-stack'>
            <img class="card1" src={i}></img>
            <img class="card2" src={im}></img>
            <img class="card3" src={ima}></img>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Signup;
