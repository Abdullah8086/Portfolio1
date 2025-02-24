//    scroll section active link
let  section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offset - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(Links => {
                Links.classList.remove('active');
                document.querySelectorAll('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};