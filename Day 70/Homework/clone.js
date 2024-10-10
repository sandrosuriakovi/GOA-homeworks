//myForEach clone
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  
  numbers.myForEach(number => console.log(number));
  
//myMap clone
  Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  let doubledNumbers = numbers.myMap(num => num * 2);
  console.log(doubledNumbers);
  
//myFilter clone
  Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
  
  let filteredNumbers = numbers.myFilter(num => num % 2 === 0);
  console.log(filteredNumbers);
  