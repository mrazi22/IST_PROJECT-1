/* ----- NAVIGATION BAR FUNCTION ----- */



 function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }
  
  /* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed(".typedText",{
    strings : ["Product Manager","Salesman","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })



 //form validation//
 function validation() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Basic validation
  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    Swal.fire('Error', 'Please fill in all fields', 'error');
    return;
  }

  // Email validation (you can enhance this)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    Swal.fire('Error', 'Invalid email format', 'error');
    return;
  }

  // Store data in local storage
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('formData', JSON.stringify(userData));

  // Clear form after successful validation
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  Swal.fire('Success', 'Message sent successfully', 'success');
}

// dark mode
var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "/assets/sun.png";
  }else{
    icon.src = "/assets/moon.png";
  }
}




  




   
 
 


