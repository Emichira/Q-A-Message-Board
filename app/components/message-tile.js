import Ember from 'ember';

export default Ember.Component.extend({
  update(message, params) {
   this.sendAction('update', message, params);
 },
 delete(message) {
  if (confirm('Are you sure you want to delete this question?')) {
    this.sendAction('destroyMessage', message);
  }
}
});
