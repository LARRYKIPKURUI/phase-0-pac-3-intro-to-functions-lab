
function shout(hello) {
    return hello.toUpperCase();
}

shout('hello');

function whisper(hello) {
    return hello.toLowerCase();
}

whisper('HELLO');


function logShout (hello) {
    console.log(hello.toUpperCase());
}

logShout('hello');


function logWhisper () {
    console.log('hello'.toLowerCase());
}


logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}






























