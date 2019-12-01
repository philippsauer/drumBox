document.addEventListener ('keydown', function (event) {
    function onKeyDown(key) {

        //toggle class
        document.getElementsByClassName('box-'.concat(key))[0].classList.add("active")

        // play sound
        new Audio(document.getElementById(key).src).play();

    }

    switch(event.which) {
        case 65:
            onKeyDown("a");
            break;
        case 83:
            onKeyDown("s");
            break;
        case 68:
            onKeyDown("d");
            break;
        case 70:
            onKeyDown("f");
            break;
        case 72:
            onKeyDown("h");
            break;
        case 74:
            onKeyDown("j");
            break;
        case 75:
            onKeyDown("k");
            break;
        case 76:
            onKeyDown("l");
            break;
    }
});

document.addEventListener ('keyup', function (event) {

    function onKeyUp(key) {

        //toggle class
        document.getElementsByClassName('box-'.concat(key))[0].classList.remove("active")
    }

    switch(event.which) {
        case 65:
            onKeyUp("a");
            break;
        case 83:
            onKeyUp("s");
            break;
        case 68:
            onKeyUp("d");
            break;
        case 70:
            onKeyUp("f");
            break;
        case 72:
            onKeyUp("h");
            break;
        case 74:
            onKeyUp("j");
            break;
        case 75:
            onKeyUp("k");
            break;
        case 76:
            onKeyUp("l");
            break;
    }
});
