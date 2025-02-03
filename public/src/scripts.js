function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.onload =  function(){
    let randomImage = getRandomInt(4);
    document.getElementById("tinylogo").src = "./public/img/" + randomImage + ".png";
};
