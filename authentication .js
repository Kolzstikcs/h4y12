
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    var authKey = document.getElementById("authKey").value;
    var spinner = document.getElementById("spinner");
    var alertBox = document.getElementById("alert");
    
    // Show spinner while processing
    spinner.style.display = "block";
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://kscloud.000webhostapp.com/authentication.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            spinner.style.display = "none"; // Hide spinner when response received
            
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.error) {
                    showAlert(response.message, "alert-danger");
                } else {
                    showAlert(response.message, "alert-success");
            spinner.style.display = "block";
                    setTimeout(function() {
                        window.location.href = "index.php";
                    }, 2000);
                }
            } else {
                showAlert("An error occurred. Please try again later.", "alert-danger");
            }
        }
    };
    xhr.send("authKey=" + encodeURIComponent(authKey));
}

function showAlert(message, className) {
    var alertBox = document.getElementById("alert");
    alertBox.innerHTML = message;
    alertBox.className = "alert " + className;
    alertBox.style.display = "block";
}
