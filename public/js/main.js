const audio = document.querySelector("audio");
const progress = document.getElementById("progress");
const playBtn = document.querySelector(".control button:nth-child(2) i");
const loadingContainer = document.getElementById("loading");
const information = document.getElementById("information");
const title = document.getElementById("particle");
const viewsNumber = document.getElementById('viewsNumber');
loadingContainer.addEventListener("click", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(".loading-page h1", {
    opacity: 1,
    y: -10,
    duration: 1,
  })
    .to(".loading-page h1", {
      letterSpacing: "8px",
      duration: 0.8,
    })
    .to(".loading-page", {
      y: "-100%",
      duration: 1.2,
      delay: 0.5,
    })
    .from(
      "#information",
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.6",
    )

    // PROFILE IMAGE
    .from(
      ".info-user img",
      {
        scale: 0,
        rotation: -10,
        duration: 0.8,
      },
      "-=0.3",
    )

    // NAME + TEXT
    .from(".name h1, .name h2, .name p", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    })

    // LINKS
    .from(".links a", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
    })

    // MUSIC PLAYER
    .from(".music-player", {
      y: 80,
      opacity: 0,
      duration: 0.6,
    });
  audio.play();
  // loadingContainer.style.display = "none";
});
let isPlaying = true;

information.addEventListener("mousemove", (e) => {
  const rect = information.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -20;
  const rotateY = ((x - centerX) / centerX) * -20;

  information.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
});
information.addEventListener("mouseleave", () => {
  information.style.transform = "rotateX(0) rotateY(0)";
});

document
  .querySelector(".control button:nth-child(2)")
  .addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      playBtn.classList.add("fa-pause");
      playBtn.classList.remove("fa-play");
      isPlaying = true;
    } else {
      audio.pause();
      playBtn.classList.add("fa-play");
      playBtn.classList.remove("fa-pause");
      isPlaying = false;
    }
  });

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});



let views = async () => {
  try {
    const res = await fetch('/api/views');
    const data = await res.json();
    console.log(data);
    viewsNumber.innerHTML = data.count;
  } catch (err) {
    console.log(err);
  }
}

views();