gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.to('.hero h1', {
  opacity: 1,
  duration: 2,
  delay: 0.5,
  ease: "power2.out"
});

// Sections Animation
gsap.utils.toArray('.section').forEach((section, i) => {
  const content = section.querySelector('.content');
  const image = section.querySelector('.image-container');

  // Create a timeline for each section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      markers: false,
      scrub: 1,
    }
  });

  // Animate content and image
  tl.from(content, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  })
  .from(image, {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power2.out"
  }, "-=0.5");
});

// Parallax effect for images
gsap.utils.toArray('.image-container img').forEach(image => {
  gsap.to(image, {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    }
  });
});