function makeHeaderProperties ()
{
	println ( "make properties" );
	
	properties.put ( "detailsId", "org.openscada.sample.edcmuc1.details1" );
	
	var prefix = "";
	
	var details = {
		linkDetailView: "org.openscada.sample.edcmuc1.details1",
		linkTarget: controller.getProperty("connection")  + "#" + prefix,
		linkName: prefix,
		maintenancePrefix: maintenancePrefix(),
		hdItemPrefix: prefix
	};
	importProperties ( details, [ "hdConnection" ] );
	properties.put ( "details", toJson (details) );
}