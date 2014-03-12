function init() {
    var RS = Packages.com.google.refine.RefineServlet;
    RS.registerCommand(module,"$commandName;format="camel"$", new Packages.$package$.commands.$commandName;format="Camel"$Command);
    
    // Script files to inject into /project page
    ClientSideResourceManager.addPaths(
        "project/scripts",
        module,
        [

        ]
    );
    
    // Style files to inject into /project page
    ClientSideResourceManager.addPaths(
        "project/styles",
        module,
        [

        ]
    );
}
