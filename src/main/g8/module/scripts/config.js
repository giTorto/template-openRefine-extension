var Extension = {};
Extension.commandPath = "/command/$name;format="hyphen"$/";
Extension.servicesPath = Extension.commandPath + "services";

// Register a dummy reconciliation service that will be used to display
ReconciliationManager.registerService({
  name: "$name;format="hyphen"$",
  url: "$name;format="hyphen"$",
  // By setting the URL to "{{id}}",
  // this whole string will be replaced with the actual URL
  view: { url: "{{id}}" },
});
