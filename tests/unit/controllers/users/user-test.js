import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Controller | users/user', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:users/user');
    assert.ok(controller);
    // assert.equal(controller.userArchived, false);
    // run(() => controller.send('archiveAUser', ''))
    
    // assert.equal(controller.userArchived, true);

  });
});
