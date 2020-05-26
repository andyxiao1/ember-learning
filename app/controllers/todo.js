import Controller from '@ember/controller';

export default class TodoController extends Controller {
  get count() {
    return this.model.length;
  }
}
