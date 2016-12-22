import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nb-select-option', 'Integration | Component | nb select option', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nb-select-option}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nb-select-option}}
      template block text
    {{/nb-select-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
