let sidebar = document.querySelector('aside')
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click' , () => {
      sidebar.style.display = 'block';
})

closeBtn.addEventListener('click' , () => {
      sidebar.style.display = 'none';
})

