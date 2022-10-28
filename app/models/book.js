import Model, { attr, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;

  @hasMany('book-page', { async: false, inverse: 'book' })
  bookPages;
  
  get sortedPages() {
    return this.bookPages.filter((x) => !x.isDeleted).sortBy('pageNumber');
  }
  
  get hasSomePages() {
	  return this.bookPages.some((x) => x.pageNumber > 0);
  }
}
