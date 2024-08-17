document.getElementById('applicationForm').addEventListener('submit', function(event) {
 event.preventDefault(); 
  // Prevent form from submitting normally

  // Get form values
  const firstName = document.getElementById('first').value;
  const lastName = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const hostel = document.getElementById('hostel').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const pincode = document.getElementById('pincode').value;
  const date = document.getElementById('date').value;

  // Construct the WhatsApp message
  const message = `*Application Details*%0A` +
                  `*First Name:* ${firstName}%0A` +
                  `*Last Name:* ${lastName}%0A` +
                  `*Email:* ${email}%0A` +
                  `*Hostel:* ${hostel}%0A` +
                  `*Address:* ${address}%0A` +
                  `*City:* ${city}%0A` +
                  `*Pin Code:* ${pincode}%0A` +
                  `*Date:* ${date}%0A`;

  // Replace '1234567890' with your WhatsApp number (use the country code without the + sign)
  const phoneNumber = '919336537195';
  
  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open the WhatsApp link in a new tab
  window.open(whatsappLink, '_blank');
});
