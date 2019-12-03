// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class BookModule { }

export class Book {
  photo: string;
  synopsis: string;
  constructor(public title: string, public author: string) {

  }
}
