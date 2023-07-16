const burger = document.querySelector (".navigation");
const nav = document.querySelector('.top-links');
const btns = document.querySelectorAll('button');


burger.addEventListener('click', e => {
    burger.classList.toggle('open');
    if (burger.classList.contains('open')){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});


btns.forEach(btn => {
    btn.addEventListener('click', e => {
        alert("Your invite request is processing, Thanks for your interest :)")
    });
})