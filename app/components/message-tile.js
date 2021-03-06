import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  updateMessageForm: false,

  answerCount: Ember.computed('message.answers', function() {
    var answerAmount = this.get('message.answers.length');
    return answerAmount;
  }),

  actions: {
  addToFavs(message) {
    this.get('favoriteQuestions').add(message);
  }
}
});
