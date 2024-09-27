document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generateButton");
    var resumeOutput = document.getElementById("resumeOutput");
    generateButton.addEventListener("click", function () {
        // Gather input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var profilePicture = document.getElementById('profilePicture').files[0];
        // Check for required fields
        if (!name || !email || !phone) {
            alert("Please fill in all required fields.");
            return;
        }
        // Create a URL for the profile picture
        var profilePictureURL = "";
        if (profilePicture) {
            profilePictureURL = URL.createObjectURL(profilePicture);
        }
        // Generate resume output
        resumeOutput.innerHTML = "\n            <h2>".concat(name, "'s Resume</h2>\n            ").concat(profilePicture ? "<img src=\"".concat(profilePictureURL, "\" alt=\"").concat(name, "'s Profile Picture\" style=\"width: 150px; height: auto;\"/>") : '', "\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
});
