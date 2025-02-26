// Create animated background with floating particles
function createParticles() {
    const bg = document.getElementById('animated-bg');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('floating-particle');

      // Set a random size between 2px and 10px
      const size = Math.random() * 8 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      // Randomize position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';

      // Randomize animation duration (between 10s and 20s) and delay
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      particle.style.animationDuration = duration + 's';
      particle.style.animationDelay = delay + 's';

      bg.appendChild(particle);
    }
  }

  document.addEventListener('DOMContentLoaded', createParticles);