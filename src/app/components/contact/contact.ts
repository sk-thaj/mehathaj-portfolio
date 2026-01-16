import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  loading = false;
  submitted = false;

  successMsg = '';
  errorMsg = '';

  contact = {
    name: '',
    email: '',
    message: ''
  };

  private readonly SERVICE_ID = 'service_xf7nvl9';
  private readonly TEMPLATE_ID = 'template_iom5fo6';
  private readonly PUBLIC_KEY = 'wb5x9zCqSeZaMgk_K';

  async submitForm(form: NgForm) {
    this.submitted = true;
    this.successMsg = '';
    this.errorMsg = '';

    // ✅ If form invalid → show message
    if (form.invalid) {
      this.errorMsg = 'Please fill all the required fields.';
      return;
    }

    this.loading = true;

    try {
      const params = {
          user_name: this.contact.name,
          user_email: this.contact.email,
          subject: 'Portfolio Contact Form',
          message: this.contact.message
        };

      await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, params, this.PUBLIC_KEY);

      this.successMsg = 'Message sent successfully!';
      this.errorMsg = '';
      this.loading = false;

      // reset
      this.submitted = false;
      this.contact = { name: '', email: '', message: '' };
      form.resetForm();
    } catch (e) {
      console.error(e);
      this.errorMsg = 'Failed to send message. Please try again.';
      this.loading = false;
    }
  }
}
