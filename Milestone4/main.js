//get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//form submission handling
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent pagr reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var qualification = document.getElementById('qualification').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate resume content dianamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>qualification</h3>\n    <p contenteditable=\"true\">>").concat(qualification, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">>").concat(skills, "</p>\n    ");
    //display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display element Is Missing.');
    }
});
