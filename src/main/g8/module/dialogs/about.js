function AboutDialog() {}

AboutDialog.prototype = {
  init: function () { 
    var nomecomando ="$commandName;format="Camel"$"
    this.dialogElement = \$(DOM.loadHTML("$name;format="hyphen"$", "dialogs/about.html"));
    var controls = DOM.bind(this.dialogElement);
    controls.close.click(this.$commandName;format="snake"$("hide"));
  },
  
  show: function () {
    this.init();
    this.dialogLevel = DialogSystem.showDialog(this.dialogElement);
  },
  
  hide: function () {
    DialogSystem.dismissUntil(this.dialogLevel - 1);
  },
};
