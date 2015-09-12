import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Pizza Place ${i}`; },
  avatar: faker.internet.avatar,
  location: L.latLng(37.77493, -122.419415),
});
