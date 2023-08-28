const btn = document.querySelector('button.button-mobile-menu');
const menu = document.querySelector('.mobile-menu')

btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
})

function toggleBike() {
    document.getElementById('bikeshop').classList.toggle('hidden')
}

function toggleMorning() {
    document.getElementById('morningnews').classList.toggle('hidden')
}

function toggleMoviz() {
    document.getElementById('mymoviz').classList.toggle('hidden')
}

function togglePortefolio() {
    document.getElementById('portefolio').classList.toggle('hidden')
}

function toggleLingoland() {
    document.getElementById('lingoland').classList.toggle('hidden')
}

function toggleArtMore() {
    document.getElementById('artmore').classList.toggle('hidden')
}

function toggleEvasion() {
    document.getElementById('evasion').classList.toggle('hidden')
}

function toggleDogs() {
    document.getElementById('dogs').classList.toggle('hidden')
}


$('.btntop').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.top').eq(0).offset().top
    }, 800);
});

$('.btndown').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.down').eq(0).offset().top
    }, 800);
});