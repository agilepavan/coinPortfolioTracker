function getTempCallback (loction, callback) {
  callback(undefined, 40);
  callback('Not found');
}

getTempCallback('Manchester', function (err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('sucess', temp);
  }
})

function getTempPromise (location) {
  return new Promise( function(resolve, reject) {
    setTimeout(function() {
      resolve(50);
      reject('city not found');
    }, 2000);

  });
}
getTempPromise('Manchester').then(function(temp) {
  console.log('Pro sucess', temp);
}, function(err) {
  console.log('Promise err', err);
})


function addPromise (a,b) {
  return new Promise ( function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject ('Not valid values');
    }
  });
}

addPromise(7,1).then(function(value) {
  console.log(value);
}, function(err) {
  console.log('Error', err);
})
