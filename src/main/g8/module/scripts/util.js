// Bind a method to an object and cache it
Object.defineProperty(Object.prototype, "$commandName;format="snake"$", {
  value: function (methodName) {
    var boundName = "__$commandName;format="snake"$__" + methodName;
    return this[boundName] || (this[boundName] = this[methodName].bind(this));
  },
});
