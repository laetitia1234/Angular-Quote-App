// export class Myquotes {
//     id: number;
//     quote: string;
//     author:string;
//     vote:number;
//     download:number;
// }
export class Myquotes {
    showDescription: boolean;
    constructor(public id: number,public   quote: string,public author:string,public vote:number,public download:number,public completeDate: Date){
      this.showDescription=false;
    }
  }