obj = {
  a: 1313,
  b: NaN,
  c: 'smth',
};

function getKey(object){
  for (let key in object){
    if (object.hasOwnProperty(key)){
      console.log(key);
    }
  }
};

getKey(obj);