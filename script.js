// Dados dinâmicos para pizzas
const pizzas = [
  {
    id: 1,
    name: "Margherita 3D",
    description: "Molho de tomate, mussarela de búfala, tomate fresco e manjericão orgânico.",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    badge: "Mais Pedida"
  },
  {
    id: 2,
    name: "Pepperoni Holográfico",
    description: "Molho especial, mussarela premium e pepperoni artesanal em fatias finas.",
    price: 54.90,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    badge: "Destaque"
  },
  {
    id: 3,
    name: "Calabresa Neo",
    description: "Molho de tomate, mussarela, calabresa artesanal e cebola caramelizada.",
    price: 52.90,
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
    badge: ""
  },
  {
    id: 4,
    name: "Frango Quântico",
    description: "Molho de tomate, mussarela, frango desfiado e catupiry gourmet.",
    price: 57.90,
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
    badge: "Especial"
  },
  {
    id: 5,
    name: "Portuguesa Cósmica",
    description: "Molho de tomate, mussarela, presunto premium, ovos, azeitona e pimentão.",
    price: 56.90,
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de",
    badge: ""
  },
  {
    id: 6,
    name: "4 Queijos Dimensionais",
    description: "Molho de tomate, mussarela, provolone, parmesão e gorgonzola nobre.",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796",
    badge: ""
  }
];

// Dados para galeria
const galleryItems = [
  {
    title: "Pepperoni Holográfico",
    description: "Sabores que transcendem dimensões",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a"
  },
  {
    title: "Espaço Futurista",
    description: "Design minimalista com tecnologia",
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1"
  },
  {
    title: "Forno Hightech",
    description: "Tradição com precisão tecnológica",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
  },
  {
    title: "Vegetariana Quântica",
    description: "Ingredientes orgânicos selecionados",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828"
  }
];

// Dados para depoimentos
const testimonials = [
  {
    name: "Carlos Silva",
    role: "Tech Influencer",
    content: "A pizza holográfica foi uma experiência sensorial incrível! O sabor superou todas as expectativas e a apresentação é de outro mundo.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Amanda Costa",
    role: "Food Blogger",
    content: "A combinação perfeita entre tradição e tecnologia. A massa tem a crocância ideal e os ingredientes são frescos e saborosos. Recomendo!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Roberto Mendes",
    role: "Cliente Frequente",
    content: "A experiência na Pizzaria Frontier é única! O ambiente futurista e as pizzas inovadoras criaram uma memória inesquecível para minha família.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  }
];

// Gerar cardápio
function renderMenu() {
  const menuContainer = document.querySelector('.menu .grid');
  menuContainer.innerHTML = '';

  pizzas.forEach(pizza => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="menu-image">
        <img src="${pizza.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="${pizza.name}" loading="lazy">
        ${pizza.badge ? `<div class="menu-badge">${pizza.badge}</div>` : ''}
      </div>
      <div class="menu-content">
        <h3>${pizza.name}</h3>
        <div class="menu-description">${pizza.description}</div>
        <div class="menu-footer">
          <div class="menu-price">R$ ${pizza.price.toFixed(2)}</div>
          <button class="add-to-cart" data-id="${pizza.id}" data-name="${pizza.name}" data-price="${pizza.price}">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    menuContainer.appendChild(card);
  });
}

// Gerar galeria
function renderGallery() {
  const galleryContainer = document.querySelector('.gallery-grid');
  galleryContainer.innerHTML = '';

  galleryItems.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <div class="gallery-image">
        <img src="${item.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="${item.title}" loading="lazy">
      </div>
      <div class="gallery-overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    galleryContainer.appendChild(galleryItem);
  });
}

// Gerar depoimentos
function renderTestimonials() {
  const testimonialsContainer = document.querySelector('.testimonials .grid');
  testimonialsContainer.innerHTML = '';

  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-content">
        <i class="fas fa-quote-left"></i>
        <p>"${testimonial.content}"</p>
      </div>
      <div class="testimonial-author">
        <div class="author-avatar">
          <img src="${testimonial.avatar}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" alt="${testimonial.name}" loading="lazy">
        </div>
        <div>
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
        </div>
      </div>
    `;
    testimonialsContainer.appendChild(card);
  });
}

// Pré-loader
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
  }, 800);
  
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1300);
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const backToTop = document.querySelector('.back-to-top');
  
  if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
  
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Botão voltar ao topo
document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Carrinho de compras
let cart = [];
const cartModal = document.getElementById('cartModal');
const overlay = document.getElementById('overlay');
const openCartBtn = document.getElementById('openCart');
const closeCartBtn = document.getElementById('closeCart');
const continueBtn = document.getElementById('continueShopping');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');

// Abrir carrinho
openCartBtn.addEventListener('click', () => {
  cartModal.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

// Fechar carrinho
const closeCart = () => {
  cartModal.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = 'auto';
};

closeCartBtn.addEventListener('click', closeCart);
continueBtn.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

// Adicionar itens ao carrinho
document.addEventListener('click', function(e) {
  if (e.target.closest('.add-to-cart')) {
    const button = e.target.closest('.add-to-cart');
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    
    // Verifica se o item já está no carrinho
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id,
        name,
        price,
        quantity: 1
      });
    }
    
    updateCart();
    
    // Feedback visual
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.backgroundColor = '#2ecc71';
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-plus"></i>';
      button.style.backgroundColor = '';
    }, 1000);
  }
});

// Atualizar carrinho
function updateCart() {
  cartItemsEl.innerHTML = '';
  let total = 0;
  let count = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    count += item.quantity;
    
    const cartItemEl = document.createElement('div');
    cartItemEl.classList.add('cart-item');
    cartItemEl.innerHTML = `
      <div class="cart-item-image">
        <img src="https://via.placeholder.com/80?text=Pizza" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn minus" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn plus" data-id="${item.id}">+</button>
          <button class="remove-item" data-id="${item.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    
    cartItemsEl.appendChild(cartItemEl);
  });
  
  // Atualizar total e contador
  cartTotalEl.textContent = `R$ ${total.toFixed(2)}`;
  cartCountEl.textContent = count;
  
  // Adicionar eventos aos botões de quantidade
  document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const item = cart.find(item => item.id === id);
      
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart = cart.filter(item => item.id !== id);
      }
      
      updateCart();
    });
  });
  
  document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const item = cart.find(item => item.id === id);
      item.quantity++;
      updateCart();
    });
  });
  
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      cart = cart.filter(item => item.id !== id);
      updateCart();
    });
  });
}

// Validação de formulário
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Simular envio
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contactForm.reset();
  });
}

// Menu Mobile
const mobileMenu = document.getElementById('mobileMenu');
const openMobileMenu = document.getElementById('openMobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = 'auto';
});

// Inicializar elementos dinâmicos
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderGallery();
  renderTestimonials();
});
