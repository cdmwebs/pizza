import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Pizza Place ${i + 1}`; },
  avatar: faker.internet.avatar,
  location(i) { return L.latLng(`${39.1000 + (i / 100)}`, -84.5167); },
});
