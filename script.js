let sidebar = document.querySelector('aside')
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click' , () => {
      sidebar.style.display = 'block';
})

closeBtn.addEventListener('click' , () => {
      sidebar.style.display = 'none';
})

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in: ", user);
  } else {
    console.log("No user is signed in.");
  }
});
