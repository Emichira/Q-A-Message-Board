import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,

  answerCount: Ember.computed('message.answers', function() {
    var answerAmount = this.get('message.answers.length');
    return answerAmount;
  })
});
