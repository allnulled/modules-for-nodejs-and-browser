(function() {
  var output = (function() {
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // CODE
    // Return the module
  })();
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = output;
  } else if (typeof define === "function" && typeof define.amd !== "undefined") {
    define([], () => output);
  } else {
    window[arguments[0]] = output;
  }
})("GLOBAL_VARIABLE");