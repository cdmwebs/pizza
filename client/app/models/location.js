import DS from 'ember-data';

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  venue: belongsTo('venue'),
  address: attr(),
  latitude: attr(),
  longitude: attr(),

  location: Ember.computed('latitude', 'longitude', function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  })
});

