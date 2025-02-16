/* Initialize particles.js in the hero background */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#8585b4"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#E6E6FA",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },      
    }
  },
  "retina_detect": true
  
});

/* Optional: Intersection Observer for additional scroll-triggered animations */
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.remove('navbar-visible');
      navbar.classList.add('navbar-hidden');
    } else {
      // Scrolling up
      navbar.classList.remove('navbar-hidden');
      navbar.classList.add('navbar-visible');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});
