import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service store;
  
  @tracked books = [];
  
  constructor() {
    super(...arguments);
    
    const data = [];
    
    for (let i = 1; i <= 2399; i++) {
      this.store.push({
        data: {
          id: i + '',
          type: 'book-page',
          attributes: {
            pageNumber: i,
          },
        },
      });
      
      data.push({
        id: i + '',
        type: 'book-page',
      });
    }
    
    const book = this.store.push({
      data: {
        id: 1 + '',
        type: 'book',
        attributes: {
          title: 'My Book',
        },
        relationships: {
          bookPages: {
            data: data,
          },
        },
      },
    });
    
    this.books.push(book);
  }
  
  @action
  addPage(book) {
    console.log(book.bookPages.length);
    this.store.createRecord('book-page', {
      pageNumber: book.bookPages.length + 1,
      book: book,
    });
  }
  
  @action
  async removePage(bookPage) {
    await bookPage.destroyRecord();
  }
}
