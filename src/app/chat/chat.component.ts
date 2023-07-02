import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  queryFormGroup!: FormGroup;
  messages=[
    { role:"system",content:"you are a helpful assistant."  }
  ];
  result : any;
  constructor(private fb:FormBuilder,private httpClient : HttpClient){

  }
  ngOnInit(){
    this.queryFormGroup = this.fb.group({
      query : this.fb.control("")
    });
    // ngOnInit(): void{
    //   this.queryFormGroup = this.fb.group({
    //     query : this.fb.control("")
    //   });
  }
  handleAskGPT(){ 
    let url ="https://api.openai.com/v1/chat/completions";
    let httpHeaders= new HttpHeaders().set("Authorisation","Bearer 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");

    let payload={
      model:"ggpt-3.5-turbo",
      messages:this.messages
    }

    this.httpClient.post(url,payload,{headers:httpHeaders})
    .subscribe({
      next:(resp)=>{
          this.result=resp;
      },
      error : (err)=>{

      }
    })

    // this.httpClient.post
  }
}
