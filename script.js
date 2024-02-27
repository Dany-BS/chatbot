document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");
    const messagesDiv = document.querySelector(".messages");

    function displayUserMessage(message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "USER : " + message;
        messageDiv.className = 'user-message';
        // Append the new message div to the messages container
        messagesDiv.appendChild(messageDiv);
    
        // No need for setTimeout to change opacity if CSS animation is correctly set up
        // The CSS animation should automatically play when the element is added to the document
    
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Ensure the new message is visible
    }
    
    

    sendButton.addEventListener("click", function() {
        const message = userInput.value.trim();
        if (message) {
            displayUserMessage(message);
            userInput.value = ''; // Clear the input field after sending
        }
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); // Avoid form submission behavior
            sendButton.click();
        }
    });
});
