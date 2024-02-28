const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "admission": "Admission is open from March to July every year. For more details, visit our admissions page.",
    "courses": "We offer a variety of courses in Engineering, Science, and Arts. Which field are you interested in?",
    "bye": "Goodbye! Feel free to ask more questions anytime."
    // Add more keywords and responses as needed
};

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");
    const messagesDiv = document.querySelector(".messages");

     
    function displayUserMessage(message) {
        // Existing code to display user message
        const userMessageDiv = document.createElement("div");
        userMessageDiv.textContent = "USER : " + message;
        userMessageDiv.className = 'user-message';
        messagesDiv.appendChild(userMessageDiv);
    
        // Find and display bot response
        displayBotResponse(message);
    }
    
  
    function displayBotResponse(userInput) {
        const words = userInput.toLowerCase().split(" ");
        let responseFound = false;
    
        for (const word of words) {
            if (botResponses[word]) {
                const botMessageDiv = document.createElement("div");
                botMessageDiv.textContent = "BOT : " + botResponses[word];
                botMessageDiv.className = 'bot-message'; // Use the 'bot-message' class for bot responses
                messagesDiv.appendChild(botMessageDiv);
                responseFound = true;
                break;
            }
        }
    
        if (!responseFound) {
            const botMessageDiv = document.createElement("div");
            botMessageDiv.textContent = "BOT : I'm not sure how to respond to that. Can you try asking something else?";
            botMessageDiv.className = 'bot-message'; // Also use 'bot-message' for default responses
            messagesDiv.appendChild(botMessageDiv);
        }
    
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    

    sendButton.addEventListener("click", function() {
        const message = userInput.value.trim();
        if (message) {
            displayUserMessage(message);
            userInput.value = '';
        }
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); 
            sendButton.click();
        }
    });
});
