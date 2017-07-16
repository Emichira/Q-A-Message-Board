import Ember from 'ember';

export default Ember.Component.extend({
  editMessageForm: false,
  action: {
    update(message, params) {
      this.sendAction('update', message, params);
    },
    delete(message) {
      if (confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyMessage', message);
      }
    }
  }
});
