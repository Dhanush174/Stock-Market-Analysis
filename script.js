function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    appendMessage(userInput, 'user');

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage(botResponse, 'bot');
    }, 1000);

    document.getElementById('userInput').value = '';
}

function appendMessage(text, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender);
    messageContainer.textContent = text;

    const chatMessages = document.getElementById('chatMessages');
    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userInput) {
    // Check if user input is "haii"
    if (userInput.toLowerCase() === 'what is the price of itc') {
        return 'The current price of itc stock is $440';
    }
    else if(userInput.toLowerCase() === 'what is the price of TCS'||'what is the price of tcs') {
        return 'The current price of TCS stock is $1505';
    }
    else if(userInput.toLowerCase() === 'is it right time to buy Natco share') {
        return 'It not possiable to say which is the right time to guy a stock';
    }
    else if(userInput.toLowerCase() === 'How to invest in top 50 company in india') {
        return 'Nifty 50 is used to invest in top 50 company in india.so you should choose Nifty 50';
    }
    // Default response for other inputs
    return 'This is a static response';
}
