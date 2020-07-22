class MultiValueDictionary {
  constructor() {
    this.collection = new Map();
  }
  
  add(key, value) {
    const currentValue = this.get(key);
    
    if (!Array.isArray(currentValue)) {
      this.collection.set(key, [value]);
      return true;
    }
    
    if (currentValue.includes(value)) {
      return false;
    }
    
    this.collection.set(key, [...this.collection.get(key), value]);
    return true;
  }
  
  get(key) {
    return this.collection.get(key) || null;
  }
  
  removeValue(key, value) {
    const arr = this.get(key);
    if (arr && arr.includes(value)) {
      this.collection.set(key, arr.filter(val => val !== value))
    }
  }
  
  remove(key) {
    this.collection.delete(key);
  }
  
  [Symbol.iterator]() {
    const entries = [...this.collection.entries()];
    let index = -1;
    return {
      next: () => {
        if (index === entries.length - 1) {
          return { done: true };
        }
        index++;
        const [key, value] = entries[index];
        return { value: { key, value } };
      }
    }
  }
}

const dict = new MultiValueDictionary();

dict.add('a', 1);
dict.add('a', 2);
dict.add('b', 6);
dict.add('b', 7);
dict.add('b', 6);

for (let kv of dict) {
  console.log(kv.key + ' ' + kv.value);
}
