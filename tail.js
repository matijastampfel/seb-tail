const getTail = (head, tail = null) => ({ value: head, next: tail });
const list = getTail(5, getTail(7, getTail(12, getTail(45))));
let container = [];

//Scans object and gets value in array
function scan(obj) {
  var k;
  if (obj instanceof Object) {
    for (k in obj) {
      if (obj.hasOwnProperty(k)) {
        scan(obj[k]);
        if (obj["value"]) {
          obj["value"] = 10;
        }
      }
    }
  } else {
    container.push(obj);
  }
}

// Reverses objects value
function reverseObjectValue(obj) {
  // Reverses array
  container.reverse().shift();
  const res = {};
  let counter = 0;
  function recurse(obj, current) {
    for (const key in obj) {
      let value = obj[key];
      if (key === "value") {
        obj[key] = container[counter];
        counter++;
      }

      if (value != undefined) {
        if (value && typeof value === "object") {
          recurse(value, key);
        } else {
          console.log(res[key]);
        }
      }
    }
  }
  recurse(obj);
  return res;
}

scan(list);
reverseObjectValue(list);
console.log(list);
