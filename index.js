function receivesAFunction(callback) {
  return callback();
}

const fn = function () {
  return "this is a ";
};
function returnsANamedFunction() {
  return fn;
}

function returnsAnAnonymousFunction() {
  return function() {
    return 2 + 2;
  };
}

returnsAnAnonymousFunction();
