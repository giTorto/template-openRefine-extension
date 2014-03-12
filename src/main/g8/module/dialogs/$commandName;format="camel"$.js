function $commandName;format="Camel"$Dialog(column) {
    this.column = column;
}

ExtractionDialog.prototype = {
    init: function (callback) {
        var self = this,
            selectedServices = {},
            dialogElement = this.dialogElement = \$(DOM.loadHTML("$commandName;format="Camel"$", "dialogs/$commandName;format="camel"$.html"));
        var operazione = new String();

        /* Set labels */
        \$('.column-name', dialogElement).text(this.column.name);



        /* Bind controls to actions */
        var controls = DOM.bind(this.dialogElement);
        controls.cancel.click(this.bound("hide"));
        

        if (callback)
            callback.apply(self);

    },

    show: function () {
        this.init(function () {
            this.dialogLevel = DialogSystem.showDialog(this.dialogElement);
        });

        
    },

    hide: function () {
        DialogSystem.dismissUntil(this.dialogLevel - 1);
    },



   

};

