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


            document.getElementById("user__profileURL").innerHTML =`
            <img src="${user.photoURL}" class="user__img"> 
            `
            document.getElementById("user__details").innerHTML =`
            <div class="pne__info">
            <img src="${user.photoURL}" class="user__img-info csc__img"> 
            <div class="en__info">
            <p class="user display__name">Hello: ${user.displayName}</p>
            <p class="user email">${user.email}</p>
            </div>
            <p class="user text">Pick the course of your choice <br/> to study ahead of your lecturer</p>
            </div>
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
              // window.location = 'index.html'
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

const logout = document.querySelector(".logout__btn")
  const menuBtn = document.getElementById("menu__btn");
  const closeBtn = document.getElementById("close__btn");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      logout.classList.add("show__nav");
      closeBtn.classList.add("show-Btn");
      menuBtn.classList.add("show-menuBtn");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      logout.classList.remove("show__nav");
      closeBtn.classList.remove("show-Btn");
      menuBtn.classList.remove("show-menuBtn");
    });
  }