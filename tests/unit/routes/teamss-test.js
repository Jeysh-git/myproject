import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | teamss', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:teamss');
    assert.ok(route);
  });
});
