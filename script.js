// FITMAX JS - workout pop (homepage), booking opens WhatsApp text
document.addEventListener('DOMContentLoaded', function() {
  const gameArea = document.getElementById('game-area');
  const workouts = ['🏋️‍♂️','🤸‍♀️','💪','🥊','🧘‍♂️','🚴‍♂️','🤾‍♂️','🏃‍♂️'];

  if (gameArea) {
    gameArea.addEventListener('click', function(e){
      const rect = gameArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const icon = document.createElement('div');
      icon.className = 'fruit';
      icon.textContent = workouts[Math.floor(Math.random()*workouts.length)];
      icon.style.left = (x - 20) + 'px';
      icon.style.top = (y - 20) + 'px';
      gameArea.appendChild(icon);

      setTimeout(()=> { if (icon.parentNode) icon.remove(); }, 1200);
    });
  }

  // Booking form - WhatsApp prefilled message (unchanged)
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
