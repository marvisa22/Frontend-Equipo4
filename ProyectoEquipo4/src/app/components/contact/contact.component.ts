import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  assunto: string = '';
  message: string = '';


  sendMessage(): void {
    // Add the logic to send the message here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Asunto:', this.assunto);
    console.log('Message:', this.message);

    // Reset the form fields
    this.name = '';
    this.email = '';
    this.assunto = '';
    this.message = '';
  }
}
