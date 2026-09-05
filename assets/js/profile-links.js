(() => {
  "use strict";

  const links = Array.from(document.querySelectorAll(".profile-links a[href]"));
  let revision = 0;

  const refreshLink = (link) => {
    try {
      const url = new URL(link.href, document.baseURI);
      if (!["https:", "http:"].includes(url.protocol) || url.origin === window.location.origin) return;

      // Replace, rather than append, the token; keep profile IDs and other parameters.
      // This avoids reusing the same navigation URL. Remote caches may still ignore it.
      const token = `${Date.now().toString(36)}-${(++revision).toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      url.searchParams.set("refresh", token);
      link.href = url.href;
    } catch {
      // A malformed link must not affect the remaining links or native navigation.
    }
  };

  const refreshAll = () => links.forEach(refreshLink);

  links.forEach((link) => {
    // Keep native behavior for taps, keyboard activation, new tabs, and link menus.
    ["pointerdown", "click", "auxclick", "contextmenu", "focus"].forEach((eventName) => {
      link.addEventListener(eventName, () => refreshLink(link), { capture: true });
    });
  });

  refreshAll();
  window.addEventListener("pageshow", refreshAll);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") refreshAll();
  });
})();
