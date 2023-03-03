const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); 
//   prevent the form from submitting normally
  
//   Get form data
  const name = document.getElementById('name').value;
  const contactNo = document.getElementById('contactNo').value;
  const startingPoint = document.getElementById('startingPoint').value;
  const endigPoint = document.getElementById('endingPoint').value;
  const date = document.getElementById('date').value;

  const message = document.getElementById('message').value;
  



// Create mailto link
const subject = encodeURIComponent('Message from ' + name);
const body = encodeURIComponent("Hi, I'm interested in renting a car from your business. Can you provide more information about your available cars and prices?\nName: "+name+'\nStarting City: '+startingPoint+'\nDestination: '+endigPoint+'\nDate: '+date+'\n'+ message);
const mailtoLink = 'mailto:suryawanshis973.ss@gmail.com' + '?subject=' + subject + '&body=' + body;

// Open default email client
//   window.location.href = mailtoLink;
window.open(mailtoLink, '_blank');

});




