import firebase from "../firebase";


const socialMediaAuth = (provider) => {
     firebase.auth().signInWithPopup(provider).then((res) => {
         if (res) {
             return res.user;
             
         }else {
           alert("Invalid user")  
         }       
        
     })
     .catch((er) => {
         return er
     })
     
} 

export default socialMediaAuth;


