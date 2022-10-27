import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookPageModel extends Model {
  @attr('number') pageNumber;

  @belongsTo('book', { async: false, inverse: 'bookPages' })
  book;
}
