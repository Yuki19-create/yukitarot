class TarotDeck {
    constructor() {
        this.cards = [...ALL_CARDS];
        this.shuffle();
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCards(number) {
        if (number > this.cards.length) {
            this.cards = [...ALL_CARDS];
            this.shuffle();
        }
        const drawnCards = this.cards.slice(0, number);
        this.cards = this.cards.slice(number);
        return drawnCards.map(card => ({
            ...card,
            isReversed: Math.random() < 0.5
        }));
    }
}

class TarotReading {
    constructor() {
        this.deck = new TarotDeck();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('singleCard').addEventListener('click', () => this.drawSingleCard());
        document.getElementById('threeCards').addEventListener('click', () => this.drawThreeCards());
        document.getElementById('reset').addEventListener('click', () => this.reset());
    }

    createCardElement(card, position = '') {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        
        // 添加卡牌正逆位旋转效果
        if (card.isReversed) {
            cardDiv.style.transform = 'rotate(180deg)';
        }

        // 添加卡牌图片
        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';
        cardImage.style.backgroundImage = `url('images/${card.image}')`;
        cardDiv.appendChild(cardImage);

        // 添加翻转动画效果
        cardDiv.style.opacity = '0';
        cardDiv.style.transform = `scale(0.8) rotate(${card.isReversed ? "180deg" : "0deg"})`;
        setTimeout(() => {
            cardDiv.style.transition = 'all 0.5s ease-out';
            cardDiv.style.opacity = '1';
            cardDiv.style.transform = `scale(1) rotate(${card.isReversed ? "180deg" : "0deg"})`;
        }, 100);

        return cardDiv;
    }

    displayMeaning(cards, positions = []) {
        const meaningArea = document.getElementById('meaningArea');
        meaningArea.innerHTML = '';

        cards.forEach((card, index) => {
            const meaning = document.createElement('div');
            meaning.className = 'card-meaning';
            meaning.innerHTML = `
                <div class="meaning-header">
                    <h3>${positions[index] || ''} - ${card.name}</h3>
                    <p class="position-text">${card.isReversed ? '逆位' : '正位'}</p>
                </div>
                <p class="meaning-text">${card.isReversed ? card.reversedMeaning : card.uprightMeaning}</p>
            `;
            meaningArea.appendChild(meaning);
        });
    }

    drawSingleCard() {
        const cardDisplay = document.getElementById('cardDisplay');
        cardDisplay.innerHTML = '';

        const cards = this.deck.drawCards(1);
        const cardElement = this.createCardElement(cards[0], POSITIONS.SINGLE);
        cardDisplay.appendChild(cardElement);

        this.displayMeaning(cards, [POSITIONS.SINGLE]);
    }

    drawThreeCards() {
        const cardDisplay = document.getElementById('cardDisplay');
        cardDisplay.innerHTML = '';

        const cards = this.deck.drawCards(3);
        const positions = [POSITIONS.PAST, POSITIONS.PRESENT, POSITIONS.FUTURE];

        cards.forEach((card, index) => {
            const cardElement = this.createCardElement(card, positions[index]);
            cardDisplay.appendChild(cardElement);
        });

        this.displayMeaning(cards, positions);
    }

    reset() {
        this.deck = new TarotDeck();
        document.getElementById('cardDisplay').innerHTML = '';
        document.getElementById('meaningArea').innerHTML = '';
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new TarotReading();
});
