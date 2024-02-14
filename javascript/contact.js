
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactPhone = document.getElementById('contact-phone'),
      contactEmail = document.getElementById('contact-email'),
      contactService = document.getElementById('contact-service'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault();
    //Check if the field has a value
    if(contactName.value === '' || contactPhone.value === '' || contactEmail.value === '' || contactService.value === ''){
        // Add and removed color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'Write all the input fields 📋'
    } else{
        // Service ID - template ID - #form -publickey
        emailjs.sendForm('service_e6xs64m','template_5ko303l','#contact-form','ye4t_YLIfjjewn-VZ')
        .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'
            
            //Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {
            alert('OOPS! SOMETHING HAS FAILD...', error)
        })

        // To clear the input field
        contactName.value = ''
        contactPhone.value = ''
        contactEmail.value = ''
        contactService.value = ''
    }
}    
contactForm.addEventListener('submit', sendEmail);
