const timer = (fn) => {
  setTimeout(() => {
    fn();
  }, 3000);
}


module.exports = {
  timer
}