import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup

  constructor(
    private router: Router,
    private booksService: BooksService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: '',
      photo: ''
    })
  }

    onSaveBooks() {
      const title = this.bookForm.get('title').value
      const author = this.bookForm.get('author').value
      const synopsis = this.bookForm.get('synopsis').value
      const photo = this.bookForm.get('photo').value

      const newBook = new Book(title, author)
      newBook.synopsis = synopsis
      newBook.photo = photo

      this.booksService.createNewBook(newBook)
      this.router.navigate(['/books'])
    }
  
}
