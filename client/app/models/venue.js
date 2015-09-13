import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr(),
  avatar: attr(),
  address: attr(),
  url: attr(),
  locations: hasMany('location')
});

