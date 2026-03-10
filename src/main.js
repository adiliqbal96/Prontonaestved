import './style.css'

const PHONE_NUMBER = '4500000000' // Replace with real shop number

window.orderPizza = (pizzaName) => {
  const message = `Hi Pronto Næstved! I'd like to order a ${pizzaName}.`
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
  
  // Visual feedback before redirecting
  const btn = event.target
  const originalText = btn.innerText
  btn.innerText = 'Redirecting...'
  btn.style.opacity = '0.7'
  
  setTimeout(() => {
    window.open(whatsappUrl, '_blank')
    btn.innerText = originalText
    btn.style.opacity = '1'
  }, 500)
}

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
