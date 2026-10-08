/* ===================================================================
   Bhavesh Yadav - Modern Student Portfolio Scripts
   Interactive Navigation, ScrollSpy, Form Handling & Validation
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Hamburger Menu Toggle & Accessibility
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking on any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Active Link State on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavSection() {
    const scrollPosition = window.pageYOffset + 140;
    let currentId = 'home';

    sections.forEach(section => {
      const top = section.offsetTop;
      if (scrollPosition >= top) {
        currentId = section.getAttribute('id');
      }
    });

    let activeLink = document.querySelector(`.nav-link[href="#${currentId}"]`);
    
    // Group sub-sections to their primary parent nav item if not in navbar
    if (!activeLink) {
      if (currentId === 'achievements' || currentId === 'hobbies') {
        activeLink = document.querySelector('.nav-link[href="#skills"]');
      } else if (currentId === 'strengths') {
        activeLink = document.querySelector('.nav-link[href="#projects"]');
      }
    }

    if (activeLink) {
      navLinks.forEach(link => link.classList.remove('active'));
      activeLink.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActiveNavSection, { passive: true });
  window.addEventListener('resize', updateActiveNavSection, { passive: true });
  updateActiveNavSection();

  // 4. Contact Form Handling & Validation
  const contactForm = document.getElementById('contact-form');
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackDetail = document.getElementById('feedback-detail');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const submitBtn = document.getElementById('submit-btn');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject-field');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    // Real-time error dismissal as user types
    [
      { input: nameInput, error: nameError },
      { input: emailInput, error: emailError },
      { input: subjectInput, error: subjectError },
      { input: messageInput, error: messageError }
    ].forEach(({ input, error }) => {
      if (input && error) {
        input.addEventListener('input', () => {
          if (input.value.trim()) {
            input.classList.remove('invalid');
            error.classList.remove('visible');
          }
        });
      }
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('invalid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('invalid');
        emailError.classList.remove('visible');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('invalid');
        subjectError.classList.add('visible');
        isValid = false;
      } else {
        subjectInput.classList.remove('invalid');
        subjectError.classList.remove('visible');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('invalid');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        messageInput.classList.remove('invalid');
        messageError.classList.remove('visible');
      }

      if (!isValid) {
        // Focus first invalid element
        const firstInvalid = contactForm.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Show sending state
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      if (btnText && btnSpinner) {
        btnText.classList.add('hidden');
        btnSpinner.classList.remove('hidden');
        submitBtn.disabled = true;
      }

      const senderName = nameInput.value.trim();
      const senderEmail = emailInput.value.trim();
      const userSubject = subjectInput.value.trim();
      const userMessage = messageInput.value.trim();

      const accessKeyInput = document.getElementById('web3forms_access_key');
      const isPlaceholderKey = !accessKeyInput || accessKeyInput.value === 'YOUR_ACCESS_KEY_HERE';

      if (!isPlaceholderKey) {
        // Submit using Web3Forms endpoint
        try {
          const formData = new FormData(contactForm);
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });

          const result = await response.json();
          if (result.success) {
            showSuccessBanner(senderName);
          } else {
            fallbackSuccess(senderName, senderEmail, userSubject, userMessage);
          }
        } catch (error) {
          fallbackSuccess(senderName, senderEmail, userSubject, userMessage);
        }
      } else {
        // Graceful student demonstration mode (simulated network delivery)
        setTimeout(() => {
          fallbackSuccess(senderName, senderEmail, userSubject, userMessage);
        }, 500);
      }
    });

    function showSuccessBanner(senderName) {
      resetButtonState();
      contactForm.classList.add('hidden');
      if (feedbackCard && feedbackDetail) {
        feedbackDetail.innerHTML = `Thank you <strong>${escapeHtml(senderName)}</strong>! Your message has been sent directly to Bhavesh Yadav's inbox.`;
        feedbackCard.classList.remove('hidden');
      }
    }

    function fallbackSuccess(senderName, senderEmail, subject, message) {
      resetButtonState();
      contactForm.classList.add('hidden');
      if (feedbackCard && feedbackDetail) {
        const mailtoSubject = encodeURIComponent(subject || 'Portfolio Inquiry for Bhavesh');
        const mailtoBody = encodeURIComponent(`From: ${senderName} (${senderEmail})\n\nMessage:\n${message}\n`);
        const mailtoUrl = `mailto:[Email]?subject=${mailtoSubject}&body=${mailtoBody}`;

        feedbackDetail.innerHTML = `
          Thank you <strong>${escapeHtml(senderName)}</strong>! Your message is ready.<br>
          <span style="display:inline-block; margin-top:8px; font-size:0.88rem; color:var(--text-muted);">
            Click below to deliver it directly via your mail client to Bhavesh's inbox:
          </span>
          <div style="margin-top:16px;">
            <a href="${mailtoUrl}" class="btn btn-orange btn-sm">
              <i class="fa-solid fa-paper-plane"></i> Open in Email Client
            </a>
          </div>
        `;
        feedbackCard.classList.remove('hidden');
      }
    }

    function resetButtonState() {
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      if (btnText && btnSpinner) {
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
        submitBtn.disabled = false;
      }
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  }

  // Reset Form to send another message
  if (resetFormBtn && contactForm && feedbackCard) {
    resetFormBtn.addEventListener('click', () => {
      contactForm.reset();
      contactForm.classList.remove('hidden');
      feedbackCard.classList.add('hidden');
      const nameInput = document.getElementById('name');
      if (nameInput) nameInput.focus();
    });
  }
});
