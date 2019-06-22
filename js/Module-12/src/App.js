import List from './List/List';
import Form from './Form/Form';
import Controller from './Controller';
import Model from './Model';

window.onload = function() {
  const form = new Form(document.querySelector('#form'));
  const list = new List(document.querySelector('#list'));
  const model = new Model();
  const app = new Controller(model, form, list);
};
