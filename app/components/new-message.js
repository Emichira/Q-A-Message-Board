import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  action: {
    messageFormShow() {
      this.set('addNewMessage', true);
    }
  }
});
