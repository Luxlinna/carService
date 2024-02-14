/* document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Simulate sending data to the Screen (HTML file)
    setTimeout(function() {
        document.getElementById("confirmation").innerHTML = `
            <p>Appointment booked successful !</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
        `;
        document.getElementById("bookingForm").reset();
    }, 1000); 
}); */

emailjs.init("ye4t_YLIfjjewn-VZ");

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Simulate sending data to the Screen (HTML file)
    setTimeout(function() {
        document.getElementById("confirmation").innerHTML = `
            <p>Appointment booked successful !</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
        `;
        document.getElementById("bookingForm").reset();
    }, 1000); 
});

/* templateId: template_oinnqsw  ServiceId: service_e6xs64m */