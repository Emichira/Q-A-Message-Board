import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('message');
  },

  actions: {
    saveMessage3(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
  }
});
