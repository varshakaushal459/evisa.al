(function () {
  'use strict';

  var w = typeof window !== 'undefined' ? window : {};

  function L(key, en) {
    if (!w.EvisaI18n || w.EvisaI18n.getLang() !== 'sq') return en;
    var tr = w.EvisaI18n.t(key);
    return tr != null && tr !== '' ? tr : en;
  }

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function getUser() {
    try {
      var u = JSON.parse(sessionStorage.getItem('evisaUser') || 'null');
      return u && u.email ? u : null;
    } catch (e) {
      return null;
    }
  }

  function closeAllDd() {
    var n = document.getElementById('nav-notify-dropdown');
    var u = document.getElementById('nav-user-dropdown');
    if (n) n.classList.add('hidden');
    if (u) u.classList.add('hidden');
  }

  function bindDropdowns(displayName, email) {
    var bell = document.getElementById('nav-bell-btn');
    var userBtn = document.getElementById('nav-user-menu-btn');
    var nd = document.getElementById('nav-notify-dropdown');
    var ud = document.getElementById('nav-user-dropdown');
    var header = document.getElementById('nav-user-header');
    var signOut = document.getElementById('nav-sign-out');

    if (header) {
      header.innerHTML =
        esc(displayName) +
        '<br><span class="text-gray-500 text-xs">' +
        esc(email) +
        '</span>';
    }

    function toggle(el) {
      if (!el) return;
      var open = el.classList.contains('hidden');
      closeAllDd();
      if (open) el.classList.remove('hidden');
    }

    if (bell && nd) {
      bell.addEventListener('click', function (e) {
        e.stopPropagation();
        toggle(nd);
      });
    }
    if (userBtn && ud) {
      userBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggle(ud);
      });
    }
    document.addEventListener('click', function () {
      closeAllDd();
    });
    if (nd) nd.addEventListener('click', function (e) { e.stopPropagation(); });
    if (ud) ud.addEventListener('click', function (e) { e.stopPropagation(); });

    if (signOut) {
      signOut.addEventListener('click', function (e) {
        e.preventDefault();
        sessionStorage.removeItem('evisaUser');
        window.location.href = 'index.html';
      });
    }
  }

  function loggedInHtml() {
    return (
      '<div class="inline-flex w-full md:w-auto items-center flex-wrap md:flex-nowrap md:ml-auto gap-2 md:gap-0">' +
      '<div class="ml-0 md:ml-3 relative">' +
      '<button type="button" id="nav-bell-btn" class="relative p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="' +
      esc(L('nav_bell', 'Notifications')) +
      '">' +
      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>' +
      '</button>' +
      '<div id="nav-notify-dropdown" class="hidden origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg">' +
      '<ul class="rounded-md bg-white shadow-lg ring-1 ring-black/5">' +
      '<li class="p-2 text-sm text-gray-700">' +
      esc(L('nav_notify', 'No notifications')) +
      '</li></ul></div></div>' +
      '<div class="ml-2 md:ml-3 relative">' +
      '<button type="button" id="nav-user-menu-btn" class="flex items-center focus:outline-none rounded-full" aria-label="' +
      esc(L('nav_profile', 'User menu')) +
      '">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36" height="36" class="text-gray-400 hover:text-white">' +
      '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' +
      '</button>' +
      '<div id="nav-user-dropdown" class="hidden origin-top-right absolute z-50 right-0 mt-2 w-64 rounded-md shadow-lg">' +
      '<section class="py-1 rounded-md bg-white shadow-lg ring-1 ring-black/5">' +
      '<header class="block px-4 py-2 text-sm text-gray-700 border-b" id="nav-user-header"></header>' +
      '<a href="profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">' +
      esc(L('nav_profile', 'My profile')) +
      '</a>' +
      '<a href="https://e-visa.al/applications" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" target="_blank" rel="noopener">' +
      esc(L('nav_apps', 'Applications')) +
      '</a>' +
      '<a href="#" id="nav-sign-out" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">' +
      esc(L('nav_signout', 'Sign out')) +
      '</a>' +
      '</section></div></div></div>'
    );
  }

  function guestHtml() {
    return (
      '<div class="nav-auth-guest">' +
      '<a href="login.html" class="nav-auth-btn">' +
      esc(L('nav_login', 'Log in')) +
      '</a>' +
      '<a href="register.html" class="nav-auth-btn nav-auth-btn--primary">' +
      esc(L('nav_register', 'Register')) +
      '</a>' +
      '</div>'
    );
  }

  function renderNavbarAuth() {
    var mount = document.getElementById('navbar-auth-mount');
    if (!mount) return;
    var user = getUser();
    if (user) {
      mount.innerHTML = loggedInHtml();
      bindDropdowns(user.displayName || 'User', user.email);
    } else {
      mount.innerHTML = guestHtml();
    }
  }

  w.renderNavbarAuth = renderNavbarAuth;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbarAuth);
  } else {
    renderNavbarAuth();
  }
})();
