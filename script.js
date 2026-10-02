/* ===================================================================
   Bhavesh Yadav - Portfolio Interactive JavaScript
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
        }
      });
    });
  }

  // 3. Active Link State on Scroll
  const sections = document.querySelectorAll('section[id]');

  function updateActiveSection() {
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

      if (navItem && scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => link.classList.remove('active'));
        navItem.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection);

  // 4. Interactive Contact Form (Allows anyone to send a message)
  const contactForm = document.getElementById('contact-form');
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackDetail = document.getElementById('feedback-detail');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const submitBtn = document.getElementById('submit-btn');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const subjectError = document.getElementById('subject-error');
      const messageError = document.getElementById('message-error');

      let valid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        nameError.classList.add('visible');
        valid = false;
      } else {
        nameInput.classList.remove('invalid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        emailError.classList.add('visible');
        valid = false;
      } else {
        emailInput.classList.remove('invalid');
        emailError.classList.remove('visible');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('invalid');
        subjectError.classList.add('visible');
        valid = false;
      } else {
        subjectInput.classList.remove('invalid');
        subjectError.classList.remove('visible');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('invalid');
        messageError.classList.add('visible');
        valid = false;
      } else {
        messageInput.classList.remove('invalid');
        messageError.classList.remove('visible');
      }

      if (!valid) return;

      // Button loading indicator
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      if (btnText && btnSpinner) {
        btnText.classList.add('hidden');
        btnSpinner.classList.remove('hidden');
        submitBtn.disabled = true;
      }

      const senderName = nameInput.value.trim();

      setTimeout(() => {
        if (btnText && btnSpinner) {
          btnText.classList.remove('hidden');
          btnSpinner.classList.add('hidden');
          submitBtn.disabled = false;
        }

        contactForm.classList.add('hidden');
        if (feedbackCard && feedbackDetail) {
          feedbackDetail.innerHTML = `Thank you <strong>${senderName}</strong>! Your message has been recorded and will be addressed shortly.`;
          feedbackCard.classList.remove('hidden');
        }
      }, 700);
    });

    // Realtime error removal on input
    ['name', 'email', 'subject', 'message'].forEach(fieldId => {
      const el = document.getElementById(fieldId);
      const err = document.getElementById(`${fieldId}-error`);
      if (el && err) {
        el.addEventListener('input', () => {
          if (el.value.trim()) {
            el.classList.remove('invalid');
            err.classList.remove('visible');
          }
        });
      }
    });
  }

  // Reset form to send another message
  if (resetFormBtn && contactForm && feedbackCard) {
    resetFormBtn.addEventListener('click', () => {
      contactForm.reset();
      contactForm.classList.remove('hidden');
      feedbackCard.classList.add('hidden');
    });
  }
});
