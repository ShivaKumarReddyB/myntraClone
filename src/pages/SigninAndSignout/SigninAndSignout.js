 import React from "react";
 import './SigninAndSignout.scss';
 import SignIn from '../../components/SignIn/SignIn.component';
 import SignUp from '../../components/signUp/signUp.component';


 const SigninAndSignOut=()=>(
     <div className='Sign-in-and-Sign-out'>
         <SignIn/>
        <SignUp/>      
     </div>
 )
 export default SigninAndSignOut