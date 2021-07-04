
import { useState } from 'react';
import styles from './Login_SignUp.module.css';
import Signup from './Signup';
import Login from './Login';
import { baseurl, url } from '../../URL';

function Login_SignUp_Component(){
    const [ signUp, setSignUP] = useState(true);
    const [ isRecut ,setRecut] = useState(true);

    const onSubmit_SignUpform = (e) => {      
        // console.log("..",e )
        // const data = {
        //     "name": e.target["name"].value,
        //     "phone":  parseInt(e.target["phone"].value, 10),
        //     "email": e.target["email"].value,
        //     "password": e.target["pwd"].value           
        // }

        // var requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     data: JSON.stringify(data)
        // };

        // let url = '';
        // if(isRecut){
        //     url = baseurl + '/recuiters/register'
        // }
        // else{
        //     url = baseurl + '/candidates/register'
        // }
       

        // fetch(url, requestOptions)
        // .then(res => res.json())
        // .then(result => {
        //     console.log("response ", result);
        //     if(result.success === 1){
        //         setSignUP(false);
        //         console.log("Sign-up successful")
        //     }
        // })
        // .catch(error => console.log('Error while Sign-up', error));        
    }

    const onSubmit_SignInform = (e) => {
        // console.log("..",e )
        // const data = {
        //     email: e.target["email"].value,
        //     password: e.target["pwd"].value
           
        // }
        // console.log("..",data )
        // var requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     data: JSON.stringify(data)
        // };

        // let url ='';
        // if(isRecut){
        //     url = baseurl + '/recuiters/login'
        // }
        // else{
        //     url = baseurl + '/candidates/login'
        // }
        // fetch(url, requestOptions)
        // .then(res => res.json())
        // .then(result => {
        //     console.log("response ", result);
        //     if(result.success === 1){
        //         if(isRecut){
        //             window.location = "/recruiter-portal";
        //         }
        //         else{
        //             window.location = "/candiadte-portal";
        //         }
        //         console.log("Sign-In successful")
        //     }
        // })
        // .catch(error => console.log('Error while Sign-In', error));  
        window.location = "/recruiter-portal";
       
        
    }

    return(
        <div className="container">
            <div className={styles.Login_SignUp_card}>
                <div className={styles.top_bar}>
                    <button type="button" 
                            id="signupBtn" 
                            className={styles.btn_}
                            style={signUp ? {boxShadow: "2px 0px 5px lightgray ", fontWeight:'bold'}: null}
                            onClick={() => setSignUP(!signUp)} >Sign-Up</button>
                    <button type="button" 
                            id="signinBtn"
                            className={styles.btn_}
                            style={signUp ? null: {boxShadow: "2px 0px 5px lightgray ", fontWeight:'bold'}}
                            onClick={() => setSignUP(!signUp)}>Sign-In</button>
                </div>
            
                <div className="d-flex justify-content-center mb-3 mt-4">
                    <div 
                    className={"col-sm-4",styles.recru_cand_btn}
                    onClick={() => setRecut(true)} >
                    Recrutiors                    
                    </div>

                    <div 
                    className={"col-sm-4",styles.recru_cand_btn}
                    onClick={() => setRecut(false)}>
                    Candidate
                    </div>
                </div>
                
                <diV className={styles.form}>
                {
                   signUp ? 
                   <Signup type={isRecut ? "Recuiter" : "Candidate"} onSignUp={(e) => onSubmit_SignUpform(e)}/>
                   :
                   <Login type={isRecut ? "Recuiter" : "Candidate"} onSignIn={(e) => onSubmit_SignInform(e)}/>
                }
               </diV>

            </div>
        </div>
    );
}

export default Login_SignUp_Component;