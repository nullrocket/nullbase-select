import Ember from 'ember';
import NbInputThemeInitInitializer from 'dummy/initializers/nb-select-display-theme-init';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | nb input theme init', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  NbInputThemeInitInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
