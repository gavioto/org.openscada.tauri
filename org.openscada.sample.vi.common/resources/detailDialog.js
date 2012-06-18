function executeCommand ( commandId, parameters )
{
	controller.executeCommand ( commandId, makeMap ( parameters ) );
}

function openDefaultDetails (details)
{
	openDetailDialog(details,{
		component:controller.getProperty("component"),
		linkName:controller.getProperty("location") + "." + controller.getProperty("component"),
		linkDetailView:details,
		linkTarget:controller.getProperty("connection")+"#"+controller.getProperty("prefix")+"."+controller.getProperty("location")+"."+controller.getProperty("component")+"."
	});
}

function openItemDetails ( connectionId, itemId )
{
	println ( "Opening item detail dialog: " + connectionId + "#" + itemId );
	
	var parameters = {
			"org.openscada.da.client.dataitem.details.itemId":itemId,
			"org.openscada.da.client.dataitem.details.connectionId":connectionId
	};
	executeCommand ( "org.openscada.da.client.dataitem.details.openDetailsDialog", parameters );
}

function openDetailDialog ( id, properties )
{
	println ( "Opening detail dialog: " + id );
	
	var parameters = {
			"org.openscada.vi.details.showDetailDialog.id":id,
			"org.openscada.vi.details.showDetailDialog.parameters":GSON.toJson(makeMap(properties))
	};
	executeCommand ( "org.openscada.vi.details.showDetailDialog", parameters );
}

function makeMap(properties)
{
	var result = new java.util.HashMap();
	
	for ( var key in properties )
		{
			result.put ( key, properties[key] );
		}
	
	return result;
}

function openDetails ()
{
	var details = controller.getProperty("details");

	var prefix = controller.getProperty ( "details.prefix", controller.getProperty ( "prefix" ) );
	var location  = controller.getProperty ( "details.location", controller.getProperty ( "location" ) );
	var component = controller.getProperty ( "details.component", controller.getProperty ( "component" ) );
	
	var linkTarget = controller.getProperty("connection")+"#";

	if ( prefix != null && prefix != "" )
	{
		linkTarget += prefix + ".";
	}
	if ( location != null && location != "" )
	{
		linkTarget += location + ".";
	}
	if ( component != null && component != "" )
	{
		linkTarget += component + ".";
	}

	if ( details == null )
		return;
	
	openDetailDialog(details,{
		component:component,
		linkName:component,
		linkDetailView:details,
		linkTarget:linkTarget
	});
}
