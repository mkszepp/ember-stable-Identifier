import { module, test } from 'qunit';
import { setupTest } from 'ember-stable-identifier/tests/helpers';

module('Unit | Model | book page', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('book-page', {});
    assert.ok(model);
  });
});
