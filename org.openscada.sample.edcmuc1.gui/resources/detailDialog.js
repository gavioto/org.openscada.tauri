//=========================================================================
// ugly
//=========================================================================

function executeCommand(commandId, parameters) {
	controller.executeCommand(commandId, makeMap(parameters));
}

function openDefaultDetails(details) {
	openDetailDialog(details, {
		component : controller.getProperty("component"),
		// linkName:controller.getProperty("location") + "." +
		// controller.getProperty("component"),
		linkName : controller.getProperty("namespace"),
		linkDetailView : details,
		// linkTarget:controller.getProperty("connection")+"#"+controller.getProperty("prefix")+"."+controller.getProperty("location")+"."+controller.getProperty("component")+"."
		linkTarget : controller.getProperty("connection") + "#"
				+ controller.getProperty("prefix") + "."
				+ controller.getProperty("namespace") + ".",
		arrayCount : controller.getProperty("arrayCount"),
		transformer : controller.getProperty("transformer"),
		meter : controller.getProperty("meter"),
		inverter : controller.getProperty("inverter"),
		availabilityInfo : controller.getProperty("availabilityInfo"),
		hdConnection : controller.getProperty("hdConnection"),
		hdItemPrefix : controller.getProperty("prefix") + "."
				+ controller.getProperty("namespace")
	});
}

function openItemDetails(connectionId, itemId) {
	println("Opening item detail dialog: " + connectionId + "#" + itemId);

	var parameters = {
		"org.openscada.da.client.dataitem.details.itemId" : itemId,
		"org.openscada.da.client.dataitem.details.connectionId" : connectionId
	};
	executeCommand(
			"org.openscada.da.client.dataitem.details.openDetailsDialog",
			parameters);
}

function openDetailDialog(id, properties) {
	openDetailDialogJson ( id, toJson ( properties ) );
}

function openDetailDialogJson(id, properties) {
	println("Opening detail dialog: " + id + " -> " + properties );

	var parameters = {
		"org.openscada.vi.details.showDetailDialog.id" : id,
		"org.openscada.vi.details.showDetailDialog.parameters" : properties
	};
	executeCommand("org.openscada.vi.details.showDetailDialog", parameters);
}

function makeMap(properties) {
	var result = new java.util.HashMap();

	for ( var key in properties) {
		result.put(key, properties[key]);
	}

	return result;
}

function toJson ( properties )
{
	return GSON.toJson ( makeMap ( properties ) );
}

function openDetails(extension) {
	var details;
	if (extension != null) {
		details = controller.getProperty("details" + extension);
	} else if (extension == "undefined") {
		details = controller.getProperty("details");
	} else {
		details = controller.getProperty("details");
	}

	var prefix = controller.getProperty("details.prefix", controller
			.getProperty("prefix"));
	// var location = controller.getProperty ( "details.location",
	// controller.getProperty ( "location" ) );
	// var component = controller.getProperty ( "details.component",
	// controller.getProperty ( "component" ) );
	var namespace;
	if (extension != null) {
		namespace = controller.getProperty("details.namespace", controller
				.getProperty("namespace" + extension));
	} else if (extension == "undefined") {
		namespace = controller.getProperty("details.namespace", controller
				.getProperty("namespace"));
	} else {
		namespace = controller.getProperty("details.namespace", controller
				.getProperty("namespace"));
	}

	var linkTarget = controller.getProperty("connection") + "#";
	var hdItemPrefix = "";

	if (prefix != null && prefix != "") {
		linkTarget += prefix + ".";
		hdItemPrefix += prefix + ".";
	}
	if (namespace != null && namespace != "") {
		linkTarget += namespace + ".";
		hdItemPrefix += namespace + ".";
	}

	var linkHREF = controller.getProperty("href");
	var linkHREF2 = controller.getProperty("href2");
	/*
	 * if ( location != null && location != "" ) { linkTarget += location + "."; }
	 * if ( component != null && component != "" ) { linkTarget += component +
	 * "."; }
	 */
	if (details == null)
		return;

	openDetailDialog(details, {
		// component:component,
		component : "",
		linkName : namespace,
		linkDetailView : details,
		linkTarget : linkTarget,
		linkHREF : linkHREF,
		linkHREF2 : linkHREF2,
		transformer : controller.getProperty("transformer"),
		meter : controller.getProperty("meter"),
		inverter : controller.getProperty("inverter"),
		arrayCount : controller.getProperty("arrayCount"),
		availabilityInfo : controller.getProperty("availabilityInfo"),
		hdConnection : controller.getProperty("hdConnection"),
		hdItemPrefix : hdItemPrefix
	});
}
