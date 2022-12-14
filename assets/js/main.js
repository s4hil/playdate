let no = document.getElementById('no');
let yes = document.getElementById('yes');

no.addEventListener('mouseover', function () {
    changePosition();
});
no.addEventListener('click', function () {
    changePosition();
});

yes.addEventListener('click', function () {
    alert("Gotcha!");
})

function changePosition() {
    let top = (Math.random()*10).toFixed(0);
    let left = (Math.random()*10).toFixed(0);
    console.log(top);
    no.style.position = "relative";
    no.style.top = top+"em";
    no.style.left = left+"em";
    
}