// Updated JavaScript for sidebar

function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById("sidebar");
    const isClickInside = sidebar.contains(event.target) ||
        event.target.classList.contains('hamburger');

    if (!isClickInside && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});