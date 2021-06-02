import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UsersUserController extends Controller {
  userArchived = false;
  @tracked openDialogue=false
  @action
  async modifyValue() {
    this.model.changeValue();
    // New method for changing user data, but returns an error despite working.
    //await this.store.findRecord('user', currentUser)
    //.then (function (user) {
    //  user.value = !user.value;
    //})
    //.catch (exception => {
    //  console.log(exception);
    //})
  }
  @action
  toggleModal(){
    this.openDialogue = !this.openDialogue;
  }
  @action
  async archiveAUser(){
    this.model.archiveUser();
    if (this.openDialogue) this.toggleModal();
  }
}
