import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },
  actions: {
    update(message, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          message.set(key, params[key]);
        }
      });
      message.save();
      this.transitionTo('index');
    },

    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var answer = params.rental;
      answer.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return answer.save();
      });
      this.transitionTo('answer', answer);
    }
  }
});
