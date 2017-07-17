import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(message) {
      if (confirm('Are you sure you want to delete this?')) {
        this.sendAction('destroyMessage', message);
      }
    },
    saveAnswer() {
      var params = {
        jibu: this.get('jibu'),
        mtunzi: this.get('mtunzi'),
        message: this.get('message')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
