# Celestial Analytics - Complete Shopify Theme Files

## ✅ Files Already Created

1. `layout/theme.liquid` - Main theme layout
2. `assets/theme.css` - Core CSS styles

## 📝 Remaining Files to Create

Create the following files in your local copy:

---

### assets/cosmic-background.js

```javascript
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
```

---

### assets/animations.js

```javascript
(function() {
  'use strict';
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  function init() {
    initSmoothScroll();
    initScrollAnimations();
    initMobileMenu();
  }
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
  }
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });
    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
        toggle.classList.remove('active');
      }
    });
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(10, 10, 30, 0.95)';
    } else {
      header.style.background = 'rgba(10, 10, 30, 0.85)';
    }
  });
})();
```

---

## 🚀 Next Steps

1. **Download this repository as ZIP:**
   - Click the green "Code" button at the top of this page
   - Select "Download ZIP"

2. **Create remaining files locally:**
   - Extract the ZIP file
   - Create the JavaScript files listed above in the `assets/` folder
   - Copy the code from this document

3. **Create additional sections:**
   - Refer to my original comprehensive response for section files
   - Create `sections/header.liquid`, `sections/footer.liquid`, `sections/hero.liquid`, etc.

4. **ZIP the complete theme:**
   - Once all files are created, ZIP the entire folder
   - Name it `celestial-analytics.zip`

5. **Upload to Shopify:**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload ZIP file"
   - Select your `celestial-analytics.zip`

---

## 📁 Complete Theme Structure Needed

```
celestial-analytics/
├── layout/
│   └── theme.liquid ✅
├── templates/
│   ├── index.json
│   ├── product.json
│   ├── page.json
│   └── collection.json
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── products-pricing.liquid
│   ├── how-it-works.liquid
│   ├── celestial-finance.liquid
│   └── faq.liquid
├── assets/
│   ├── theme.css ✅
│   ├── cosmic-background.js
│   └── animations.js
└── config/
    └── settings_schema.json
```

Refer to my original comprehensive message for complete code for ALL sections and templates.
