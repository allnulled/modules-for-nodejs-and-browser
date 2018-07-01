(function(moduleName, moduleData) {
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
      module.exports = moduleData;
    } else if (typeof define === "function" && typeof define.amd !== "undefined") {
      define([], () => moduleData);
    } else {
      window[moduleName] = moduleData;
    }
})(
  "GLOBAL_VARIABLE",
  (function() {
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
  })()
)
