// Common coding practice is to declare variables at the top. These two are for navigating the poem linearly with the space bar, with counter keeping track of the line of the poem and using it to get the right line from poemText below
var counter = 0;
// var poemText = ["James Brown Gives Me a Poetry Solo, and I Realize That This Is 'My Moment'", "<span style='font-size:5em'>HAH</span>","Playing russian roulette with a turkey baster full of 'I can’t believe it’s not butter'","with 5 stuffed animals in the basement of my childhood home,","and soon, none of us can believe what we’re NOT covered in","<span style='font-size:4em'>C'MON</span>","Like a salamander on a waterslide","I wanna coat my skin with astroglide","and watch the world smear around me","as I’m carried to my wet destiny of freefall and misbehavior.","And won’t you love the slick lanes I leave in your hallways and underwear,","don’t be afraid of the thunder","that’s just the youthful exuberance leaving my body","<span style='font-size:5em'>OOH</span>","And can I scream<br>about double indemnity clauses and the state of modern packaging materials","And can I scream<br>about the growing number of invalid ways to live","And can I scream<br>about the corporate graveyards where the endless mountains of dead businessman are shrouded in the most beautiful fog","And can I scream<br>for the hungry and alone and the ones without a home","And can I scream<br>for whatever it is inside of me that needs a scream to be set free","And can I scream<br>And can I scream","And can <span style='font-size:1.3em'>AAAOHHHWWWW</span>","<span style='font-size:5em'>WOO</span>","Baby, if I was a newspaperman","I’d be inclined to write a headline cover story","about that time you doubted me and I exceeded expectations,","but then I’d probably get fired from the newwwspaper and be unable to pay child support","once you divorce me (after we’re married of course,","because of my lingering drinking problem, which I’d always promise to kick", "but eventually succomb to, like I did to you","Oh,<br>things were nice once weren’t they?","<span style='font-size:5em'>HAH</span>","Touching the tall thin pines and smelling their air-freshener smell","and getting cant-touch-other-people sticky in the sap","let’s lie down on the ground where there can never, no never, be leaves"]

//Hotkey bindings, Mousetrap is a small javascript library that makes it easy to make things happen when you press a certain key
Mousetrap.bind("q", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="40" src="scar1.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("w", function placeRandom(){
        var x = getRandomInt(36,56)
        var y = getRandomInt(11,78)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="60" src="scar3.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("e", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="25" src="scar5.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("r", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="45" src="scar6.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("t", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="40" src="scar7.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("y", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="25" src="scar8.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("j", function placeRandom(){
        var x = getRandomInt(34.5,54.5)
        var y = getRandomInt(9,76)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="130" src="scar13.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("i", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(22,60)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="25" src="scar14.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("o", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="9" src="scar22.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("p", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="40" src="scar25.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})

Mousetrap.bind("a", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="30" src="scar24.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("s", function() {
    var id = getRandomInt(1, 19)
    //print(id);
    playSound(id.toString())
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

})
Mousetrap.bind("m", function placeRandom(){
        var x = getRandomInt(36,56)
        var y = getRandomInt(11,78)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="60" src="scar4.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("h", function placeRandom(){
        var x = getRandomInt(39.5,52)
        var y = getRandomInt(21.5,66)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="60" src="scar9.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("g", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="30" src="scar10.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("f", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="20" src="scar11.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("z", function placeRandom(){
        var x = getRandomInt(42,52)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="50" src="scar12.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("v", function placeRandom(){
        var x = getRandomInt(36,56)
        var y = getRandomInt(11,78)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="150" src="scar15.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("l", function placeRandom(){
        var x = getRandomInt(36,56)
        var y = getRandomInt(11,78)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="90" src="scar16.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("n", function placeRandom(){
        var x = getRandomInt(41,53)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="20" src="scar17.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("x", function placeRandom(){
        var x = getRandomInt(41,53)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="20" src="scar23.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("b", function placeRandom(){
        var x = getRandomInt(41.5,53)
        var y = getRandomInt(24,68)
        x = x.toString() + "%"
        y = y.toString() + "%"
        $('body').append('<img width="20" src="scar26.png" style="position: absolute; left:'+x+'; top:'+y+'"><polygon points="100,10 40,198 190,78 10,78 160,198" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;"/></svg>');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
})
Mousetrap.bind("k", function placeImage(){
        $('body').append('<img width="132" height="75" src="scar21.png" style="position: absolute; left:42.41%; top:56.36%"></svg>');
        })
Mousetrap.bind("c", function placeImage(){
        $('body').append('<img width="240" height="55" src="scar20.png" style="position: absolute; left:38.78%; top:41.66%"></svg>');
        })
Mousetrap.bind("d", function placeImage(){
        $('body').append('<img width="110" height="50" src="scar19.png" style="position: absolute; left:43.36%; top:70%"></svg>');
        })
Mousetrap.bind("u", function placeImage(){
        $('body').append('<img width="130" height="50" src="scar18.png" style="position: absolute; left:42.7%; top:29.27%"></svg>');
        })
Mousetrap.bind("/", function(){
    showText("let’s lie down on the ground where there can never, no never, be leaves")
    playSound("34")
    //This monster line of code here waits 8 seconds then changes the background image back to James Brown and plays 'I Feel Good' to close out the piece
    setTimeout(function(){$('#jbfeelGood')[0].play(); $('html').css('background-image', "url(background.jpg)"); $('h1').html("")},8000);
})

//Space bar, as in almost all the pieces, plays the piece linearly, see more below
Mousetrap.bind("space", playLinear);

//Now we enter the functions, these are what the hotkeys call to do various things in the piece

//The showText function uses the library jQuery (that's what that $ means) to change the text of an h1 tag (the largest basic text element) as well as its orientation. The '(string)' inside the parens refers to the line of the poem put inside the parens when the function is called above 
function showText(string) {
    //First we change the contents of the h1 to the line of our poem aka 'string'
    $('h1').html(string)
    //Then we do some specific styling things based on which line of the poem it is
    //So if it's the title of the poem, we change the bg image to James Brown and make sure the text is on the right
    if(string == "James Brown Gives Me a Poetry Solo, and I Realize That This Is 'My Moment'"){
        $('html').css('background-image','url(background.jpg)')
        $('h1').addClass("text-right").removeClass("text-left")
    }
    //Here we check for spans to find the big exclamation texts so we can change the bg image to yelling face and move text to the left, but also we don't want to change effect the one where we made the text smaller so we make sure it doesn't contain the word 'corporate', this is objectively pretty sloppy code but that is ok! It is ok to write bad code!  
    else if(string.indexOf("span") != -1 && string.indexOf("corporate") == -1){
        $('html').css('background-image','url(background.jpg)')
        $('h1').addClass("text-left").removeClass("text-right")
    } 
    //If the text isn't the title or big, this is what we do to it
    else {
        $('html').css('background-image','url(background.jpg)')
        $('h1').addClass("text-left").removeClass("text-right")
    }
};
//Here's playSound, as mentioned above it's a function used in a lot of these pieces for playing sound files
function playSound (id) {
    $('audio').each(function(){
        this.pause()
        this.currentTime = 0;
    })
    sound = $("#d" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}

//The playLinear function exists in almost all pieces to let you go through the piece sequentially by pressing space bar, it uses a counter as an index to reference an array containing the poem, and gradually adds to the counter to show more lines of the poem as you press space
function playLinear(){
    //here we find the line of the poem with the index 'counter' and showText it
    showText(poemText[counter]);
    //Then we add one to counter (++) to get to the next line for the next one
    counter++;
    //Then we play the sound associated with that line (the counters for the sounds are one more than the counters for the lines, this is sloppy and fine but probably dont do it like this yourself)
    playSound((counter).toString());
    //When we reach the end of the poem, reset the counter to 0 aka pressing space again will start over, and then play 'I Feel Good' after 8 seconds
    if (counter >= 34){
        setTimeout(function(){playSound("feelGood")},8000);
        counter = 0;
    }
}

