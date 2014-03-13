// Bind a method to an object and cache it
Object.defineProperty(Object.prototype, "$commandName;format="norm"$", {
  value: function (methodName) {
    var boundName = "__$commandName;format="norm"$__" + methodName;
    return this[boundName] || (this[boundName] = this[methodName].bind(this));
  },
});
