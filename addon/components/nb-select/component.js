import Ember from 'ember';
import layout from './template';
import ThemedComponent from 'nullbase-theme-service/mixins/nb-themed-component';
import _ from "npm:lodash";
import createFocusTrap from "npm:focus-trap";
const { computed } = Ember;
function topZIndex() {

  return _.max(_.map(document.querySelectorAll('*'), function ( el ) {
    return parseInt(
      getComputedStyle(el, null).getPropertyValue('z-index')
    );

  }));
}
export default Ember.Component.extend(ThemedComponent, {
  layout,
  menuIcon: "menu-down-grey",
  gestures: Ember.inject.service(),
  classNames: [ 'nb-select' ],
  parentFocusTrap: null,
  icon: "",
  optionComponent:'nb-select-option',
  init(){
    this._super(...arguments);

  },
  error: false,
  options: [ { value: 2, display: 'sdf' }, { value: 3, display: "sdflkasjdf" }, { value: 1, display: "s2134lk" } ],
  displayOptions: computed('options', 'value', function () {
    var self = this;
    return _.map(this.get('options'), function ( option ) {
      return _.merge({}, option, { selected: option.value === self.get('value') })
    })
  }),
  actions: {
    onSelectOption( value ){
      this.sendAction('onSelectOption', value);
      this.send('closeDropDown');

    },
    closeDropDown(){
      this.get('gestures').removeEventListener(document, 'down', this._bodyDown);
      this.get('focusTrap').deactivate();
      this.get('dropDown').hide();

      $('.select-display', this.get('element')).focus();
    },
    showDropDown(){

      this.get('gestures').addEventListener(document, 'down', this._bodyDown);

      this.get('dropDown').show();
      $(this.get('tetherObject').element).width(this.$('.input-wrapper').width());

      Tether.position();
      this.get('dropDown').focus();
      this.get('focusTrap').activate()


    }
  },
  display: Ember.computed('value', function () {
    let selectedOption = _.find(this.get('options'), { value: this.get('value') });

    if ( selectedOption ) {
      return selectedOption.display;
    }
    else {
      return "";
    }
  }),
  willDestroyElement(){
   
    $(this.get('tetherObject').element).appendTo(this.get('element'));


    this.get('tetherObject').destroy();
  },
  didInsertElement(){
    let self = this;
    let gestures = this.get('gestures');
    self.$('.nb-select-drop-down').width(self.$('.input-wrapper').width());

    var $dropDown = self.$('.nb-select-drop-down');
    this.set('dropDown', $dropDown);
    var tetherObject = new Tether({
      element: self.$('.nb-select-drop-down'),
      target: self.$('.input-wrapper'),
      attachment: 'top left',
      targetAttachment: 'top left',
      //    offset: side ==="right" ? "0 "+width+"px" :"0 0",
      optimizations: {

        gpu: false
      },

    });

    this.set('tetherObject', tetherObject);

    var focusTrap = createFocusTrap(this.get('tetherObject').element, {
      initialFocus: this.get('tetherObject').element,
      onActivate: function () {
        if ( self.get('parentFocusTrap') ) {
          self.get('parentFocusTrap').pause();
        }
      },
      onDeactivate: function () {
        if ( self.get('parentFocusTrap') ) {
          self.get('parentFocusTrap').unpause();
        }
      }
    });

    this.set('focusTrap', focusTrap);

    $dropDown.css({ 'zIndex': topZIndex() })
    this._tap = function ( event ) {
      event.preventDefault();
      event.stopPropagation();
      self.send('showDropDown');
    };

    this._bodyDown = function ( event ) {
      self.send('closeDropDown');

    };

    this.$().on('keydown', function ( evt ) {
      var key = evt.which || evt.keyCode;


      if ( key === 32 ) {
        event.preventDefault();
        event.stopPropagation();

        self.send('showDropDown');
      }


      // down arrow
      if ( key === 40 ) {
        event.preventDefault();
        event.stopPropagation();
        self.send('showDropDown');
      }

    });


    gestures.addEventListener(this.get('element'), 'tap', this._tap);

  }
});
