//get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//form submission handling
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault(); //prevent pagr reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const qualification = (document.getElementById('qualification') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //generate resume content dianamically
     const resumeHTML  = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Name:</b><span contenteditable="true">${email}</span></p>
    <p><b>Name:</b><span contenteditable="true">${phone}</span></p>

    <h3>qualification</h3>
    <p contenteditable="true">>${qualification}</p>

    <h3>Experience</h3>
    <p contenteditable="true">>${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">>${skills}</p>
    `;
    
   //display generated resume
   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
   }else {
    console.error('The Resume Display element Is Missing.')
   }
});