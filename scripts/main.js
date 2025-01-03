// scripts/main.js

// Show/hide the scroll-to-top button
const btnScrollTop = document.getElementById('btnScrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
});

// Scroll to top on button click
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
// scripts/main.js

// Intersection Observer for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const timelineObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

timelineItems.forEach((item) => {
  timelineObserver.observe(item);
});

// You can reuse your existing scroll-to-top code here if desired...

