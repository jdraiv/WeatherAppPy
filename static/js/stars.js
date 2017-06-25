function randomPositions(){
    ranWidth = Math.random() * (20, 80);
    ranWidth = Math.round(ranWidth);

    ranHeight = Math.random() * (20,80);
    ranHeight = Math.round(ranHeight);

    starSize = Math.random() * (3,5);
    starSize = Math.round(starSize);


    $newStar = $('<div class="star"></div>').css({
        'left': +  (ranWidth)  + '%',
        'top': + (ranHeight)  + '%',
        'width': + (starSize) + 'px',
        'height': + (starSize) + 'px'
    });

    $newStar.appendTo('.data-container')
}


function killTheDarkness(){
    randomPositions();
}

function drawStars(){
    var stars = 0;
    while(stars < 35){
        killTheDarkness();
        stars = stars + 1;
    }
}

//drawStars();