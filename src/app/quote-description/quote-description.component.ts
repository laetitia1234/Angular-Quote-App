import { Component, OnInit,Input,Output,EventEmitter, Directive } from '@angular/core';
import { Myquotes } from '../myquotes';
@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})

export class QuoteDescriptionComponent implements OnInit {
  @Input() myquotes: Myquotes;
  @Output() isComplete = new EventEmitter<boolean>();
  
  myquotesComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  myquotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  
  // vote quote
  votequote = 0;
    voteshow = true;


    voteShow(){
     
         this.voteshow = true;
         return this.votequote= this.votequote+ 1;
    }
    // download vote
    downloadquote = 0;
    downloadshow = true;

    downloadShow(){
         this.downloadshow = true;
         return this.downloadquote= this.downloadquote+ 1;
    
          // return this.votequote= this.votequote- 1;
    
     // 
         
    }
    
  constructor() { }

  ngOnInit() {
  }

}
