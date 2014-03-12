/* Add menu to extension bar */
ExtensionBar.addExtensionMenu({
	id : "$commandName;format="camel"$",
	label : "$commandName$",
	submenu : [
	
	{
		id : $nome$+"/about",
		label : "About...",
		click:dialogHandler(AboutDialog)
	} ]
});

// Add submenu to column header menu 
DataTableColumnHeaderUI.extendMenu(function(column, columnHeaderUI, menu) {
	MenuSystem.appendTo(menu, "", [ { /* separator */}, {
		id : "$commandName;format="Camel"$",
		label : "$commandName$",
		click:dialogHandler($commandName;format="Camel"$Dialog)
	} ]);
});+

function dialogHandler(dialogConstructor) {
	var dialogArguments = Array.prototype.slice.call(arguments, 1);
	function Dialog() {
		return dialogConstructor.apply(this, dialogArguments);
	}
	Dialog.prototype = dialogConstructor.prototype;
	return function() {
		new Dialog().show();
	};
}

