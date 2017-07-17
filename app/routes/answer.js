import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    rentals: this.store.findAll('message'),
    mtunzi: this.store.findAll('mtunzi')
  });
},
});
