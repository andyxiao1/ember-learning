import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
// import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class TodoListComponent extends Component {
  // @storageFor('todo-items') items;
  // @storageFor('todo-count') count;
  @service store;
  @tracked input = '';

  @action
  handleInput({ target: { value } }) {
    this.input = value;
  }

  @action
  clear() {
    this.items.reset();
    this.count.reset();
    // this.count.set('count', 0);
  }

  @action
  addItem(e) {
    // fetch('/api/test')
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
    e.preventDefault();
    if (this.input) {
      this.store.createRecord('todo', { text: this.input }).save();
      // this.items.pushObject({
      //   text: this.input,
      //   id: this.count.get('count'),
      // });
      this.input = '';
      // this.count.incrementProperty('count');
    } else {
      alert(`Please input something first!`);
    }
    // console.log(this.items.content.map((obj) => `${obj.id}: ${obj.text}`));
  }

  @action
  removeItem(item) {
    item.destroyRecord();
  }
}
