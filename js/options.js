var newGame = document.getElementById('new');
var colors = document.getElementById('colors');
var imgs = document.getElementById('imgs');
var music = document.getElementById('music');
var flower = document.getElementById('flower');
var content = document.getElementById('content');
var imgset = document.getElementById('imgset');

newGame.onclick = function(){
    location.reload();
}

colors.onclick = function(){
    document.getElementById("changebgc").onchange = function(){
        document.body.style.backgroundColor = this.value;
    };
}

imgs.onclick = function(){
    imgset.style.display = "block";
}

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
img1.onclick = function(){
    logo.src = this.src;
    imgset.style.display = "none";
}
img2.onclick = function(){
    logo.src = this.src;
    imgset.style.display = "none";
}
img3.onclick = function(){
    logo.src = this.src;
    imgset.style.display = "none";
}
img4.onclick = function(){
    logo.src = this.src;
    imgset.style.display = "none";
}
img5.onclick = function(){
    logo.src = this.src;
    imgset.style.display = "none";
}

music.onclick = function(){
    var audio = document.getElementById('music1');
    if(audio!==null){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }
}

flower.onclick = function(){
    if(content.style.display == "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
}