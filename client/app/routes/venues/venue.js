import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('venue', params.venue_slug);
  },

  serialize: function(model) {
    return { venue_slug: model.get('url') };
  }
});

