export interface EmitEvent<T = any> {
  (...args: any[]): T;
}

class EventEmitter {
  cache: {
    [propsName: string]: EmitEvent[];
  };
  constructor() {
    this.cache = {};
  }

  addListener<T>(type: string | number, callback: EmitEvent<T>) {
    if (this.cache[type] && this.cache[type].length > 0) {
      this.cache[type].push(callback);
    } else {
      this.cache[type] = [callback];
    }
  }

  removeListener<T>(type: string, callback: EmitEvent<T>) {
    const callbacks = this.cache[type];
    if (callbacks) {
      const index = callbacks.findIndex(cb => cb === callback);
      callbacks.splice(index, 1);
    }
  }

  emit(type: string, ...args: any) {
    const callbacks = this.cache[type];
    if (callbacks) {
      callbacks.forEach(cb => cb(...args));
    }
  }
}

export default new EventEmitter();
