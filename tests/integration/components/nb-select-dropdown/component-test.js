import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nb-select-dropdown', 'Integration | Component | nb select dropdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nb-select-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nb-select-dropdown}}
      template block text
    {{/nb-select-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
