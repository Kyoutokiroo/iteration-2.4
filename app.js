
let btn = document.getElementById("btn");
let asec = document.getElementById("about");

btn.addEventListener('click', () => {
  // Get the current background image style property
  const currentBG = asec.style.backgroundImage;

  // Check if the current background image contains 'asecc.png'
  // Note: asec.style.backgroundImage will return the full URL, e.g., 'url("file:///path/to/asecc.png")'
  // So, checking if it *includes* the filename is a robust way to check.
  if (currentBG.includes('asecc.png')) {
    // If it's currently 'asecc.png', switch it to 'switch.jpg'
    asec.style.backgroundImage = "url(switch.jpg)";
  } else {
    // If it's anything else (likely 'switch.jpg' or initial value from CSS), switch it to 'asecc.png'
    asec.style.backgroundImage = "url(asecc.png)";
  }
});


let img = document.querySelector(".img");
let title = document.querySelector(".title");
let artist = document.querySelector(".artist");

let p_p = document.querySelector(".p-p");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
const playPauseIcon = p_p.querySelector('.material-symbols');

let bar = document.getElementById("bar");
let ct = document.querySelector(".ct");
let dt = document.querySelector(".dt");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr = document.createElement("audio");

let list = [
  {
    image: "mumei.jpg",
    title: "mumei",
    artist: "Nanashi Mumei",
    path: "MVmumei.mp3"
  },
  {
    image: "a-new-start.jpg",
    title: "A New Start",
    artist: "Nanashi Mumei",
    path: "Original SongA New Start - MV.mp3"
  },
  {
    image: "machine-love.jpg",
    title: "Machine Love",
    artist: "Jamie Paige (feat. Kasane Teto)",
    path: "Machine Love (feat. Kasane Teto).mp3"
  },
]

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();

  curr.src = list[track_index].path;
  curr.load();

  img.src = list[track_index].image;
  title.textContent = list[track_index].title;
  artist.textContent = list[track_index].artist;
  
  updateTimer = setInterval(seekUpdate, 1000);

  curr.addEventListener("ended", nextTrack);
}
function resetValues() {
  ct.textContent = "00:00";
  dt.textContent = "00:00";
  bar.value = 0;
}

function ppTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr.play();
  isPlaying = true;

  playPauseIcon.textContent = 'pause';
}

function pauseTrack() {
  curr.pause();
  isPlaying = false;

  playPauseIcon.textContent = 'play_arrow';
}

function nextTrack() {
  if (track_index < list.length - 1)
    track_index += 1;
  else track_index = 0;

  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = list.length - 1;

  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  const newTime = curr.duration + (bar.value / 100);
  curr.currentTime = newTime;
}

function seekUpdate() {
  let seekPosition = 0;

  if(!isNaN(curr.duration)) {
    seekPosition = curr.currentTime * (100 / curr.duration);
    bar.value = seekPosition;

    let cmin = Math.floor(curr.currentTime / 60);
    let csec = Math.floor(curr.currentTime - cmin * 60);
    let dmin = Math.floor(curr.duration / 60);
    let dsec = Math.floor(curr.duration - dmin * 60);

    cmin = String(cmin).padStart(2, '0');
    csec = String(csec).padStart(2, '0');

    dmin = String(dmin).padStart(2, '0');
    dsec = String(dsec).padStart(2, '0');

    ct.textContent = cmin + ":" + csec;
    dt.textContent = dmin + ":" + dsec;
  }
}

curr.addEventListener("loadedmetadata", () => {
    let dmin = Math.floor(curr.duration / 60);
    let dsec = Math.floor(curr.duration - dmin * 60);

    if (dsec < 10) { dsec = "0" + dsec};
    if (dmin < 10) { dmin = "0" + dmin};

    dt.textContent = dmin + ":" + dsec;
});

loadTrack(track_index);


const landscape = document.getElementById('landscape');
const ssec = document.getElementById('services');

landscape.addEventListener('mouseenter', () => {
  ssec.style.backgroundImage = "url(ssec-prev/1hov.jpg)";
  ssec.style.backgroundColor = "#0c0c0c";
});

landscape.addEventListener('mouseleave', () => {
  ssec.style.backgroundImage = "url(ssec-prev/1def.jpg)";
});

const nature = document.getElementById('nature');

nature.addEventListener('mouseover', () => {
  ssec.style.backgroundImage = "url(ssec-prev/2hov.jpg)";
  ssec.style.backgroundColor = "#0c0c0c";
});

nature.addEventListener('mouseout', () => {
  ssec.style.backgroundImage = "url(ssec-prev/2def.jpg)";
});

const portrait = document.getElementById('portrait');

portrait.addEventListener('mouseover', () => {
  ssec.style.backgroundImage = "url(ssec-prev/3hov.jpg)";
  ssec.style.backgroundColor = "#0c0c0c";
});

portrait.addEventListener('mouseout', () => {
  ssec.style.backgroundImage = "url(ssec-prev/3def.jpg)";
});

const food = document.getElementById('food');

food.addEventListener('mouseover', () => {
  ssec.style.backgroundImage = "url(ssec-prev/4hov.jpg)";
  ssec.style.backgroundColor = "#0c0c0c";
});

food.addEventListener('mouseout', () => {
  ssec.style.backgroundImage = "url(ssec-prev/4def.jpg)";
});

const panels = document.querySelectorAll('.panel');
const intervalTime = 5000; // Change this to 5000ms (5 seconds) or 10000ms (10 seconds)

// Store all potential background images for each panel
const panelImages = [
    ['works/lp/lp1.jpg', 'works/lp/lp2.jpg', 'works/lp/lp3.jpg', 'works/lp/lp4.jpg', 'works/lp/lp5.jpg', 'works/lp/lp6.jpg', 'works/lp/lp7.jpg', 'works/lp/lp8.jpg', 'works/lp/lp9.jpg', 'works/lp/lp10.jpg', 'works/lp/lp11.jpg'],
    ['works/np/np1.jpg', 'works/np/np2.jpg', 'works/np/np3.jpg', 'works/np/np4.jpg', 'works/np/np5.jpg', 'works/np/np7.jpg', 'works/np/np8.jpg', 'works/np/np9.jpg', 'works/np/np10.jpg', 'works/np/np11.jpg'],
    ['works/pp/pp1.jpg', 'works/pp/pp2.jpg', 'works/pp/pp3.jpg', 'works/pp/pp4.jpg'],
    ['works/fp/fp1.jpg', 'works/fp/fp2.jpg']
];

let imageIndices = new Array(panels.length).fill(0); // Tracks the current image index for each panel

// Function to cycle the background image for a specific panel
function cycleBackgroundImage(index) {
    const panel = panels[index];
    const images = panelImages[index];

    // Increment index and loop back to 0 if it exceeds the array length
    imageIndices[index] = (imageIndices[index] + 1) % images.length;
    
    // Set the new background image
    panel.style.backgroundImage = `url(${images[imageIndices[index]]})`;
}


// Set up the interval for each panel
panels.forEach((panel, index) => {
    // Start the timer for each panel
    setInterval(() => {
        // The image will now cycle regardless of whether the card is 'active' or not
        cycleBackgroundImage(index);
    }, intervalTime);

    // Keep your existing click functionality
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

const form = document.getElementById('contactForm');
        const messageBox = document.getElementById('messageBox');

        // Function to show the custom message box
        function showMessageBox(message) {
            document.getElementById('messageText').textContent = message;
            messageBox.classList.add('show');
        }

        // Function to close the custom message box
        function closeMessageBox() {
            messageBox.classList.remove('show');
        }

        // Handle form submission
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission (which would reload the page)
            event.preventDefault();

            // Collect form data (in a real app, this is where you'd use fetch() to send data to a server)
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                contactNumber: document.getElementById('contactNumber').value,
                message: document.getElementById('message').value
            };

            // Simulating successful data processing:
            console.log('Form Data Collected (Ready to Send):', formData);

            // Show success message
            showMessageBox('Your message has been sent successfully. We will get back to you soon!');

            // Clear the form fields
            form.reset();
        });

