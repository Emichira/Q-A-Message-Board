import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        question: this.get('question'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
