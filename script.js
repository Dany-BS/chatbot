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
                botMessageDiv.className = 'bot-message';
                messagesDiv.appendChild(botMessageDiv);
                
                // Split the response into words
                const responseWords = botResponses[word].split(" ");
    
                // Function to add each word with a delay
                let i = 0;
                function addWord() {
                    if (i < responseWords.length) {
                        
                        botMessageDiv.textContent += responseWords[i] + " ";
                        i++;
                        setTimeout(addWord, 200); // Adjust delay as needed
                    }
                }
    
                addWord(); // Start adding words
                responseFound = true;
                break;
            }
        }
    
        if (!responseFound) {
            const botMessageDiv = document.createElement("div");
            botMessageDiv.className = 'bot-message';
            messagesDiv.appendChild(botMessageDiv);
    
            // Split the default response into words
            const responseWords = "BOT: I'm not sure how to respond to that. Can you try asking something else?".split(" ");
    
            // Function to add each word with a delay
            let i = 0;
            function addWord() {
                if (i < responseWords.length) {
                    botMessageDiv.textContent += responseWords[i] + " ";
                    i++;
                    setTimeout(addWord, 200); // Adjust delay as needed
                }
            }
    
            addWord(); // Start adding words
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
