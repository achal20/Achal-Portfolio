const initBg = (autoplay = true) => {
    const bgImgsNames = ['index/achal.png','index/quotes.png','index/app3.png',];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 5000, fade: 1000});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();
});