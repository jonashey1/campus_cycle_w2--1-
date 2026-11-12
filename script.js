// Booking form: this practice page does not send or store bookings.
const booking = document.querySelector('#booking');
const message = document.querySelector('#message');

booking.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Nothing was sent and nothing was booked: this page cannot take bookings yet.';
});

// Price estimate: selected service plus EUR 5 for each small repair.
const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

function sanitizeRepairCount(value) {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return Math.max(0, Math.floor(parsed));
}

function showEstimate() {
  const count = sanitizeRepairCount(repairs.value);
  const basePrice = Number(service.value) || 0;

  total.textContent = 'EUR ' + (basePrice + count * 5);
}

service.addEventListener('change', showEstimate);
repairs.addEventListener('input', showEstimate);
showEstimate();
