        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
      
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

        const provider = new GoogleAuthProvider();

        document.getElementById("sign_up").addEventListener("click", googleLogin)


     function googleLogin(){
            signInWithPopup(auth, provider)
            .then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res);
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info
                const user = res.user;
                window.location = 'dashboard.html'
                console.log(user)
            })
            .catch((err) => {
                // Handle errors here
                const errorCode = err.code;
                const errorMessage = err.message;
                const email = err.email;
                const credential = GoogleAuthProvider.credentialFromError(err);
            })
        }
