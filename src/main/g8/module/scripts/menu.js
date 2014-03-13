/* Add menu to extension bar */
ExtensionBar.addExtensionMenu({
	id : "$name;format="hyphen"$",
	label : "$name$",
	submenu : [
	
	{
		id : "$name;format="hyphen"$/about",
		label : "About...",
		click:dialogHandler(AboutDialog)
	} ]
});

// Add submenu to column header menu 
DataTableColumnHeaderUI.extendMenu(function(column, columnHeaderUI, menu) {
	MenuSystem.appendTo(menu, "", [ { /* separator */}, {
		id : "$name;format="hyphen"$/about",
		label : "$name$",
		click:dialogHandler(AboutDialog)
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

