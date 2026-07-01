// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const navLinks = document.querySelectorAll('.nav-link');
  if (pageId === 'home') navLinks[0]?.classList.add('active');
  if (pageId === 'projects') navLinks[1]?.classList.add('active');
  if (pageId === 'speaking') navLinks[2]?.classList.add('active');
  if (pageId === 'contact') navLinks[3]?.classList.add('active');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter Projects
function filterProjects(category, btn) {
  document.querySelectorAll('.filter-tabs .filter-btn').forEach(button => {
    button.classList.remove('active');
  });
  btn.classList.add('active');
  
  const cards = document.querySelectorAll('.project-card-full');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Filter Speaking
function filterSpeaking(type, btn) {
  document.querySelectorAll('.speaking-tabs .tab-btn').forEach(button => {
    button.classList.remove('active');
  });
  btn.classList.add('active');
  
  const cards = document.querySelectorAll('.speaking-card-full');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Contact Form
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formStatus = document.getElementById('formStatus');
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
        formStatus.classList.add('success');
        
        this.reset();
        
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
          formStatus.classList.remove('success');
        }, 5000);
      }, 1500);
    });
  }
});
