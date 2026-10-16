/* ==========================================================
   KU.ARCHIVE Resume & Portfolio Interactive Scripts
   Features:
   - Dark/Light Theme Switching with LocalStorage persistence
   - One-Click Email Copy to Clipboard with Toast Notification
   - Interactive Study Archive Modal Preview
   - Direct Resume Print / PDF Export Handler
   - Responsive Navigation & Active Scroll Spy
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initEmailCopy();
  initModal();
  initMobileNav();
  initPrint();
  initScrollSpy();
});

/* --- 1. Theme Management (Dark / Light) --- */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const htmlEl = document.documentElement;
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem("ku_portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");
  htmlEl.setAttribute("data-theme", currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = htmlEl.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      
      htmlEl.setAttribute("data-theme", newTheme);
      localStorage.setItem("ku_portfolio_theme", newTheme);
    });
  }
}

/* --- 2. Copy to Clipboard with Toast Feedback --- */
function initEmailCopy() {
  const copyButtons = document.querySelectorAll(".copy-email-btn");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = btn.getAttribute("data-email") || "korea_student@korea.ac.kr";
      copyText(email, `이메일 주소(${email})가 복사되었습니다!`);
    });
  });
}

function copyText(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      triggerToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    triggerToast(successMsg);
  } catch (err) {
    triggerToast("복사에 실패했습니다. 직접 복사해주세요.");
  }
  document.body.removeChild(tempInput);
}

function triggerToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");

  if (!toast) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* --- 3. Archive Preview Modal --- */
function initModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  function closeModal() {
    if (overlay) overlay.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
      closeModal();
    }
  });
}

function openArchiveModal(title, summary) {
  const overlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  if (modalTitle) modalTitle.textContent = title;
  if (modalContent) modalContent.textContent = summary;
  if (overlay) overlay.classList.add("active");
}

/* --- 4. Mobile Navigation Toggle --- */
function initMobileNav() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }
}

/* --- 5. Print / PDF Export --- */
function initPrint() {
  const printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

/* --- 6. Scroll Spy & Navbar Styling on Scroll --- */
function initScrollSpy() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Navbar shadow on scroll
    if (navbar) {
      if (scrollY > 50) {
        navbar.style.boxShadow = "var(--shadow-md)";
      } else {
        navbar.style.boxShadow = "none";
      }
    }

    // Active Section Detection
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active-nav");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  });
}
