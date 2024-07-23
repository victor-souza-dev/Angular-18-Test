import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.sass'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
