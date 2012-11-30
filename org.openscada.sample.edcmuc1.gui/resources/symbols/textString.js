function updateValue ( itemName )
{
	setColor ( controller.getElement ("left" ) );
	setColor ( controller.getElement ("right" ) );
	
	var format = controller.getProperty ( "format", "%s" );
	
	// set text
	var value = data.getPrimaryValue (itemName).toLabel();
	var attribute = controller.getProperty("attribute");
	if (attribute != null) {
		value = data.getAttributeValue (itemName, attribute).asString("");
	}
	controller.getElement("label").setText ( value == null ? "" : java.lang.String.format ( format, [value] ) );
}

function onClick ()
{
	openItemDetails ( controller.getProperty ( "connection" ), controller.getProperty ("item" ) );
}

function setColor ( element )
{
	// set background
	element.setBackgroundColor ( getBackgroundStyle ( data ) );
}
