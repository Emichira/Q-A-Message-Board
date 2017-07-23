import Ember from 'ember';

export default Ember.Service.extend({
  messages: [],

  add(message) {
    this.get('messages').pushObject(message);
  }
});
