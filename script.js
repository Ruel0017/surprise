// Get references to the dropdown, input box, and hidden div
const dropdown = document.getElementById('dropdown');
const inputBox = document.getElementById('inputBox');
const hiddenDiv = document.getElementById('customContent');
const customContentMain = document.getElementById('customContentMain');
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const audioPlayer = document.getElementById('audioPlayer'); // Reference to the audio element

// Handle the dropdown changes
dropdown.addEventListener('change', function () {
    const selectedOption = dropdown.value;
    let message = '';

    switch (selectedOption) {
        case 'songs':
            message = 'Here’s a song for you: "Love Story by Taylor Swift 🎶"';
            playAudio(); // Play the audio when "songs" is selected
            break;
        case 'about':
            message = 'I love you more than words can express! You are my sunshine, my better half, and my greatest joy. 💖';
            stopAudio(); // Stop the audio if other options are selected
            break;
        case 'me':
            message = 'A little about me: I am the luckiest person to have you in my life. 😍';
            stopAudio();
            break;
        case 'you':
            message = 'You are the most amazing, beautiful, and kind-hearted person I know. You make my life complete! 🌟';
            stopAudio();
            break;
        default:
            message = '';
    }

    inputBox.value = message;

    showHide(hiddenDiv, selectedOption, customContentMain);
});

// Function to show or hide the hidden div based on the selected option
const showHide = (hiddenDiv, selectedOption, customContentMain) => {
    if (selectedOption === 'true') {
        hiddenDiv.style.display = 'block'; 
        customContentMain.style.display = 'none'; 
    } else {
        hiddenDiv.style.display = 'none'; 
        customContentMain.style.display = 'block'; 
    }
};

// Function to compute the sum of inputs
const compute = () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);

    if (!isNaN(a) && !isNaN(b)) {
        const result = a + b;
        hiddenDiv.innerHTML = `
            <p>The result is <strong>${result}</strong> and You know what? No matter what, you and I are meant to be together! 💖</p>
        `;
    } else {
        hiddenDiv.innerHTML = '<p>Please enter valid numbers in both fields. If you need help, just refresh the page! 😊</p>';
    }
};


// Function to play the audio
const playAudio = () => {
    audioPlayer.style.display = 'block'; 
    audioPlayer.play().catch(error => {
        console.error("Playback failed:", error); 
    });
};

// Function to stop the audio
const stopAudio = () => {
    audioPlayer.pause(); 
    audioPlayer.currentTime = 0; 
    audioPlayer.style.display = 'none'; 
};


audioPlayer.addEventListener('error', function(e) {
    console.error("Error occurred while trying to play the audio:", e);
});


inputA.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        compute();
    }
});
inputB.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        compute();
    }
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slides based on the current slide index
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Optional: Automatically change slides every few seconds
setInterval(() => {
    plusSlides(1);
}, 5000); // Change image every 5 seconds
