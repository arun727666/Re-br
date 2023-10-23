document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const contact = document.getElementById("contact").value;
    const contact1 = document.getElementById("contact1").value;
    const education1 = document.getElementById("education1").value;
    const education2 = document.getElementById("education2").value;
    const education3 = document.getElementById("education3").value;
    const education5 = document.getElementById("education5").value;
    const education4 = document.getElementById("education4").value;
    const course = document.getElementById("course").value;
    const lang = document.getElementById("lang").value;
    const hobbi = document.getElementById("hobbi").value;
    // Get the uploaded photo
    const photoInput = document.getElementById("photo");
    const photoFile = photoInput.files[0];

    // Create an HTML document for the resume in a new tab
    const resumeContent = `
    <html>
    <head>
        <title>ReBr developed By Arun</title>
    </head>
    <body>
    <script src="https://kit.fontawesome.com/4bdf102660.js" crossorigin="anonymous"></script>
        <h1><center> RESUME </center></h1>
        <h2><i class="fa-solid fa-user fa-beat"></i>  PERSONAL DETAILS:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>City:</strong> ${city}</p>
        <h2><i class="fa-solid fa-address-book fa-beat-fade"></i>  CONTACT DETAILS:</h2>
        <p><strong>Mobile No:</strong> ${contact}</p>
        <p><strong>Mail ID:</strong> ${contact1}</p>
        <h2><i class="fa-solid fa-school fa-beat-fade"></i>  EDUCATION DETAILS:</h2>
        <p><strong>School Name:</strong> ${education1}</p>
        <p><strong>12th Mark:</strong> ${education2}</p>
        <p><strong>College Name:</strong> ${education3}</p>
        <p><strong>Degree:</strong> ${education5}</p>
        <p><strong>College CGPA:</strong> ${education4}</p>
        <h2><i class="fa-solid fa-certificate fa-beat-fade"></i>  SKILLS:</h2>
        <p><strong>Courses & certifications:</strong> ${course}</p>
        <p><strong>Language Knowns:</strong> ${lang}</p>
        <p><strong>Hobbies:</strong> ${hobbi}</p>
        <p style="position: absolute; top: 5px; right: 60px; font-size: 20px" ><strong>Passport Size</strong></p>
        <img src="${URL.createObjectURL(photoFile)}" alt="Passport-size Photo" style="position: absolute; top: 50px; right: 10px; width: 51mm; height: 51mm;">
    </body>
    </html>
`;

    // Open a new tab and display the resume content
    const newTab = window.open();
    newTab.document.write(resumeContent);
});
