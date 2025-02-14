document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        // Get random positions within the viewport
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 100);
        
        // Apply new position
        noButton.style.position = "absolute";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    });
});
