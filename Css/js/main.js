const openBtn = document.getElementById('openBooking');
const closeBtn = document.getElementById('closeBooking');
const popup = document.getElementById('bookingPopup');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target == popup){ popup.style.display = 'none'; }
});

document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Booking request sent! DJ BARDEN 254 will contact you shortly.');
  popup.style.display = 'none';
  this.reset();
});
