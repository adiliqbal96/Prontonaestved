import './style.css'

const PHONE_NUMBER = '4555733532'

const menuData = [
  // PIZZA
  { id: 1, name: "1. Tomat · Ost", price: 80, category: "pizza", ingredients: ["Tomat", "Ost"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "2. Tomat · Ost · Skinke", price: 86, category: "pizza", ingredients: ["Tomat", "Ost", "Skinke"], image: "https://images.unsplash.com/photo-1598514981882-935dfa87dc26?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "3. Tomat · Ost · Skinke · Ananas", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Skinke", "Ananas"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "4. Tomat · Ost · Skinke · Bacon · Peberfrugt", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Skinke", "Bacon", "Peberfrugt"], image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "5. Tomat · Ost · Skinke · Champignon", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Skinke", "Champignon"], image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "6. Tomat · Ost · Pepperoni · Oliven · Løg", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Pepperoni", "Oliven", "Løg"], image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "7. Tomat · Ost · Skinke · Pepperoni · Oliven · Chili · Hvidløg", price: 92, category: "pizza", ingredients: ["Tomat", "Ost", "Skinke", "Pepperoni", "Oliven", "Chili", "Hvidløg"], image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "8. Tomat · Ost · Skinke · Pepperoni · Gorgonzola · Bacon", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Skinke", "Pepperoni", "Gorgonzola", "Bacon"], image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=600&auto=format&fit=crop" },
  { id: 9, name: "9. Tomat · Ost · Tun · Rejer", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Tun", "Rejer"], image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=600&auto=format&fit=crop" },
  { id: 10, name: "10. Tomat · Ost · Kylling · Bacon · Pesto · Rucola", price: 93, category: "pizza", ingredients: ["Tomat", "Ost", "Kylling", "Bacon", "Pesto", "Rucola"], image: "https://images.unsplash.com/photo-1573821663112-6ef0418386de?q=80&w=600&auto=format&fit=crop" },
  { id: 11, name: "11. Tomat · Ost · Tun · Oliven · Løg", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Tun", "Oliven", "Løg"], image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=600&auto=format&fit=crop" },
  { id: 12, name: "12. Tomat · Ost · Laks · Friske tomater · Pesto · Kapers", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Laks", "Friske tomater", "Pesto", "Kapers"], image: "https://images.unsplash.com/photo-1588315029754-2dd089d36a11?q=80&w=600&auto=format&fit=crop" },
  { id: 13, name: "13. Tomat · Ost · Kalkun · Champignon · Chili", price: 96, category: "pizza", ingredients: ["Tomat", "Ost", "Kalkun", "Champignon", "Chili"], image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop" },
  { id: 14, name: "14. Tomat · Ost · Kalkun · Peberfrugt · Løg · Green Hot Chili", price: 94, category: "pizza", ingredients: ["Tomat", "Ost", "Kalkun", "Peberfrugt", "Løg", "Green Hot Chili"], image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop" },
  { id: 15, name: "15. Tomat · Ost · Pepperoni · Peberfrugt · Rucola", price: 93, category: "pizza", ingredients: ["Tomat", "Ost", "Pepperoni", "Peberfrugt", "Rucola"], image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=600&auto=format&fit=crop" },
  { id: 16, name: "16. Tomat · Ost · Kødstrimler · Champignon · Løg", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Kødstrimler", "Champignon", "Løg"], image: "https://images.unsplash.com/photo-1620062779183-5ab415053f47?q=80&w=600&auto=format&fit=crop" },
  { id: 17, name: "17. Tomat · Ost · Kødsauce · Løg", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Kødsauce", "Løg"], image: "https://images.unsplash.com/photo-1559432029-2be8eec4c1ad?q=80&w=600&auto=format&fit=crop" },
  { id: 18, name: "18. Tomat · Ost · Gorgonzola · Parmaskinke", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Gorgonzola", "Parmaskinke"], image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=600&auto=format&fit=crop" },
  { id: 19, name: "19. Tomat · Ost · Champignon · Parmaskinke", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Champignon", "Parmaskinke"], image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=600&auto=format&fit=crop" },
  { id: 20, name: "20. Tomat · Ost · Kylling · Gorgonzola · Artiskok", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Kylling", "Gorgonzola", "Artiskok"], image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=600&auto=format&fit=crop" },
  { id: 21, name: "21. Tomat · Ost · Champignon · Salami", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Champignon", "Salami"], image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=600&auto=format&fit=crop" },
  { id: 22, name: "22. Tomat · Ost · Bresaola · Gorgonzola · Rucola", price: 103, category: "pizza", ingredients: ["Tomat", "Ost", "Bresaola", "Gorgonzola", "Rucola"], image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" },
  { id: 23, name: "23. Tomat · Ost · Gedeost · Kalkun · Spinat", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Gedeost", "Kalkun", "Spinat"], image: "https://images.unsplash.com/photo-1520201163981-8ea49c0730ef?q=80&w=600&auto=format&fit=crop" },
  { id: 24, name: "24. Tomat · Ost · Bresaola · Rucola · Parmesan", price: 103, category: "pizza", ingredients: ["Tomat", "Ost", "Bresaola", "Rucola", "Parmesan"], image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop" },
  { id: 25, name: "25. Tomat · Ost · Rucola · Semidried Tomater", price: 90, category: "pizza", ingredients: ["Tomat", "Ost", "Rucola", "Semidried Tomater"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop" },
  { id: 26, name: "26. Tomat · Ost · Skiver af frisk tomat · Basilikum · Kæmperejer", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Tomat skiver", "Basilikum", "Kæmperejer"], image: "https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=600&auto=format&fit=crop" },
  { id: 27, name: "27. Ost · Kartofler · Rosmarin · Olivenolie", price: 85, category: "pizza", ingredients: ["Ost", "Kartofler", "Rosmarin", "Olivenolie"], image: "https://images.unsplash.com/photo-1588315029754-2dd089d36a11?q=80&w=600&auto=format&fit=crop" },
  { id: 28, name: "28. Trøffel · Mascarpone · Bøffelmælksmozzarella...", price: 103, category: "pizza", ingredients: ["Trøffel", "Mascarpone", "Bøffelmælksmozzarella", "Årstidens svampe", "Rucola", "Parmesan"], image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600&auto=format&fit=crop" },
  { id: 29, name: "29. Tomat · Ost · Peberfrugt · Artiskok · Løg...", price: 98, category: "pizza", ingredients: ["Tomat", "Ost", "Peberfrugt", "Artiskok", "Løg", "Champignon", "Soltørrede tomater"], image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop" },

  // PASTA
  { id: 30, name: "30. Lasagne", price: 80, category: "pasta", ingredients: ["Lasagne"], image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=600&auto=format&fit=crop" },
  { id: 31, name: "31. Dagens Pasta", price: 80, category: "pasta", ingredients: ["2 slags hver dag"], image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop" },

  // SANDWICH
  { id: 32, name: "32. Tomat · Ost · Laks · Salat · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Laks", "Salat", "Lys Dressing"], image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" },
  { id: 33, name: "33. Tomat · Ost · Salami · Salat · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Salami", "Salat", "Lys Dressing"], image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=600&auto=format&fit=crop" },
  { id: 34, name: "34. Tomat · Ost · Tun · Salat · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Tun", "Salat", "Lys Dressing"], image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=600&auto=format&fit=crop" },
  { id: 35, name: "35. Tomat · Ost · Kylling · Salat · Pesto", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Kylling", "Salat", "Pesto"], image: "https://images.unsplash.com/photo-1632832505508-e81881efeb43?q=80&w=600&auto=format&fit=crop" },
  { id: 36, name: "36. Tomat · Ost · Salat · Parmaskinke · Pesto", price: 75, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Salat", "Parmaskinke", "Pesto"], image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop" },
  { id: 37, name: "37. Tomat · Ost · Bresaola · Salat · Pesto", price: 75, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Bresaola", "Salat", "Pesto"], image: "https://images.unsplash.com/photo-1550507992-eb63ffee0224?q=80&w=600&auto=format&fit=crop" },
  { id: 38, name: "38. Tomat · Ost · Kalkun · Salat · Pesto", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Kalkun", "Salat", "Pesto"], image: "https://images.unsplash.com/photo-1553909489-cf47ce8fff85?q=80&w=600&auto=format&fit=crop" },
  { id: 39, name: "39. Mozzarella · Salat · Tomat · Pesto", price: 70, category: "sandwich", ingredients: ["Brød", "Mozzarella", "Salat", "Tomat", "Pesto"], image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=600&auto=format&fit=crop" },
  { id: 40, name: "40. Tomat · Ost · Salat · Skinke · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Salat", "Skinke", "Lys Dressing"], image: "https://images.unsplash.com/photo-1550507992-eb63ffee0224?q=80&w=600&auto=format&fit=crop" },

  // SALATER
  { id: 41, name: "41. Tomatsalat · Mozzarella · Pesto", price: 65, category: "salat", ingredients: ["Tomat", "Mozzarella", "Pesto"], image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=600&auto=format&fit=crop" },
  { id: 42, name: "42. Artiskoksalat · Marinerede Grøntsager", price: 58, category: "salat", ingredients: ["Artiskok", "Marinerede Grøntsager"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" },
  { id: 43, name: "43. Pasta-Salat (Stor)", price: 70, category: "salat", ingredients: ["Pasta", "Salat", "Grøntsager"], image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=600&auto=format&fit=crop" },
  { id: 44, name: "44. Bruschetta", price: 30, category: "salat", ingredients: ["2 stk. Hvidløgsbrød", "Tomat", "Ost"], image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?q=80&w=600&auto=format&fit=crop" },
  { id: 45, name: "45. Blandet Salat", price: 55, category: "salat", ingredients: ["Blandet Salat", "Dressing"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" },
]


const EXTRA_INGREDIENTS = ["Ekstra Ost", "Hvidløg", "Chili", "Bacon", "Løg", "Svampe"]

// Menu Rendering
const renderMenu = (filter = 'alle') => {
  const grid = document.querySelector('#pizza-grid')
  const filteredItems = filter === 'alle' ? menuData : menuData.filter(item => item.category === filter)

  grid.innerHTML = filteredItems.map((item, index) => {
    let displayName = item.name;
    let badgeHtml = '';
    const match = item.name.match(/^(\d+)\.\s*(.*)/);
    if (match) {
      badgeHtml = `<span style="background: rgba(255,87,34,0.15); color: var(--primary); padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; border: 1px solid rgba(255,87,34,0.3); letter-spacing: 0.05em;">Nr. ${match[1]}</span>`;
      displayName = match[2];
    } else {
      badgeHtml = `<span style="background: rgba(255,255,255,0.05); color: var(--text-muted); padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; border: 1px solid var(--glass-border); text-transform: uppercase;">${item.category}</span>`;
    }

    return `
    <div class="glass-panel pizza-card" style="animation-delay: ${index * 0.05}s">
      <div class="image-container">
        <img src="${item.image}" alt="${displayName}" class="pizza-image" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop'">
      </div>
      <div class="pizza-info">
        <div style="margin-bottom: 0.8rem;">${badgeHtml}</div>
        <h3 style="margin-bottom: 0.5rem; font-size: 1.4rem;">${displayName}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 2.85rem;">
          ${item.ingredients.join(', ')}
        </p>
      </div>
      <div class="price-row" style="margin-top: 1.5rem; padding-top: 1.5rem;">
        <span style="font-weight: 800; font-size: 1.4rem; color: white;">${item.price} <span style="font-size: 1rem; color: var(--text-muted); font-weight: 400;">DKK</span></span>
        <a href="tel:+${PHONE_NUMBER}" class="btn-primary" style="padding: 12px 24px; font-size: 0.95rem; border-radius: 12px; display: flex; align-items: center; gap: 8px; text-decoration: none;">
          Ring & Bestil
          <span style="font-size: 1.2rem; display: flex; align-items: center;">📞</span>
        </a>
      </div>
    </div>
  `}).join('')

  // Add reveal class after a small delay for staggered effect
  const cards = grid.querySelectorAll('.pizza-card')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
      }
    })
  }, { threshold: 0.1 })

  cards.forEach(card => observer.observe(card))
}

window.filterMenu = (category) => {
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.toggle('active', card.getAttribute('onclick').includes(`'${category}'`))
  })
  renderMenu(category)
}

// Init
renderMenu()

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Loading Screen Logic
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const text = document.getElementById('loader-text');

  setTimeout(() => {
    text.innerText = "Bager dejen sprød...";
  }, 500);

  setTimeout(() => {
    text.innerText = "Klar til servering!";
    text.style.color = "var(--primary)";
  }, 1200);

  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      // Trigger initial reveal animations after loader is gone
      const grid = document.querySelector('#pizza-grid');
      const cards = grid.querySelectorAll('.pizza-card');
      cards.forEach(card => card.classList.add('reveal'));
    }, 800);
  }, 1600);
});
