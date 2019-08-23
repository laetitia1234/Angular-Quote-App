import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
