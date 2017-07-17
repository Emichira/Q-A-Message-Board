import DS from 'ember-data';

export default DS.Model.extend({
  jibu: DS.attr(),
  mtunzi: DS.attr(),
  messages: DS.hasMany('message', { async: true })
});
