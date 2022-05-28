const timer = (fn) => {
  setTimeout(() => {
    fn();
    setTimeout(() => {
      fn();
    }, 3000)
  }, 3000);
}


module.exports = {
  timer
}