        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
      
        // my web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyAmBnCEQ5wP7F11YC18pbspbJ_VHWJo61Y",
          authDomain: "ecourse-9cb7c.firebaseapp.com",
          projectId: "ecourse-9cb7c",
          storageBucket: "ecourse-9cb7c.appspot.com",
          messagingSenderId: "731812730040",
          appId: "1:731812730040:web:cdf18e2fa458fba219904d"
        };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        document.getElementById("logout").addEventListener("click", logoutUser);

        function showUserDetails(user){
            document.getElementById("user__details").innerHTML =`
            <img src="${user.photoURL}"style="width:width: 10%">       
            <p>${user.displayName}</p>
            <p>${user.email}</p>
            `
        }
        function checkAuthState(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              showUserDetails(user)
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
        }
        
        function logoutUser(){
        signOut(auth)
        .then(() => {
        // Sign-out successful.
        window.location = 'index.html'
        }).catch((error) => {
            // An error happened.
        });              
    }
    checkAuthState();