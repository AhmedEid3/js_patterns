let instance = null;

class Observable {
  /**
   * @type {Array<Function>}
   */
  observers = [];

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  notify(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}

export default Object.freeze(new Observable());
