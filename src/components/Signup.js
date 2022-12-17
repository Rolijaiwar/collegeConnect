import React from 'react';
import signpic from "../components/signup.jpg";

class Signup extends React.Component {
    state = {  } 
    render() { 
        return(
          <div className='signup'>
            <h2 className='intro'>Join Us On collegeConnect</h2>
            <div className="container">
              <div className="signup-content">
                
                <div className='signup-form'>
                   <h2 className='form-title'>Sign up</h2>
                   <form className='register-form' id='register-form'>
                    <div className='form-group'>
                      <label htmlFor="name">First Name: </label>
                      <input type="text" name="name" id="name" autocomplete='off' placeholder="First Name"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="name">Last Name: </label>
                      <input type="text" name="name" id="name" autocomplete='off' placeholder="Last Name"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="email">Email   : </label>
                      <input type="email" name="email" id="emai" autocomplete='off' placeholder="Your Email"></input>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="password">Password: </label>
                      <input type="password" name="password" id="password" autocomplete='off' placeholder="Your Password"></input>
                    </div>
                    <div className='form-button'>
                      <input type="submit" name="signup" id="signup" className='form-submit' value="Sign Up"></input>
                    </div>
                   </form>
                </div>   
                   <div className='signup-image'>
                      <figure>
                        <img src={signpic} alt="registration pic"></img>
                      </figure>
                      <h3>Already signup?</h3>  
                      <div className='form-button'>
                      <input type="submit" name="signup" id="signup" className='form-submit' value="Login"></input>
                      </div>
                      
                    </div>
                
              </div> 
            </div>

          </div>
        );
    }
}
 
export default Signup;