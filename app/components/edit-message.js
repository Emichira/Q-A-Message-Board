import Ember from 'ember';

export default Ember.Component.extend({
  editMessageForm: false,
  actions: {
    editMessageForm() {
      this.set('editMessageForm', true);
    },
    update(message) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        info: this.get('info'),
      };
      this.set('editMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
