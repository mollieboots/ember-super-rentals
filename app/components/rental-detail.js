import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function(rental) {
      this.sendAction('delete', rental);
    },
    update2(rental, params) {
      this.sendAction('update3', rental, params)
    }
  }
});
