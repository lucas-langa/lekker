import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) value;
  @attr('boolean', { defaultValue: false }) archived;

  archiveUser() {
    this.archived = true;
  }

  changeValue() {
    this.value = !this.value;
  }
}
