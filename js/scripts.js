// Menu burger : ouvre/ferme la sidebar en mobile
const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
burger.addEventListener('click', () => {
  sidebar.classList.toggle('open')
})
// Fermer le menu si on clique en dehors en mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 600 && sidebar.classList.contains('open')) {
    if (!sidebar.contains(e.target) && !burger.contains(e.target)) {
      sidebar.classList.remove('open')
    }
  }
})

// Accessibilité : touche Esc referme le menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') sidebar.classList.remove('open')
})

const logoutBtn = document.getElementById('logout-btn');
const modal = document.getElementById('logoutModal');
const confirmBtn = document.getElementById('confirmLogout');
const cancelBtn = document.getElementById('cancelLogout');

logoutBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.classList.add('modal-open'); // 👈 active le blur
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open'); // 👈 désactive le blur
});

confirmBtn.addEventListener('click', () => {
  window.location.href = '/logout';
});




// document.addEventListener('DOMContentLoaded', () => {
//   const installBtn = document.getElementById('desktop-install-btn');
//   const isDesktopOS = () => {
//     const platform = navigator.platform.toLowerCase();
//     const userAgent = navigator.userAgent.toLowerCase();
//     return (
//       platform.includes('win') ||
//       platform.includes('mac') ||
//       platform.includes('linux') ||
//       userAgent.includes('windows') ||
//       userAgent.includes('macintosh') ||
//       userAgent.includes('linux')
//     );
//   };
//   if (!isDesktopOS()) {
//     installBtn.style.display = 'none';
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const installBtn = document.getElementById('desktop-install-btn');

//   const isWindows = () => {
//     const ua = navigator.userAgent.toLowerCase();
//     return ua.includes('windows nt');
//   };

//   if (isWindows()) {
//     installBtn.style.display = 'none';
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const installBtn = document.getElementById('desktop-install-btn');
//   const ua = navigator.userAgent.toLowerCase();

//   const isMacOrLinux = ua.includes('macintosh') || ua.includes('linux');

//   if (!isMacOrLinux) {
//     installBtn.style.display = 'none';
//   }
// });

  // Utilitaire pour les cookies
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    return document.cookie.split('; ').reduce((acc, c) => {
      const [key, val] = c.split('=');
      return key === name ? decodeURIComponent(val) : acc;
    }, '');
  }

  // Toggle de catégorie avec gestion des cookies
  function toggleCategory(element) {
    const expanded = element.getAttribute("aria-expanded") === "true";
    element.setAttribute("aria-expanded", String(!expanded));

    const nextList = element.nextElementSibling;
    if (nextList && nextList.classList.contains("channel-list")) {
      if (!expanded) {
        nextList.style.maxHeight = nextList.scrollHeight + "px";
        nextList.style.opacity = "1";
        nextList.style.pointerEvents = "auto";
      } else {
        nextList.style.maxHeight = "0";
        nextList.style.opacity = "0";
        nextList.style.pointerEvents = "none";
      }
    }

    // Sauvegarder les catégories fermées
    const closed = [];
    document.querySelectorAll(".category-title").forEach(title => {
      if (title.getAttribute("aria-expanded") === "false") {
        closed.push(title.dataset.name); // on utilise data-name pour identifier la catégorie
      }
    });
    setCookie("closedCategories", closed.join(","), 30);
  }

  // Au chargement, restaurer l'état des catégories
  document.addEventListener("DOMContentLoaded", () => {
    const closedFromCookie = getCookie("closedCategories").split(",");

    document.querySelectorAll(".category-title").forEach(title => {
      const name = title.dataset.name;
      const isClosed = closedFromCookie.includes(name);
      const nextList = title.nextElementSibling;

      if (isClosed) {
        title.setAttribute("aria-expanded", "false");
        if (nextList && nextList.classList.contains("channel-list")) {
          nextList.style.maxHeight = "0";
          nextList.style.opacity = "0";
          nextList.style.pointerEvents = "none";
        }
      } else {
        title.setAttribute("aria-expanded", "true");
        if (nextList && nextList.classList.contains("channel-list")) {
          nextList.style.maxHeight = nextList.scrollHeight + "px";
          nextList.style.opacity = "1";
          nextList.style.pointerEvents = "auto";
        }
      }
    });
  });



// Permet de mettre en active les items dans la sidebar
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.channel-item');
  links.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});






