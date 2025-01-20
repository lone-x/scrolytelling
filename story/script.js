gsap.registerPlugin(ScrollTrigger);

// Hero animations with enhanced easing
gsap.to('.hero h1', {
  opacity: 1,
  duration: 2,
  delay: 0.5,
  ease: "power2.out"
});

gsap.to('.hero p', {
  opacity: 1,
  duration: 2,
  delay: 0.8,
  ease: "power2.out"
});

// Enhanced background color animations
const sections = gsap.utils.toArray('.story-section');
sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 60%",
    end: "bottom 60%",
    onEnter: () => {
      const colors = ["#F1F0FB", "#FDE1D3", "#D3E4FD", "#E5DEFF"];
      gsap.to("body", {
        backgroundColor: colors[i] || colors[0],
        duration: 1.5,
        ease: "power2.inOut"
      });
    },
    onLeaveBack: () => {
      const colors = ["#F1F0FB", "#FDE1D3", "#D3E4FD", "#E5DEFF"];
      gsap.to("body", {
        backgroundColor: colors[i - 1] || colors[0],
        duration: 1.5,
        ease: "power2.inOut"
      });
    }
  });
});

// Enhanced image animations with parallax
gsap.utils.toArray('.story-image').forEach(image => {
  gsap.to(image, {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: image,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      scrub: 1
    }
  });
});

// Enhanced quote animations
gsap.utils.toArray('.story-quote').forEach(quote => {
  gsap.from(quote, {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: quote,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      scrub: 1
    }
  });
});