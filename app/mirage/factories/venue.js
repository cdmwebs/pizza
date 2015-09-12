import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Pizza Place ${i}`; },
  avatar: faker.internet.avatar
});
