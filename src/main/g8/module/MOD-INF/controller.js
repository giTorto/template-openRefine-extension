var logger = Packages.org.slf4j.LoggerFactory.getLogger("$name;format="hyphen"$"),
    refineServlet = Packages.com.google.refine.RefineServlet,
    File = Packages.java.io.File,
    refineServlet = Packages.com.google.refine.RefineServlet;

function init() {
    var RS = Packages.com.google.refine.RefineServlet;
    RS.registerCommand(module,"$commandName;format="camel"$", new Packages.$package$.commands.$commandName;format="Camel"$Command);
    
    // Script files to inject into /project page
    ClientSideResourceManager.addPaths(
        "project/scripts",
        module,
        [
            "dialogs/about.js",
            "scripts/menus.js",
	    "scripts/util.js",
	    "scripts/config.js"
        ]
    );
    
    // Style files to inject into /project page
    ClientSideResourceManager.addPaths(
        "project/styles",
        module,
        [
	    "dialogs/about.less",
	    "styles/main.less",
            "styles/dialog.less"
        ]
    );
}
