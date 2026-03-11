import './style.css'

const PHONE_NUMBER = '4555733532'

const menuData = [
  // PIZZA
  { id: 1, name: "1. Tomat · Ost", price: 80, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost"], image: "images/pizza_1.png" },
  { id: 2, name: "2. Tomat · Ost · Skinke", price: 86, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Skinke"], image: "images/pizza_2.png" },
  { id: 3, name: "3. Tomat · Ost · Skinke · Ananas", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Skinke", "Ananas"], image: "images/pizza_3.png" },
  { id: 4, name: "4. Tomat · Ost · Skinke · Bacon · Peberfrugt", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Skinke", "Bacon", "Peberfrugt"], image: "images/pizza_4.png" },
  { id: 5, name: "5. Tomat · Ost · Skinke · Champignon", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Skinke", "Champignon"], image: "images/pizza_5.png" },
  { id: 6, name: "6. Tomat · Ost · Pepperoni · Oliven · Løg", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Pepperoni", "Oliven", "Løg"], image: "images/pizza_6.png" },
  { id: 7, name: "7. Tomat · Ost · Skinke · Pepperoni · Oliven · Chili · Hvidløg", price: 92, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Skinke", "Pepperoni", "Oliven", "Chili", "Hvidløg"], image: "images/pizza_7.png" },
  { id: 8, name: "8. Tomat · Ost · Skinke · Pepperoni · Gorgonzola · Bacon", price: 98, category: "pizza", subCategory: "Specialiteter", ingredients: ["Tomat", "Ost", "Skinke", "Pepperoni", "Gorgonzola", "Bacon"], image: "images/pizza_8.png" },
  { id: 9, name: "9. Tomat · Ost · Tun · Rejer", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Tun", "Rejer"], image: "images/pizza_9.png" },
  { id: 10, name: "10. Tomat · Ost · Kylling · Bacon · Pesto · Rucola", price: 93, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Kylling", "Bacon", "Pesto", "Rucola"], image: "images/pizza_10.png" },
  { id: 11, name: "11. Tomat · Ost · Tun · Oliven · Løg", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Tun", "Oliven", "Løg"], image: "images/pizza_11.png" },
  { id: 12, name: "12. Tomat · Ost · Laks · Friske tomater · Pesto · Kapers", price: 98, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Laks", "Friske tomater", "Pesto", "Kapers"], image: "images/pizza_12.png" },
  { id: 13, name: "13. Tomat · Ost · Kalkun · Champignon · Chili", price: 96, category: "pizza", subCategory: "Specialiteter", ingredients: ["Tomat", "Ost", "Kalkun", "Champignon", "Chili"], image: "images/pizza_13.png" },
  { id: 14, name: "14. Tomat · Ost · Kalkun · Peberfrugt · Løg · Green Hot Chili", price: 94, category: "pizza", subCategory: "Specialiteter", ingredients: ["Tomat", "Ost", "Kalkun", "Peberfrugt", "Løg", "Green Hot Chili"], image: "images/pizza_14.png" },
  { id: 15, name: "15. Tomat · Ost · Pepperoni · Peberfrugt · Rucola", price: 93, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Pepperoni", "Peberfrugt", "Rucola"], image: "images/pizza_15.png" },
  { id: 16, name: "16. Tomat · Ost · Kødstrimler · Champignon · Løg", price: 98, category: "pizza", subCategory: "Specialiteter", ingredients: ["Tomat", "Ost", "Kødstrimler", "Champignon", "Løg"], image: "images/pizza_16.png" },
  { id: 17, name: "17. Tomat · Ost · Kødsauce · Løg", price: 90, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Kødsauce", "Løg"], image: "images/pizza_17.png" },
  { id: 18, name: "18. Tomat · Ost · Gorgonzola · Parmaskinke", price: 98, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Gorgonzola", "Parmaskinke"], image: "images/pizza_18.png" },
  { id: 19, name: "19. Tomat · Ost · Champignon · Parmaskinke", price: 98, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Champignon", "Parmaskinke"], image: "images/pizza_19.png" },
  { id: 20, name: "20. Tomat · Ost · Kylling · Gorgonzola · Artiskok", price: 98, category: "pizza", subCategory: "Specialiteter", ingredients: ["Tomat", "Ost", "Kylling", "Gorgonzola", "Artiskok"], image: "images/pizza_20.png" },
  { id: 21, name: "21. Tomat · Ost · Champignon · Salami", price: 98, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Champignon", "Salami"], image: "images/pizza_21.png" },
  { id: 22, name: "22. Tomat · Ost · Bresaola · Gorgonzola · Rucola", price: 103, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Bresaola", "Gorgonzola", "Rucola"], image: "images/pizza_22.png" },
  { id: 23, name: "23. Tomat · Ost · Gedeost · Kalkun · Spinat", price: 98, category: "pizza", subCategory: "Specialiteter", ingredients: ["Tomat", "Ost", "Gedeost", "Kalkun", "Spinat"], image: "images/pizza_23.png" },
  { id: 24, name: "24. Tomat · Ost · Bresaola · Rucola · Parmesan", price: 103, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Bresaola", "Rucola", "Parmesan"], image: "images/pizza_24.png" },
  { id: 25, name: "25. Tomat · Ost · Rucola · Semidried Tomater", price: 90, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Rucola", "Semidried Tomater"], image: "images/pizza_25.png" },
  { id: 26, name: "26. Tomat · Ost · Basilikum · Kæmperejer", price: 98, category: "pizza", subCategory: "Gourmet", ingredients: ["Tomat", "Ost", "Tomat skiver", "Basilikum", "Kæmperejer"], image: "images/pizza_26.png" },
  { id: 27, name: "27. Ost · Kartofler · Rosmarin · Olivenolie", price: 85, category: "pizza", subCategory: "Gourmet", ingredients: ["Ost", "Kartofler", "Rosmarin", "Olivenolie"], image: "https://images.unsplash.com/photo-1588315029754-2dd089d36a11?q=80&w=600&auto=format&fit=crop" },
  { id: 28, name: "28. Trøffel · Mascarpone · Mozzarella...", price: 103, category: "pizza", subCategory: "Gourmet", ingredients: ["Trøffel", "Mascarpone", "Mozzarella", "Årstidens svampe", "Rucola", "Parmesan"], image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600&auto=format&fit=crop" },
  { id: 29, name: "29. Tomat · Ost · Peberfrugt · Løg...", price: 98, category: "pizza", subCategory: "Klassikere", ingredients: ["Tomat", "Ost", "Peberfrugt", "Artiskok", "Løg", "Champignon", "Soltørrede tomater"], image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop" },

  // PASTA
  { id: 30, name: "30. Lasagne", price: 80, category: "pasta", ingredients: ["Lasagne"], image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=600&auto=format&fit=crop" },
  { id: 31, name: "31. Dagens Pasta", price: 80, category: "pasta", ingredients: ["2 slags hver dag"], image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop" },

  // SANDWICH
  { id: 32, name: "32. Tomat · Ost · Laks · Salat · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Laks", "Salat", "Lys Dressing"], image: "https://images.unsplash.com/photo-1550507992-eb63ffee0224?q=80&w=600&auto=format&fit=crop" },
  { id: 33, name: "33. Tomat · Ost · Salami · Salat · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Salami", "Salat", "Lys Dressing"], image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" },
  { id: 34, name: "34. Tomat · Ost · Tun · Salat · Lys Dressing", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Tun", "Salat", "Lys Dressing"], image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=600&auto=format&fit=crop" },
  { id: 35, name: "35. Tomat · Ost · Kylling · Salat · Pesto", price: 70, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Kylling", "Salat", "Pesto"], image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?q=80&w=600&auto=format&fit=crop" },
  { id: 36, name: "36. Tomat · Ost · Salat · Parmaskinke · Pesto", price: 75, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Salat", "Parmaskinke", "Pesto"], image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop" },
  { id: 37, name: "37. Tomat · Ost · Bresaola · Salat · Pesto", price: 75, category: "sandwich", ingredients: ["Brød", "Tomat", "Ost", "Bresaola", "Salat", "Pesto"], image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=600&auto=format&fit=crop" },
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

const reviewsData = [
  { text: "Den bedste pizza i Næstved! Dejen er altid sprød og råvarerne er i top.", author: "Morten Jensen", stars: 5 },
  { text: "Hurtig levering og altid varm mad. Deres pasta er også fantastisk.", author: "Sofie Nielsen", stars: 5 },
  { text: "Autentisk italiensk smag. Man kan mærke de går op i kvalitet.", author: "Lars Hansen", stars: 5 }
]


// Cart & Filter State
let selectedItems = {} // Format: { id: quantity }
let searchQuery = ''
let currentCategory = 'alle'

const updateQuantity = (id, delta) => {
  const currentQty = selectedItems[id] || 0
  const newQty = Math.max(0, currentQty + delta)

  if (newQty === 0) {
    delete selectedItems[id]
  } else {
    selectedItems[id] = newQty
  }

  renderMenu()
  updateOrderBar()
}

const toggleItemSelection = (id) => {
  if (selectedItems[id]) {
    delete selectedItems[id]
  } else {
    selectedItems[id] = 1
  }
  renderMenu()
  updateOrderBar()
}

const updateOrderBar = () => {
  const bar = document.getElementById('order-bar')
  const countElement = document.querySelector('.order-count')
  const miniTotal = document.getElementById('mini-total')
  const note = document.getElementById('order-note')

  if (!bar || !countElement || !note || !miniTotal) return;

  const selectedIds = Object.keys(selectedItems)
  const totalItems = Object.values(selectedItems).reduce((sum, q) => sum + q, 0)

  // Calculate Total Price
  const totalPrice = selectedIds.reduce((sum, id) => {
    const item = menuData.find(m => m.id === parseInt(id))
    return sum + (item ? item.price * selectedItems[id] : 0)
  }, 0)

  if (totalItems > 0) {
    bar.classList.remove('hide')
    countElement.innerText = `${totalItems} valgt`
    miniTotal.innerText = `Total: ${totalPrice} kr.`

    const formattedLines = selectedIds
      .map(id => {
        const item = menuData.find(m => m.id === parseInt(id))
        const qty = selectedItems[id]
        if (!item) return null
        const match = item.name.match(/^(\d+)/)
        const nr = match ? `nr. ${match[1]}` : item.name
        return qty > 1 ? `${qty}x ${nr}` : nr
      })
      .filter(Boolean)
      .sort()

    if (formattedLines.length > 0) {
      note.innerHTML = `<strong>${formattedLines.join(', ')}</strong>`
    } else {
      note.innerText = "Tryk for at se din kurv..."
    }
  } else {
    bar.classList.add('hide')
  }

  // Update Cart if open
  const isCartOpen = !document.getElementById('cart-drawer').classList.contains('hide')
  if (isCartOpen) {
    bar.classList.add('hide') // Hide mini bar when drawer is open
    renderCart()
  }
}

const renderCart = () => {
  const container = document.getElementById('cart-items')
  const totalElement = document.getElementById('cart-total-amount')
  if (!container || !totalElement) return;

  const selectedIds = Object.keys(selectedItems)
  if (selectedIds.length === 0) {
    container.innerHTML = '<p style="text-align: center; margin-top: 3rem; color: var(--text-muted);">Din kurv er tom...</p>'
    totalElement.innerText = '0 kr.'
    return
  }

  let total = 0
  const orderList = []

  container.innerHTML = selectedIds.map(id => {
    const item = menuData.find(m => m.id === parseInt(id))
    if (!item) return ''
    const qty = selectedItems[id]
    total += item.price * qty

    const match = item.name.match(/^(\d+)\.\s*(.*)/)
    const displayName = match ? match[2] : item.name
    const nr = match ? `nr. ${match[1]}` : item.name

    orderList.push(qty > 1 ? `${qty}x ${nr}` : nr)

    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${displayName}</h4>
          <p>${nr} · ${item.price} kr. pr stk.</p>
          <span class="cart-item-price">${item.price * qty} kr.</span>
        </div>
        <div class="quantity-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `
  }).join('')

  // Add Call Script Section
  const scriptHtml = `
    <div class="call-script-box glass-panel" style="margin-top: 2rem; padding: 1.5rem; border: 1px dashed var(--it-green); background: rgba(0, 140, 69, 0.05);">
      <p style="font-size: 0.75rem; text-transform: uppercase; color: var(--it-green); margin-bottom: 0.6rem; font-weight: 800; letter-spacing: 0.05em;">Sig dette i telefonen:</p>
      <p style="font-size: 1.05rem; line-height: 1.4; color: white; font-family: var(--font-main);">"Hej, jeg vil gerne bestille <strong>${orderList.join(', ')}</strong>"</p>
    </div>
  `
  container.innerHTML += scriptHtml

  totalElement.innerText = `${total} kr.`
}

const openCart = () => {
  document.getElementById('cart-drawer').classList.remove('hide')
  document.getElementById('order-bar').classList.add('hide')
  renderCart()
}

const closeCart = () => {
  document.getElementById('cart-drawer').classList.add('hide')
  updateOrderBar() // Show mini bar again if items exist
}

const renderMenuItem = (item, index) => {
  let displayName = item.name;
  let badgeHtml = '';
  const match = item.name.match(/^(\d+)\.\s*(.*)/);
  if (match) {
    badgeHtml = `<span style="background: rgba(255,87,34,0.15); color: var(--primary); padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 800; border: 1px solid rgba(255,87,34,0.3); letter-spacing: 0.05em;">Nr. ${match[1]}</span>`;
    displayName = match[2];
  } else {
    badgeHtml = `<span style="background: rgba(255,255,255,0.05); color: var(--text-muted); padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; border: 1px solid var(--glass-border); text-transform: uppercase;">${item.category}</span>`;
  }

  const qty = selectedItems[item.id] || 0;
  const isSelected = qty > 0;

  return `
    <div class="glass-panel pizza-card ${isSelected ? 'selected' : ''}" style="${window.innerWidth > 768 ? `animation-delay: ${index * 0.05}s` : ''}">
      <div class="image-container">
        <img src="${item.image}" alt="${displayName}" class="pizza-image" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop'">
        ${isSelected ? `
          <div class="quantity-controls">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        ` : `
          <button class="select-btn" onclick="updateQuantity(${item.id}, 1)">
            + Tilføj
          </button>
        `}
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
        <button onclick="updateQuantity(${item.id}, 1)" class="btn-primary ${isSelected ? 'active' : ''}" style="padding: 12px 24px; font-size: 0.95rem; border-radius: 12px;">
          ${isSelected ? 'Tilføj én til' : 'Vælg'}
        </button>
      </div>
    </div>
  `;
}

// Menu Rendering
const renderMenu = () => {
  const grid = document.querySelector('#pizza-grid')
  if (!grid) return;

  // Apply filters
  let filteredItems = currentCategory === 'alle' ? menuData : menuData.filter(item => item.category === currentCategory)

  if (searchQuery) {
    const query = searchQuery.toLowerCase().trim()
    filteredItems = filteredItems.filter(item => {
      const numMatch = item.id.toString() === query || item.name.toLowerCase().startsWith(query)
      return numMatch ||
        item.name.toLowerCase().includes(query) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(query))
    })
  }

  if (filteredItems.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1;">
        <span>🔍</span>
        <p>Vi fandt desværre ikke noget der matcher din søgning.</p>
        <button class="btn-secondary" style="margin-top: 1rem;" onclick="clearSearch()">Nulstil søgning</button>
      </div>
    `
    return
  }

  // Handle Featured Favorites Slider
  let featuredHtml = '';
  if ((currentCategory === 'alle' || currentCategory === 'pizza') && searchQuery === '') {
    const featuredList = menuData.filter(item => [1, 10, 12, 18, 26].includes(item.id));
    featuredHtml = `
      <div class="featured-section reveal" style="grid-column: 1 / -1; margin-bottom: 3rem;">
        <h3 class="section-divider">Butikkens <span>Favoritter</span></h3>
        <div class="featured-slider">
          ${featuredList.map(item => {
      const qty = selectedItems[item.id] || 0;
      return `
              <div class="featured-card glass-panel ${qty > 0 ? 'selected' : ''}">
                <div class="featured-image-container">
                  <img src="${item.image}" alt="${item.name}">
                  <div class="featured-badge">TOPVALG</div>
                  ${qty > 0 ? `
                    <div class="quantity-controls overlay">
                      <button class="qty-btn" onclick="event.stopPropagation(); updateQuantity(${item.id}, -1)">−</button>
                      <span class="qty-num">${qty}</span>
                      <button class="qty-btn" onclick="event.stopPropagation(); updateQuantity(${item.id}, 1)">+</button>
                    </div>
                  ` : `
                    <button class="select-btn" onclick="updateQuantity(${item.id}, 1)">+ Tilføj</button>
                  `}
                </div>
                <div class="featured-info">
                  <h4>${item.name}</h4>
                  <p>${item.ingredients.join(', ')}</p>
                  <span class="featured-price">${item.price} kr.</span>
                </div>
              </div>
            `}).join('')}
        </div>
      </div>
    `;
  }

  // Grouped Rendering for Pizza
  if (currentCategory === 'pizza' && searchQuery === '') {
    const groups = ['Klassikere', 'Gourmet', 'Specialiteter'];
    grid.innerHTML = featuredHtml + groups.map(group => {
      const groupItems = filteredItems.filter(item => item.subCategory === group);
      if (groupItems.length === 0) return '';
      return `
        <div class="menu-group-header reveal">
          <h3>${group}</h3>
          <div class="header-line"></div>
        </div>
        ${groupItems.map((item, index) => renderMenuItem(item, index)).join('')}
      `;
    }).join('');
  } else {
    grid.innerHTML = featuredHtml + filteredItems.map((item, index) => renderMenuItem(item, index)).join('');
  }

  // Add reveal observer
  const cards = grid.querySelectorAll('.pizza-card, .featured-card, .menu-group-header')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal')
      }
    })
  }, { threshold: 0.1 })
  cards.forEach(card => observer.observe(card))
}

window.toggleItemSelection = toggleItemSelection;
window.updateQuantity = updateQuantity;
window.openCart = openCart;
window.closeCart = closeCart;
window.handleSearch = (val) => {
  searchQuery = val;
  const clearBtn = document.querySelector('.clear-search');
  if (clearBtn) clearBtn.classList.toggle('hide', !val);
  renderMenu();
};
window.clearSearch = () => {
  const input = document.getElementById('menu-search');
  if (input) input.value = '';
  window.handleSearch('');
};
window.filterMenu = (cat) => {
  currentCategory = cat;
  document.querySelectorAll('.category-card').forEach(card => {
    card.classList.toggle('active', card.outerHTML.includes(`'${cat}'`));
  });
  renderMenu();
};

// Review Slider Logic
const initReviewSlider = () => {
  const track = document.getElementById('review-track')
  if (!track) return;

  const allReviews = [...reviewsData, ...reviewsData, ...reviewsData] // Duplicate for seamless loop

  track.innerHTML = allReviews.map(review => `
    <div class="review-card glass-panel">
      <div class="review-content">
        <div class="stars">${'★'.repeat(review.stars)}</div>
        <p class="review-text">"${review.text}"</p>
      </div>
      <div class="review-author">${review.author}</div>
    </div>
  `).join('')
}

initReviewSlider()

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
    if (text) text.innerText = "Bager dejen sprød...";
  }, 500);

  setTimeout(() => {
    if (text) {
      text.innerText = "Klar til servering!";
      text.style.color = "var(--primary)";
    }
  }, 1200);

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        renderMenu(); // Initial render after loader
      }, 800);
    }
  }, 1600);
});

// Back to Top Visibility
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.classList.toggle('hide', window.scrollY < 400);
  }
});
