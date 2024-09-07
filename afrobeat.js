var selectAll = document.querySelectorAll(".beat").length;
var currentAudio = null;  // Store the currently playing audio
var stopTimeout = null;   // Store the timeout for stopping the audio

// Event listener for button clicks
for (var i = 0; i < selectAll; i++) {
    document.querySelectorAll(".beat")[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        makeKeySound(buttonClicked);

        console.log(buttonClicked);
    });
}

var typedKeys = ""; // Store the accumulated key presses

// Event listener for key presses
document.addEventListener("keypress", function (press) {
    typedKeys += press.key.toLowerCase(); // Accumulate the typed keys and convert to lowercase

    // Check for matches in the accumulated string
    checkTypedKeys();
});

function checkTypedKeys() {
    const possibleKeys = [
        "davido", "wizkid", "burnaboy", "olamide", "rema", "asake",
        "fireboy", "tems", "tiwa", "tekno", "youngjohn", "ruger",
        "kizz", "buju", "donjazzy", "ayrastar", "shallipopi",
        "omahlay", "magixx", "adekunle", "falz", "pheelz"
    ];

    // Check if any artist name is fully typed
    possibleKeys.forEach(function (key) {
        if (typedKeys.includes(key)) {
            makeKeySound(key);  // Play the sound for the matching key
            typedKeys = "";     // Reset the typedKeys after matching
        }
    });

    // Limit the size of typedKeys to avoid infinite growth
    if (typedKeys.length > 10) {
        typedKeys = typedKeys.slice(-10); // Keep only the last 10 characters
    }
}

function makeKeySound(key) {
    // Stop any previously playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Clear any previous timeout
    if (stopTimeout) {
        clearTimeout(stopTimeout);
    }

    switch (key) {
        case "davido":
            currentAudio = new Audio("davidosong.mp3");
            break;
        case "wizkid":
            currentAudio = new Audio("wizkidsong.mp3");
            break;
        case "burnaboy":
            currentAudio = new Audio("burna.mp3");
            break;
        case "olamide":
            currentAudio = new Audio("olamidesong.mp3");
            break;
        case "rema":
            currentAudio = new Audio("remasong.mp3");
            break;
        case "asake":
            currentAudio = new Audio("asakesong.mp3");
            break;
        case "fireboy":
            currentAudio = new Audio("fireboysong.mp3");
            break;
        case "tems":
            currentAudio = new Audio("song/tems.mp3");
            break;
        case "kizz":
            currentAudio = new Audio("song/kizz.mp3");
            break;
        case "tekno":
            currentAudio = new Audio("song/tekno.mp3");
            break;
        case "tiwa":
            currentAudio = new Audio("song/tiwa.mp3");
            break;

        case "youngjohn":
            currentAudio = new Audio ("song/youngjohn.mp3");  
            break;

        case "ruger":
            currentAudio = new Audio("song/ruger.mp3");
            break;
        case "buju":
            currentAudio = new Audio("song/buju.mp3");
            break;
        case "donjazzy":
            currentAudio = new Audio("song/donjazzy.mp3");
            break;
        case "ayrastar":
            currentAudio = new Audio("song/ayrastar.mp3");
            break;
        case "shallipopi":
            currentAudio = new Audio("song/shallipopi.mp3");
            break;
        case "omahlay":
            currentAudio = new Audio("song/omahlay.mp3");
            break;
        case "magixx":
            currentAudio = new Audio("song/magixx.mp3");
            break;
        case "adekunle":
            currentAudio = new Audio("song/ag.mp3");
            break;
        case "falz":
            currentAudio = new Audio("song/falz.mp3");
            break;
        case "pheelz":
            currentAudio = new Audio("song/pheelz.mp3");
            break;
        default:
            console.log(key);
            return;  // Exit the function if no match is found
    }

    // Play the selected audio
    currentAudio.play();

    // Stop the song after 30 seconds
    stopTimeout = setTimeout(function () {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }, 300000); // 30,000 milliseconds = 30 seconds
}
