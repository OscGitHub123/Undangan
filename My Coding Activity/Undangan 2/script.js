window.onload = function() {
  var htmlElement = document.documentElement;
  htmlElement.classList.add('open');
};

document.addEventListener("DOMContentLoaded", function() {
  var btn = document.querySelector(".btn");
  btn.classList.add("bounce-animation");
});

var audioPlayer = document.getElementById('audioPlayer');

document.addEventListener("DOMContentLoaded", function() {
  var template1 = document.getElementById("template1");
  var template2 = document.getElementById("template2");
  var btnSwitch = document.getElementById("btnSwitch");
  var carousel = document.getElementById('carousel')
  

  btnSwitch.addEventListener("click", function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } 
    template1.style.opacity = '0';
    template1.style.pointerEvents = 'none';
    template1.style.display='none'
    template2.style.display='block'
    tombol.style.display='block'
    carousel.style.display='block'
    
 

});
})


// Set the countdown target date (30 Juni 2023)
var targetDate = new Date();
targetDate.setFullYear(2023);
targetDate.setMonth(5);
targetDate.setDate(30);
targetDate.setHours(8);
targetDate.setMinutes(0);
targetDate.setSeconds(0);

// Update the countdown every second
var countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').innerHTML = formatTime(days);
  document.getElementById('hours').innerHTML = formatTime(hours);
  document.getElementById('minutes').innerHTML = formatTime(minutes);
  document.getElementById('seconds').innerHTML = formatTime(seconds);

  // Check if the countdown has reached the target date
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Countdown has ended';
  }
}

// Function to add leading zero if number is less than 10
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

document.addEventListener("DOMContentLoaded", function() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(function(slide) {
      slide.style.opacity = "0";
      slide.classList.remove("active");
    });
    slides[index].style.opacity = "1";
    slides[index].classList.add("active");

    if (index === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "block";
    }

    if (index === slides.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  previousButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  showSlide(currentIndex);
});





// Set tanggal target untuk countdown (2 Juli 2023, 10:00 AM)
var tanggalTarget = new Date("July 2, 2023 10:00:00").getTime();
var intervalCountdown = setInterval(perbaruiCountdown, 1000);

function padZero(number) {
  return number < 10 ? "0" + number : number;
}

function perbaruiCountdown() {
  var tanggalSekarang = new Date().getTime();
  var selisihWaktu = tanggalTarget - tanggalSekarang;

  var hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  var jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
  var detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

  document.getElementById("countdown-hari").innerHTML = padZero(hari);
  document.getElementById("countdown-jam").innerHTML = padZero(jam);
  document.getElementById("countdown-menit").innerHTML = padZero(menit);
  document.getElementById("countdown-detik").innerHTML = padZero(detik);
}

perbaruiCountdown();

function copyAccountNumber() {
  var accountNumber = document.querySelector('.account-number').textContent;
  navigator.clipboard.writeText(accountNumber);
  alert('Nomor rekening berhasil disalin!');
}



