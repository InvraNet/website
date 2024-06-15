document.cookie = 'cookieName=cookieValue; SameSite=Strict; Secure';
document.cookie = 'cookieName=cookieValue; SameSite=Strict; Secure; Partitioned=True';

document.addEventListener('DOMContentLoaded', function() {
    window.alert("This website will be down by 2:20PM AEDT to transfer certificates from Cloudflare's Universal SSL to Advanced Certificate Manager. This will take an estimated 1 hour, depending on provisioning time.");
  });
  