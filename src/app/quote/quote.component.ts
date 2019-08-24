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
  votequote = 0;
  voteshow = true;

  voteShow(){
       this.voteshow = true;
       return this.votequote= this.votequote+ 1;
  }
  // preNum:number
  // lastNum:number
  // countere:number

  toggleDetails(index){
    this. myquotes[index].showDescription = !this. myquotes[index].showDescription;
  }

  addNewMyquotes(myquotes){
    let myquotesLength = this.myquotes.length;
    myquotes.id =myquotesLength+1;
    myquotes.completeDate = new Date(myquotes.completeDate)
    this.myquotes.push(myquotes)



  }
  // // /   preNum:number
  // // lastNum:number
  // // counter:number


  // upvote(i){
  //     this.myquotes[i].upvotes+=1
  // }
  // downvote(i){
  //   this.myquotes[i].downvotes+=1
  // }
  // // delQuote(i){
  // //   this.quotes.splice(i, 1)
  // // }
  // highestUpvote(){
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for(this.countere=0 ; this.countere < this.myquotes.length; this.countere++) {
  //     this.lastNum = this.myquotes[this.countere].upvotes;
  //     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  //   }
  //   return  this.preNum
  // }

  
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
  

  constructor() { }

  ngOnInit() {
  }

}
