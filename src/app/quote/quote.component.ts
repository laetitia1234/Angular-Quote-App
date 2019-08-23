import { Component, OnInit } from '@angular/core';
import {Myquotes} from '../myquotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  myquotes: Myquotes[] = [
    new Myquotes(1, 'if it does not challenge it will not change you ','laetitia',0,0,new Date(2019,3,14)),
    new Myquotes(2,'trust is earned when actions meet words','chris butler',0,0,new Date(2019,3,14)),
    
  ];
  addNewMyquotes(myquotes){
    let myquotesLength = this.myquotes.length;
    myquotes.id =myquotesLength+1;
    myquotes.completeDate = new Date(myquotes.completeDate)
    this.myquotes.push(myquotes)
  }
  toggleDetails(index){
    this. myquotes[index].showDescription = !this. myquotes[index].showDescription;
  }
  // completeMyquotes(isComplete, index){
  //   if (isComplete) {
  //     this.myquotes.splice(index,1);
  //   }
  // }
    // deleteMyquotes(isComplete, index){
    //   if(isComplete){

    //     let toDelete=confirm('are you sure to delete  ${this.myquotes[index].quote}?')
    //     if (toDelete){
    //       this.myquotes.splice(index,1)
    //     }

    //   }}
  deleteMyquotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.myquotes[index].quote}?`)

      if (toDelete){
        this.myquotes.splice(index,1)
      }
    }
  }
  
//   preNum:number
//   lastNum:number
//   counter:number

//   addMyquotes(emittedMyquotes){
//     this.myquotes.push(emittedMyquotes)
//   }

//   pvote(i){
//       this.myquotes[i].vote+=1
//   }
//  pdwnload(i){
//     this.myquotes[i].download+=1
//   }
//   delQuote(i){
//     this.myquotes.splice(i, 1)
//   }
//   highestUpvote(){
//     this.preNum = 0
//     this.lastNum = 0

//     for(this.counter=0 ; this.counter < this.myquotes.length; this.counter++) {
//       this.lastNum = this.myquotes[this.counter].vote;
//       if(this.lastNum > this.preNum){this.preNum = this.lastNum}
//     }
//     return  this.preNum
//   }
  constructor() { }

  ngOnInit() {
  }

}
