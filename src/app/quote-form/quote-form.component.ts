import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Myquotes } from '../myquotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newMyquotes = new Myquotes(0,"","",0,0,new Date());
  @Output() addMyquotes = new EventEmitter<Myquotes>();

  submit(){
this.addMyquotes.emit(this.newMyquotes);
    
  }
  // submit(){
  //   this.Quote = new Myquotes( this.myquotesauthor, this.myquotesquote)
   
  //   this.quotesauthor = ''
  //   this.quotePublisher = ''
  //   this.emitQuote.emit(this.theQuote)
  //   this.addMyquotes.emit(this.newMyquotes);
  // }
  constructor() { }

  ngOnInit() {
  }

}
