import Ember from 'ember';

var message = [{
  id: 1,
  question: "Who is the latest Arsenal signing this summer?",
  author: "Anuelmich",
  info: "Hint: He played in Ligue1"
},{
  id: 2,
  question: "Who's Arsenal longest serving manager?",
  author: "Anuelmich",
  info: "Hint: The incredibles. Unbeaten"
}, {
  id: 3,
  question: "Who is the best player of the season 2016/2017 for Arsenal?",
  author: "Anuelmich",
  info: "Hint: Dogs"
}];

export default Ember.Route.extend({
  model() {
    return message;
  },
});
