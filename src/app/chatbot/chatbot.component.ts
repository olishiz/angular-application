import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit{

  chatMessages: { text: string, sender: string }[] = [];
  inputMessage: string = '';

  constructor() {
  }

  ngOnInit() {
    // Initialize chat messages, e.g., load previous chat history
  }

  sendMessage() {
    const newMessage = {
      text: this.inputMessage,
      sender: 'user'
    };
    this.chatMessages.push(newMessage); // Add user's message to chat messages
    this.inputMessage = ''; // Clear input field
    this.getBotResponse(newMessage.text); // Send request to chat bot and receive response
  }

  getBotResponse(message: string) {
    // Simulate receiving response from chat bot
    setTimeout(() => {
      const newMessage = {
        text: `Bot response for: "${message}"`,
        sender: 'bot'
      };
      this.chatMessages.push(newMessage); // Add bot's response to chat messages
    }, 1000);
  }

}

