import Ember from 'ember';

export default Ember.Service.extend({
  messages: [],

  add(question) {
    this.get('messages').pushObject(message);
  }
});
