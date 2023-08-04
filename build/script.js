let playButton = document.getElementById("play")
let backgroundMusic = document.getElementById("backgroundMusic")
let volume = document.getElementById("volume")
let mute = document.getElementById("mute")
let cam = document.getElementById("cam")
let questionsEl = document.getElementById("questions")
let minute = document.getElementById("minute");
let minuteContainer = document.getElementById("minuteContainer")
let time = 60;
let coutdownMusic = document.getElementById("countdownMusic")
let firstSection = document.getElementById("first-section")
let secondSection = document.getElementById("second-section")
// let truthBtn = document.getElementById("truthBtn")
// let dareBtn = document.getElementById("dareBtn")
const horrorTruthQuestions = [
    "Have you ever seen a ghost or experienced something paranormal?",
    "What is your biggest fear and why?",
    "Have you ever had a nightmare that felt extremely real?",
    "Have you ever played with a Ouija board or tried to contact spirits?",
    "Do you believe in curses or hexes?",
    "Have you ever felt like you were being watched when you were alone?",
    "Have you ever encountered a creepy urban legend or myth?",
    "What is the scariest movie you have ever watched?",
    "Have you ever had a premonition or experienced déjà vu?",
    "Have you ever felt an unexplainable presence or heard strange noises in your house?",
    "Do you believe in the supernatural?",
    "Have you ever had a sleep paralysis episode or experienced lucid dreaming?",
    "What is the creepiest place you have ever visited?",
    "Have you ever had a gut feeling that something bad was going to happen and it did?",
    "Do you believe in life after death?",
    "Have you ever had a disturbing or unexplainable encounter with an animal?",
    "What is the most unsettling nightmare you have ever had?",
    "Have you ever witnessed or experienced a poltergeist activity?",
    "Do you believe in the existence of aliens or extraterrestrial life?",
    "Have you ever had a close encounter with something you couldn't explain?",
    "Have you ever experienced a time when you felt possessed or controlled by something?",
    "What is the scariest urban legend you know?",
    "Have you ever been in a situation where you felt like you were in a horror movie?",
    "Do you believe in the power of curses or black magic?",
    "Have you ever felt an eerie presence in a supposedly haunted place?",
    "What is the most unsettling sound or noise you have ever heard?",
    "Have you ever had a paranormal experience that you couldn't explain?",
    "Do you believe in the existence of supernatural beings like vampires or werewolves?",
    "Have you ever seen a shadow figure or experienced shadow people?",
    "What is the most disturbing thing you have witnessed at night?",
    "Have you ever encountered a haunted object or possessed item?",
    "Do you believe in the concept of evil spirits or demons?",
    "Have you ever had a recurring dream that scared you?",
    "What is the most chilling unsolved mystery you know?",
    "Have you ever felt a sudden drop in temperature that couldn't be explained?",
    "Do you believe in the power of voodoo or witchcraft?",
    "Have you ever felt a presence watching you from a mirror?",
    "What is the most unsettling encounter you have had with a stranger?",
    "Have you ever experienced a time slip or felt like you traveled through time?",
    "Do you believe in the existence of haunted or cursed objects?",
    "Have you ever witnessed an exorcism or been in the presence of one?",
    "What is the most disturbing thing you have ever read or seen online?",
    "Have you ever encountered a real-life psychopath or dangerous individual?",
    "Do you believe in the existence of parallel universes?",
    "Have you ever had a close call with death that you can't explain?",
    "What is the scariest story or urban legend you have ever heard?",
    "Have you ever felt like you were being followed by an unseen presence?",
    "Do you believe in the concept of demonic possession?",
    "Have you ever experienced a time when you felt like you were living in a nightmare?",
    "What is the most disturbing video or footage you have ever seen?",
    "Have you ever encountered a cursed location or known haunted house?",
    "Do you believe in the power of dark magic or satanic rituals?",
  ];
  const horrorDareQuestions = [
    "Turn off all the lights and sit alone in complete darkness for 10 minutes.",
    "Go outside and stand in front of a mirror and chant 'Bloody Mary' three times.",
    "Watch a horror movie alone at midnight.",
    "Turn off all the lights and tell a scary story in a spooky voice.",
    "Walk through a dark room blindfolded while others make spooky sounds.",
    "Go to a graveyard at night and take a picture.",
    "Stay overnight in a supposedly haunted location.",
    "Listen to a recording of ghostly sounds or EVPs with headphones on.",
    "Go into a room alone and try to summon a spirit or ghost.",
    "Stand in front of a mirror and try to make yourself look as creepy as possible.",
    "Go on a midnight walk in the woods or a deserted area.",
    "Stay in a room with a creepy doll or stuffed animal overnight.",
    "Sit in a circle of candles and try to communicate with the spirits.",
    "Play a horror-themed video game with the volume turned up high.",
    "Go to a haunted house attraction and try to spend the night there.",
    "Read a horror story out loud in a spooky voice.",
    "Stay in complete silence and darkness for 30 minutes.",
    "Wear a creepy mask and scare someone unexpectedly.",
    "Sleep in a room with the lights off and the door slightly ajar.",
    "Walk down a dimly lit street alone at night.",
    "Visit an abandoned building or location known for paranormal activity.",
    "Watch a compilation of jump scares or scary pranks on YouTube.",
    "Sit alone in a room and listen to eerie or unsettling music.",
    "Explore an unfamiliar and potentially haunted location.",
    "Try an ancient divination method like tarot cards or a Ouija board.",
    "Go stargazing in a remote area at midnight.",
    "Spend a night in a tent in the middle of a creepy forest.",
    "Have a séance or attempt to contact a deceased person.",
    "Spend the night in a room with a creepy painting or portrait.",
    "Create a spooky atmosphere by lighting candles and playing eerie music.",
    "Visit a local haunted site and take pictures or record videos.",
    "Try to spend the night in a cemetery or mausoleum.",
    "Watch a horror movie marathon alone without any breaks.",
    "Go for a nighttime walk in a cemetery and take a selfie.",
    "Sit in a circle and tell ghost stories with friends in the dark.",
    "Visit a supposedly cursed location or site with a haunted history.",
    "Try to spend the night in a supposedly cursed object's presence.",
    "Listen to a podcast or audio recording about true crime or unsolved mysteries.",
    "Play hide-and-seek in a dark, unfamiliar location.",
    "Spend an entire day in complete silence.",
    "Have a friend dress up as a ghost and scare you unexpectedly.",
    "Spend the night in a room with a broken or flickering light bulb.",
    "Sit alone in a room and try to communicate with a deceased loved one.",
    "Play a horror-themed virtual reality game.",
    "Sleep with the lights on and a horror movie playing in the background.",
    "Create a creepy short story and share it with others.",
    "Go on a late-night drive to a remote and desolate location.",
    "Try to sleep with a recording of eerie or unsettling sounds playing.",
  ];
// Function to check if the entered username already exists in the user array
function isUsernameTaken(username) {
  const users = getUsers();
  return users.some((user) => user.username === username);
}

// Function to get the array of users from local storage
function getUsers() {
  const usersJSON = localStorage.getItem('users');
  return usersJSON ? JSON.parse(usersJSON) : [];
}

// Function to save the array of users to local storage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Sign Up
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

     

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    let amount = 200

    // Check if the username is already taken
    if (isUsernameTaken(username)) {
      alert('Username already taken. Please choose a different username.');
      return;
    }
// Get the form element
const form = event.target;

// Submit the form
form.submit();
    // Get the existing users array from local storage
    const users = getUsers();
    

    // Add the new user to the array
    users.push({ username, password,amount });

    // Save the updated array back to local storage
    saveUsers(users);

    alert('Registration successful! Please log in.');
    signupForm.reset(); // Clear the form fields
  });
  
}


const loginForm = document.getElementById('loginForm');
if (loginForm) {
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  let amount = 200

  // Retrieve the user's credentials from local storage
  const users = getUsers();
  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    alert('Login successful!');

    // Set a flag for the logged-in user
    localStorage.setItem('loggedInUsername', username);
    localStorage.setItem('loggedInAmount', amount);

    loginForm.reset(); // Clear the form fields

    // Redirect to the next page (replace 'next_page.html' with the actual path)
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
}


const player = document.getElementById('player');
let balance = document.getElementById("balance")

// Retrieve the logged-in username from Local Storage
const loggedInUsername = localStorage.getItem('loggedInUsername');
let loggedInAmount = localStorage.getItem("loggedInAmount")

// Display the username as the playername
if (loggedInUsername) {
player.textContent = ` ${loggedInUsername}`;
balance.textContent = `$ ${loggedInAmount}`
} else {
player.textContent = 'no player'; // Default welcome message if not logged in
}



// Function to get a random question from the array and remove it
// function getRandomQuestion(questionsArray) {
//     if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
//       return "Game Over";
//     }
    
//     const randomIndex = Math.floor(Math.random() * questionsArray.length);
//     const question = questionsArray[randomIndex];
//     questionsArray.splice(randomIndex, 1); // Remove the selected question from the array
//     return question;
//   }
// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to the HTML elements
//     let truthBtn = document.getElementById("truthBtn")
//     let dareBtn = document.getElementById("dareBtn")
  
//     // Function to start the countdown
//     function startCountdown() {
//       let time = 60; // Replace 60 with the desired countdown time in seconds
  
//       const countDown = setInterval(function() {
//         minute.textContent = time;
//         time--;
  
//         if (time < 10){
//             minuteContainer.classList.add("animate__flash");
//             coutdownMusic.play()
//           }
//           if (time < -1) {
//             clearInterval(countDown);
//             secondSection.classList.remove("flex")
//             secondSection.classList.add("hidden")
//             firstSection.classList.remove("hidden")
        
//           }
//       }, 1000);
//     }
  
//     // Event listener for the button click
//     truthBtn.addEventListener("click", startCountdown);
//     dareBtn.addEventListener("click", startCountdown);
//   });



  
//   // Get a random horror truth question
//   const randomQuestion = getRandomQuestion(horrorTruthQuestions);
  
//   // Set the text content of the element to the random question or "Game Over"
//   questionsEl.textContent = randomQuestion;

// console.log(truthBtn);
function startCountdown() {
  let time = 60; // Replace 60 with the desired countdown time in seconds

  const countDown = setInterval(function() {
    minute.textContent = time;
    time--;

    if (time < 10){
        minuteContainer.classList.add("animate__flash");
        coutdownMusic.play();
    }else{
      minuteContainer.classList.remove("animate__flash");
    }
    if (time < -1) {
      let loggedInAmount = parseInt(localStorage.getItem("loggedInAmount"));
if (loggedInUsername && !isNaN(loggedInAmount)) {
// Decrease the amount by 50
loggedInAmount -= 10;

// Save the updated amount back to Local Storage
localStorage.setItem("loggedInAmount", loggedInAmount);

// Display the updated amount on the welcome message
balance.textContent = `$ ${loggedInAmount}`;

// Here, you can also make an API call to update the amount in the server-side database if needed.
}
        clearInterval(countDown);
        secondSection.classList.remove("flex");
        secondSection.classList.add("hidden");
        firstSection.classList.remove("hidden");
        firstSection.classList.add("flex");
        // turnOffCamera();
        showStartPage();
    }
    doneBtn.addEventListener("click",function(){
        showStartPage()
        clearInterval(countDown);
        // turnOffCamera()
    })
    
  }, 1000);
}
doneBtn.addEventListener("click",function(){
  let loggedInAmount = parseInt(localStorage.getItem("loggedInAmount"));
if (loggedInUsername && !isNaN(loggedInAmount)) {
// Decrease the amount by 50
loggedInAmount += 10;

// Save the updated amount back to Local Storage
localStorage.setItem("loggedInAmount", loggedInAmount);

// Display the updated amount on the welcome message
balance.textContent = `$ ${loggedInAmount}`;

// Here, you can also make an API call to update the amount in the server-side database if needed.
}
   
})
// Event listener for the "Truth" button click
truthBtn.addEventListener("click", function() {
  

    // Get a random horror truth question
    const randomQuestion = getRandomQuestion(horrorTruthQuestions);
    // Set the text content of the element to the random question or "Game Over"
    questionsEl.textContent = randomQuestion;
    // Start the countdown
    startCountdown();
    showQuestionPage();

});

// Event listener for the "Dare" button click
dareBtn.addEventListener("click", function() {
    // Get a random horror dare question
    const randomQuestion = getRandomQuestion(horrorDareQuestions);
    // Set the text content of the element to the random question or "Game Over"
    questionsEl.textContent = randomQuestion;
    // Start the countdown
    startCountdown();
    // Trigger the camera function
    // triggerCamera();
    showQuestionPage();
});


// Function to get a random question from the array and remove it
function getRandomQuestion(questionsArray) {
    if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
        return "Game Over";
    }
    
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    const question = questionsArray[randomIndex];
    questionsArray.splice(randomIndex, 1); // Remove the selected question from the array
    return question;
}


// Function to show the start page and reset the game
function showStartPage() {
    firstSection.classList.remove("hidden");
    firstSection.classList.add("flex")
    secondSection.classList.add("hidden");
    questionsEl.textContent = "";
}
function showQuestionPage() {
    firstSection.classList.remove("flex")
    firstSection.classList.add("hidden")
    secondSection.classList.remove("hidden")
    secondSection.classList.add("flex")
}



playButton.addEventListener("click", function(){
    if (backgroundMusic.paused) {
    backgroundMusic.play();
    mute.classList.remove("hidden")
    volume.classList.add("hidden")
  } else {
    backgroundMusic.pause();
    mute.classList.toggle("hidden")
    volume.classList.toggle("hidden")
  }
})




function toggleWebcam(isWebcamOn) {
  const webcamOnPicture = document.getElementById('webcam-on');
  const webcamOffPicture = document.getElementById('webcam-off');
  const videoElement = document.getElementById('camera-stream');

  if (isWebcamOn) {
    // Turn on webcam
    webcamOnPicture.classList.add('hidden');
    webcamOffPicture.classList.remove('hidden');
    videoElement.classList.remove('hidden');

    // Access the user media and start the webcam
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          videoElement.srcObject = stream;
          videoElement.play();
        })
        .catch(function(error) {
          console.error('Error accessing camera:', error);
        });
    } else {
      console.error('getUserMedia is not supported in this browser.');
    }
  } else {
    // Turn off webcam
    webcamOnPicture.classList.remove('hidden');
    webcamOffPicture.classList.add('hidden');
    videoElement.classList.add('hidden');

    // Stop the webcam stream
    if (videoElement.srcObject) {
      const tracks = videoElement.srcObject.getTracks();
      tracks.forEach(function(track) {
        track.stop();
      });
      videoElement.srcObject = null;
    }
  }
}



  




  