import { FilterType } from '../constants.js';
import Observable from '../framework/observable.js';

export default class FiltersModel extends Observable {
  #filter = FilterType.EVERYTHING;

  get filter() {
    return this.#filter;
  }


  setFilter(updateType, filter) {
    this.#filter = filter;
    this._notify(updateType, filter);
  }
}
