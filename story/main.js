gsap.registerPlugin(ScrollTrigger);

// Initial animations
gsap.to('.quote-container', {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: 'power3.out',
  delay: 0.5
});

// Cards animation on scroll
gsap.utils.toArray('.card').forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      end: 'top center',
      toggleActions: 'play none none reverse'
    },
    delay: index * 0.2
  });
});

// Handle card clicks
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.dataset.link;
    if (link) {
      gsap.to(card, {
        scale: 0.95,
        duration: 0.2,
        onComplete: () => {
          window.location.href = link;
        }
      });
    }
  });
});

// Quotes rotation
const quotes = [
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde"
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
  }
];

let currentQuoteIndex = 0;

function rotateQuotes() {
  const nextIndex = (currentQuoteIndex + 1) % quotes.length;
  
  gsap.to('.quote-container', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      document.querySelector('.quote').textContent = `"${quotes[nextIndex].text}"`;
      document.querySelector('.author').textContent = `- ${quotes[nextIndex].author}`;
      
      gsap.to('.quote-container', {
        opacity: 1,
        y: 0,
        duration: 0.5
      });
      
      currentQuoteIndex = nextIndex;
    }
  });
}

// Rotate quotes every 5 seconds
setInterval(rotateQuotes, 5000);