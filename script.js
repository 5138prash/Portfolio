const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = ()=>{
    sections.function(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add(active)
            })
        }
    })
}
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2  // Adjust this threshold as needed
    });

    // Select all containers inside .timeline
    const containers = document.querySelectorAll(".timeline .container");
    containers.forEach(container => observer.observe(container));
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1  // Adjust threshold as needed for earlier or later trigger
    });

    // Select all skill bars
    const skillBars = document.querySelectorAll(".skills .bar");
    skillBars.forEach(bar => observer.observe(bar));
});
