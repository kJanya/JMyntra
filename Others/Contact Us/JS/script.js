let nav = document.getElementById('nav');
let loader = document.getElementById('loader');
let body = document.getElementById('body');
let lost = document.getElementById('lost');
let closeMap = document.getElementById('closeMap');
let openMap = document.getElementById('openMap');
let map = document.getElementById('map');

openMap.onclick = () => {
    map.style.display = 'flex';
}

closeMap.onclick = () => {
    map.style.display = 'none';
}

let showhide = () => {
    nav.classList.toggle('activeNav');
}

window.onload = () => {
    loader.style.display = 'none';
}

window.addEventListener('offline', () => {
    lost.style.display = 'flex';
    body.style.overflow = 'hidden';
});

window.addEventListener('online', () => {
    alert("Good! You Are Online" +"\n"+"\tClick on OK Button then you Enter the Website");
    lost.style.display = 'none';
    body.style.overflow = 'auto';
});