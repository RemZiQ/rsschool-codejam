module.exports = function make(...args) {
  const arr = [];
  for (let i = 0; i < args.length; i += 1) {
    if (typeof (args[i]) === 'function') {
      return arr.reduce(args[i]);
    }
    arr.push(args[i]);
  }
  const func = function (...arg) {
    for (let i = 0; i < arg.length; i += 1) {
      if (typeof (arg[i]) === 'function') {
        return arr.reduce(arg[i]);
      }
      if (!Number.isFinite(arg[i])) {
        throw new Error('Can\'t implement with that arguments.Try with integer numbers');
      }
      arr.push(arg[i]);
    }
    return func;
  };
  return func;
};
