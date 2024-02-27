document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");
    const messagesDiv = document.querySelector(".messages");

    function displayUserMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "USER : " + message;
        messageDiv.className = 'user-message';
    
        messagesDiv.appendChild(messageDiv);
    
    
    
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
