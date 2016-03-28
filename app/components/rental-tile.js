import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  areDetailsShowing: false,

 actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    detailsShow: function() {
      this.set('areDetailsShowing', true);
    },
    detailsHide: function() {
      this.set('areDetailsShowing', false);
    },
    update(rental,params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
