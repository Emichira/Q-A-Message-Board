import DS from 'ember-data';

export default DS.Model.extend({
  jibu: DS.attr(),
  mtunzi: DS.attr(),
  message: DS.belongsTo('message', { async: true }),
});
