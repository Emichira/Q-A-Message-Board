import Ember from 'ember';

export default Ember.Component.extend({
  jibu: DS.attr(),
  mtunzi: DS.attr(),
  message: DS.belongsTo('message', { async: true }),
});
