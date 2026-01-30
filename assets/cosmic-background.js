(function() {
  'use strict';
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCosmicBackground);
  } else {
    initCosmicBackground();
  }
  
  function initCosmicBackground() {
    const canvas = document.getElementById('cosmic-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const stars = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        velocity: Math.random() * 0.3,
        opacity: Math.random()
      });
    }
    
    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      stars.forEach(star => {
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        star.y += star.velocity;
        
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 148, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', function() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }
})();
