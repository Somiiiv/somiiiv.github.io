function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

// Update the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // ... existing code ...

    // Add event listeners for sidebar dropdowns
    document.querySelectorAll('.sidebar-dropdown > a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        const sidebar = document.getElementById('sidebar');
        if (!e.target.closest('#sidebar') && !e.target.closest('.hamburger')) {
            closeSidebar();
        }
    });
});