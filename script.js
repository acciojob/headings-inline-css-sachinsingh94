//your JS code here. If required.
// Simple validation before form submission
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone || !address) {
        alert("Please fill out all required fields!");
        event.preventDefault(); // stop form submission
    }
});
