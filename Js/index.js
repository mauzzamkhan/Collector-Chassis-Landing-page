console.log('hi mauzzam')
const cardData = [
    { className: "audi-tt-rs", title: "2012 Audi TT RS" },
    { className: "bmw-m3", title: "1995 BMW M3" },
    { className: "bmw-m5-dinan", title: "1991 BMW M5 Dinan" },
    { className: "bmw-323i-alpina-b6", title: "981 BMW 323i Alpina B6 2.8" },
    { className: "bmw-m3-jahre-edition", title: "2023 BMW M3 Competition Jahre Edition 1 of 500" },
    { className: "bmw-m3-track-car", title: "1997 BMW M3 Modified Track Car" },
    { className: "bmw-323i", title: "1996 BMW 323i" },
    { className: "bmw-330ci", title: "005 BMW 330Ci" },
  ];
  
  const cardsWrapper = document.querySelector(".cards-wrapper");
  console.log(cardsWrapper,"cardsWrapper")


cardData.forEach((card) => {
    const div = document.createElement("div");
    div.className = `card ${card.className}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";
    
    contentDiv.innerHTML = `<h6>${card.title}</h6>`;
    
    div.appendChild(contentDiv);
    
    cardsWrapper.appendChild(div);
  });
  
//   document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('.menu-toggle').addEventListener('click', () => {
//       const navItems = document.querySelector('.nav-items');
//       navItems.style.display = navItems.style.display === 'flex' ? 'none' : 'flex';
//     });
//   });
  
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');
  
    menuToggle.addEventListener('click', () => {
      navItems.classList.toggle('active'); // Toggle the "active" class
    });
  });
  
  