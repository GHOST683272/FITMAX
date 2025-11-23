// FITMAX JS - fruit pop (homepage), booking opens WhatsApp text
document.addEventListener('DOMContentLoaded', function() {
  const gameArea = document.getElementById('game-area');
  const fruits = ['🍎','🍉','🍌','🍇','🥝','🍊','🍍','🍒'];

  if (gameArea) {
    gameArea.addEventListener('click', function(e){
      const rect = gameArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const fruit = document.createElement('div');
      fruit.className = 'fruit';
      fruit.textContent = fruits[Math.floor(Math.random()*fruits.length)];
      fruit.style.left = (x - 20) + 'px';
      fruit.style.top = (y - 20) + 'px';
      gameArea.appendChild(fruit);

      setTimeout(()=> { if (fruit.parentNode) fruit.remove(); }, 1200);
    });
  }

  // Booking form - WhatsApp prefilled message
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(ev){
      ev.preventDefault();
      const name = bookingForm.querySelector('[name=name]').value || 'Guest';
      const phone = bookingForm.querySelector('[name=phone]').value || '';
      const service = bookingForm.querySelector('[name=service]').value || 'General';
      const date = bookingForm.querySelector('[name=date]').value || '';
      const msg = encodeURIComponent(`Hi FITMAX, I'd like to book: ${service} on ${date}. Name: ${name}. Phone: ${phone}`);
      const wa = 'https://wa.me/?text=' + msg;
      window.open(wa, '_blank');
    });
  }
});
