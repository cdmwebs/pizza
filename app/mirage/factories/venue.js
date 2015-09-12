import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name() { return faker.company.companyName(); },
  avatar: faker.internet.avatar,
  location(i) { return L.latLng(`${39.1000 + (i / 1000)}`, -84.5167 + (i/1000)); },
});
