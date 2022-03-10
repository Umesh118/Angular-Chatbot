import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user:any;
  message:Message;
  messages :Message[] = [];

  @ViewChild('chatlist', {static:true}) chatList!:ElementRef;
  @ViewChildren(ChatComponent, {read:ElementRef}) chatItems!: QueryList<ChatComponent>;

  constructor(
    private router:Router,
    private chatService: ChatService
  ) {
    this.message = new Message('',new Date(), 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to chatbot universe', new Date(), 'assets/images/bot.png')
    ];
   }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log(this.user, 'logged in user');
    if(!this.user){
      this.router.navigateByUrl('');
    }
  }

  ngAfterViewinit(){
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    })
  }

  sendMessage(){
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.chatService.getResponse(this.message.content).subscribe((res) => {
      console.log(res);
      this.messages.push(
        new Message(res.result.fulfillment.speech, res.timestamp, 'assets/images/bot.png')
      );
      this.scrollToBottom();
    });

    this.message = new Message('', new Date(), 'assets/images/user.png');
  }

  private scrollToBottom():void{
    try{
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    }
    catch(err){
      console.log('Could not find the chatList Element');
    }
  }

}
