import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage1() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        info: this.get('info'),
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage2', params);
    }
  }
});
