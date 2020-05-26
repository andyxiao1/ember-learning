import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TestPlaygroundComponent extends Component {
  @tracked isViewable = true;
  @tracked input = '';

  @action toggleView() {
    this.isViewable = !this.isViewable;
  }

  @action clearInput() {
    this.input = '';
  }

  @action updateInput(e) {
    this.input = e.target.value;
  }
}
