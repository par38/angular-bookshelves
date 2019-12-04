import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../models/book.model'
import { Subscription } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  // books: Book[] = []
  books: Book[] = [
    {
      title: 'HP',
      photo: '',
      synopsis: 'longue histoire',
      author: 'Rowling'
    }
  ]
  booksSubscription: Subscription

  constructor(
    private router: Router,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books
      }
    )
    this.booksService.emitBooks()
  }

  onNewBook() {
    this.router.navigate(['/books', 'new'])
  }

  onRemoveBook(book: Book) {
    this.booksService.removeBook(book)
  }

  onSingleBook(id: number) {
    this.router.navigate(['/books', 'view', id])
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe()
  }

}
