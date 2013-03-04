function updateValue ( itemName )
{
	setColor ( controller.getElement ("left" ) );
	setColor ( controller.getElement ("right" ) );
	
	var format = controller.getProperty("format", "%.1f");
	
	// set text
	var value = data.getPrimaryValue (itemName).asDouble(null);
	controller.getElement("label").setText ( value == null ? "" : java.lang.String.format ( format, [value] ) );
}

function onClick ()
{
	openItemDetails ( controller.getProperty ( "connection" ), controller.getProperty ("item" ) );
}

function setColor ( element )
{
	// set background
	if ( !data.getSummary ().isValid() || data.getSummary().isError () )
	{
		element.setBackgroundColor ( background["invalid"] );
	}
	else if ( data.getSummary().isAckRequired () )
	{
		element.setBackgroundColor ( background["ackRequired"] );
	}
	else if ( data.getSummary().isAlarm () )
	{
		element.setBackgroundColor ( background["alarm"] );
	}
	else if ( data.getSummary().isManual () )
	{
		element.setBackgroundColor ( background["manual"] );
	}
	else if ( data.getSummary().isBlocked () )
	{
		element.setBackgroundColor ( background["blocked"] );
	}
	else
	{
		element.setBackgroundColor ( background["ok"] );
	}
}
