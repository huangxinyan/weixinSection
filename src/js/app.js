/**
 * Created by Administrator on 2016/10/17.
 */
(function(){
    var swiper = new Swiper(".swiper-container",{
             "direction":"vertical",
              pagination:".swiper-pagination",
              effect:"effect",
              paginationClickable: true,
              onInit:function(swiper){
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeEnd:function (swiper) {
                swiperAnimate(swiper);
            }
    });
    var music = document.querySelector(".music");
    var musicFly = document.querySelector(".music .music_fly");
    var audio = document.querySelector("audio");
    musicFly.onclick = function(){
        if(audio.paused){
            audio.play();
            audio.style.animationPlayState = "running";
            music.className = "music active";
        }else{
            audio.pause();
            audio.style.animationPlayState = "paused";
            music.className = "music";
        }

    }
})();