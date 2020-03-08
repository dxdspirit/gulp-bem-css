const navSlide = () => {
    const collapse = document.querySelector('.collapse');
    const navLinks = document.querySelector('.nav-links');

    collapse.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links--active')
    })
}
navSlide();