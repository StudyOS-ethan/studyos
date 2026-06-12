export function initNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav-page]").forEach((link) => {
    const isActive = link.dataset.navPage === currentPage;
    link.classList.toggle("active", isActive);
    link.toggleAttribute("aria-current", isActive);
  });
}
