<<<<<<< HEAD
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1,
  lerp: 0.04,
  smartphone: {
    smooth: true,
    multiplier: 1,
    lerp: 0.04,
  },
  tablet: {
    smooth: true,
    multiplier: 1,
    lerp: 0.04,
  },
  reloadOnContextChange: true,
  class: "is-inview",
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
  draggingClass: "has-scroll-dragging",
  smoothClass: "has-scroll-smooth",
  initClass: "has-scroll-init",
  getSpeed: true,
  getDirection: true,
  gestureDirection: "vertical",
  touchMultiplier: 1.5,
  firefoxMultiplier: 50,
  useKeyboard: true,
});

// Fade in hero section
gsap.from("#hero", {
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    onEnter: () => {
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    },
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// Add hover effect to links
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2, duration: 0.2 });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 });
  });
});

// Image hover effect for project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector("img"), { scale: 1.1, duration: 0.5 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector("img"), { scale: 1, duration: 0.5 });
  });
});



// Locomotive Scroll update on window resize
window.addEventListener("resize", () => scroll.update());

// GSAP ScrollTrigger integration
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    scroller: "[data-scroll-container]",
    start: "top center",
    onEnter: () => {
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    },
  });
});

// Parallax effect for project cards
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.to(card, {
    yPercent: -20,
    ease: "expo.out",
    scrollTrigger: {
      trigger: card,
      scroller: "[data-scroll-container]",
      scrub: true,
    },
  });
});

// Text reveal animation for headings
gsap.utils.toArray("h2").forEach((heading) => {
  gsap.from(heading, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: heading,
      scroller: "[data-scroll-container]",
      start: "top 80%",
    },
  });
});

// Update ScrollTrigger on scroll
scroll.on("scroll", ScrollTrigger.update);

// Update scroll position on page refresh
ScrollTrigger.addEventListener("refresh", () => scroll.update());

// Refresh ScrollTrigger and update scroll
ScrollTrigger.refresh();

new Typed("#typed-text", {
  strings: ["Frontend", "Backend", "Full-Stack"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});

const cursorFollow = document.querySelector(".cursor-follow");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursorFollow, {
    x: e.clientX,
    y: e.clientY,
    ease:"back.out(1.7)",
    duration: 0.1,
  });
});

document.body.addEventListener("mouseenter", () => {
  gsap.to(cursorFollow, { opacity: 1, ease:"power4.out", duration: 1 });
});

document.body.addEventListener("mouseleave", () => {
  gsap.to(cursorFollow, { opacity: 0, ease:"power4.out", duration: 1 });
});

const interactiveElements = document.querySelectorAll(
  "a, button, .project-card"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursorFollow, { scale: 2, duration: 0.2, ease: "power4.out" });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursorFollow, { scale: 1, duration: 0.3, ease: "power4.out" });
  });
});

// Smooth scroll for the "Explore My Work" button
document
  .querySelector('a[href="#projects"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const projectsSection = document.querySelector("#projects");
    scroll.scrollTo(projectsSection);
  });

function calculateParticles() {
  return Math.floor((window.innerWidth * window.innerHeight) / 10000);
}

function calculateMouseRadius() {
  return Math.min(150, window.innerWidth / 6);
}

function handleInteraction(event) {
  if (event.touches) {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
  } else {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }
}

window.addEventListener("mousemove", handleInteraction);
window.addEventListener("touchmove", handleInteraction);
window.addEventListener("touchstart", handleInteraction);

window.addEventListener("resize", function () {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  numberOfParticles = calculateParticles();
  mouse.radius = calculateMouseRadius();
  init();
});


class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 1 + 0.5; // Smaller particles
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 0 + 0.9; // Different densities for varied movements
    this.color = "#6366f0";
    this.waveOffset = Math.random() * 0.5; // Offset for wave effect
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouseX, mouseY, time) {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x += directionX;
      this.y += directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 20; // Smooth return to base position
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 15; // Smooth return to base position
      }
    }

    // Wave effect only when interacting
    if (distance < mouse.radius) {
      this.y += Math.sin(time + this.waveOffset) * 0.3;
    }
  }
}

// Canvas setup
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const particlesArray = [];
const numberOfParticles = 160; // Increase number of particles for denser effect
const mouse = {
  x: null,
  y: null,
  radius: Math.min(width, height) * 0.50 // Adjust radius for interaction sensitivity
};

// Event listener for mouse movement
window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Initialize particles
function init() {
  particlesArray.length = 0;
  for (let i = 0; i < numberOfParticles; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    particlesArray.push(new Particle(x, y));
  }
}

// Animation loop
function animate() {
  const time = Date.now() * 0.005;
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw(ctx);
    particlesArray[i].update(mouse.x, mouse.y, time);
  }
  requestAnimationFrame(animate);
}

// Start animation
init();
animate();



// paswword
=======
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1,
  lerp: 0.04,
  smartphone: {
    smooth: true,
    multiplier: 1,
    lerp: 0.04,
  },
  tablet: {
    smooth: true,
    multiplier: 1,
    lerp: 0.04,
  },
  reloadOnContextChange: true,
  class: "is-inview",
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
  draggingClass: "has-scroll-dragging",
  smoothClass: "has-scroll-smooth",
  initClass: "has-scroll-init",
  getSpeed: true,
  getDirection: true,
  gestureDirection: "vertical",
  touchMultiplier: 1.5,
  firefoxMultiplier: 50,
  useKeyboard: true,
});

// Fade in hero section
gsap.from("#hero", {
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    onEnter: () => {
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    },
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// Add hover effect to links
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2, duration: 0.2 });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 });
  });
});

// Image hover effect for project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector("img"), { scale: 1.1, duration: 0.5 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector("img"), { scale: 1, duration: 0.5 });
  });
});



// Locomotive Scroll update on window resize
window.addEventListener("resize", () => scroll.update());

// GSAP ScrollTrigger integration
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    scroller: "[data-scroll-container]",
    start: "top center",
    onEnter: () => {
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      });
    },
  });
});

// Parallax effect for project cards
gsap.utils.toArray(".project-card").forEach((card) => {
  gsap.to(card, {
    yPercent: -20,
    ease: "expo.out",
    scrollTrigger: {
      trigger: card,
      scroller: "[data-scroll-container]",
      scrub: true,
    },
  });
});

// Text reveal animation for headings
gsap.utils.toArray("h2").forEach((heading) => {
  gsap.from(heading, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: heading,
      scroller: "[data-scroll-container]",
      start: "top 80%",
    },
  });
});

// Update ScrollTrigger on scroll
scroll.on("scroll", ScrollTrigger.update);

// Update scroll position on page refresh
ScrollTrigger.addEventListener("refresh", () => scroll.update());

// Refresh ScrollTrigger and update scroll
ScrollTrigger.refresh();

new Typed("#typed-text", {
  strings: ["Frontend", "Backend", "Full-Stack"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});

const cursorFollow = document.querySelector(".cursor-follow");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursorFollow, {
    x: e.clientX,
    y: e.clientY,
    ease:"back.out(1.7)",
    duration: 0.1,
  });
});

document.body.addEventListener("mouseenter", () => {
  gsap.to(cursorFollow, { opacity: 1, ease:"power4.out", duration: 1 });
});

document.body.addEventListener("mouseleave", () => {
  gsap.to(cursorFollow, { opacity: 0, ease:"power4.out", duration: 1 });
});

const interactiveElements = document.querySelectorAll(
  "a, button, .project-card"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursorFollow, { scale: 2, duration: 0.2, ease: "power4.out" });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursorFollow, { scale: 1, duration: 0.3, ease: "power4.out" });
  });
});

// Smooth scroll for the "Explore My Work" button
document
  .querySelector('a[href="#projects"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const projectsSection = document.querySelector("#projects");
    scroll.scrollTo(projectsSection);
  });

function calculateParticles() {
  return Math.floor((window.innerWidth * window.innerHeight) / 10000);
}

function calculateMouseRadius() {
  return Math.min(150, window.innerWidth / 6);
}

function handleInteraction(event) {
  if (event.touches) {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
  } else {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }
}

window.addEventListener("mousemove", handleInteraction);
window.addEventListener("touchmove", handleInteraction);
window.addEventListener("touchstart", handleInteraction);

window.addEventListener("resize", function () {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  numberOfParticles = calculateParticles();
  mouse.radius = calculateMouseRadius();
  init();
});


class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 1 + 0.5; // Smaller particles
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 0 + 0.9; // Different densities for varied movements
    this.color = "#6366f0";
    this.waveOffset = Math.random() * 0.5; // Offset for wave effect
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouseX, mouseY, time) {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x += directionX;
      this.y += directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 20; // Smooth return to base position
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 15; // Smooth return to base position
      }
    }

    // Wave effect only when interacting
    if (distance < mouse.radius) {
      this.y += Math.sin(time + this.waveOffset) * 0.3;
    }
  }
}

// Canvas setup
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const particlesArray = [];
const numberOfParticles = 160; // Increase number of particles for denser effect
const mouse = {
  x: null,
  y: null,
  radius: Math.min(width, height) * 0.50 // Adjust radius for interaction sensitivity
};

// Event listener for mouse movement
window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Initialize particles
function init() {
  particlesArray.length = 0;
  for (let i = 0; i < numberOfParticles; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    particlesArray.push(new Particle(x, y));
  }
}

// Animation loop
function animate() {
  const time = Date.now() * 0.005;
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw(ctx);
    particlesArray[i].update(mouse.x, mouse.y, time);
  }
  requestAnimationFrame(animate);
}

// Start animation
init();
animate();



// paswword
>>>>>>> db298f146a585ea70a3e6c73cf532a72e1a78499
// dga1UFCb#ehea961h