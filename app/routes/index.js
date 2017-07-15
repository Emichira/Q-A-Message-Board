import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('message');
  },
  actions: {
    saveMessage3(params) {
      var newMessage =
      this.store.createRecord('mesage', params);
      newMessage.save();
      this.transitionTo('index');
    }
  }
});
