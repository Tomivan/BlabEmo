window.onload = function () {

    let images = [
        './assets/images/hero.png',
        './assets/images/Daco.png',
    ];

    images.current = 0;

    let img = document.getElementById( 'main-photo' );

    setInterval(function () {
        console.log("here")
        img.src = images[ images.current++ ];
        if ( images.current === images.length ) images.current = 0;       
    }, 3000 );

};

count = 0;
let quotes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et aliqua.<br /> Ut enim ad minim veniam.',
    'A life spent making mistakes is not only more <br /> honorable, but more useful than a life spent <br />doing nothing.'
]
setInterval(function () {
    count++;
    $("#blockquote").fadeOut(300, function() {
        $(this).html(quotes[count % quotes.length]).fadeIn(500);
        console.log("blockquote")
    });
}, 3000);