document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton") as HTMLButtonElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

    generateButton.addEventListener("click", () => {
        // Gather input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files![0];

        // Check for required fields
        if (!name || !email || !phone) {
            alert("Please fill in all required fields.");
            return;
        }

        // Create a URL for the profile picture
        let profilePictureURL = "";
        if (profilePicture) {
            profilePictureURL = URL.createObjectURL(profilePicture);
        }

        // Generate resume output
        resumeOutput.innerHTML = `
            <h2>${name}'s Resume</h2>
            ${profilePicture ? `<img src="${profilePictureURL}" alt="${name}'s Profile Picture" style="width: 150px; height: auto;"/>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    });
});
