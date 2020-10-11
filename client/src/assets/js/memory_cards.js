export default function (words) {
  // Создать новый js файл
  const cardsData = words.map((word) => word.word);
  const cardsContainer = document.getElementById('cards-container');
  const currentEl = document.getElementById('current');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  // Keep track of currrent card
  let currentActiveCard = 0;

  // Store DOM cards
  const cardsEl = [];

  // Create all cards
  function createCards() {
    cardsContainer && (cardsContainer.innerHTML = '');
    cardsData &&
      cardsData.forEach((word, index) => {
        createCard(word, index);
      });
  }

  // Create a single card in the DOM
  function createCard(word, index) {
    const card = document.createElement('div');
    card.classList.add('game-card');

    if (index === 0) {
      card.classList.add('card-active');
    }

    card.innerHTML = `
   <div class="inner-card">
     <div class="inner-card-front">
       <p>
         ${word.eng}
       </p>
     </div>
     <div class="inner-card-back">
       <p>
         ${word.rus}
       </p>
     </div>
   </div>
   `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);
    updateCurrentText();
  }
  // Show number of cards
  function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
  }

  createCards();
  // Event Listeners
  // next btn
  nextBtn &&
    nextBtn.addEventListener('click', () => {
      cardsEl[currentActiveCard].className = 'game-card left';

      currentActiveCard = currentActiveCard + 1;

      if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
      }

      cardsEl[currentActiveCard].className = 'game-card card-active';

      updateCurrentText();
    });
  // prev btn
  prevBtn &&
    prevBtn.addEventListener('click', () => {
      cardsEl[currentActiveCard].className = 'game-card';

      currentActiveCard = currentActiveCard - 1;

      if (currentActiveCard < 0) {
        currentActiveCard = 0;
      }

      cardsEl[currentActiveCard].className = 'game-card card-active';

      updateCurrentText();
    });
}
