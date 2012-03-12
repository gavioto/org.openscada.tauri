function updateValue ( itemName )
{
	setColor ( controller.getElement ( "container" ) );
	
	// set text
	var value = data.getPrimaryValue (itemName).asInteger(null);
	
	controller.getElement ( "value" ).setText ( "" + value );
	
	if ( value === undefined || value == null )
		{
			setFailed ();
		}
	else if ( value == 0 )
		{
			setLights ( null, "#FFFF00|", null );
		}
	else if ( value == 1 )
		{
			setLights ( "#FF0000", null, null );
		}
	else if ( value == 2 )
	{
		setLights ( null, "#FFFF00", null );
	}
	else if ( value == 3 )
	{
		setLights ( null, null, "#00FF00" );
	}
	else if ( value == 4 )
	{
		setLights ( "#FF0000", "#FFFF00", null );
	}
	else
	{
		setFailed ();
	}
}

function setFailed ()
{
	setLights ( "#FF0000", "#FFFF00", "#00FF00" );
}

function setLights ( red, yellow, green )
{
	controller.getElement ( "red" ).setBackgroundColor ( red );
	controller.getElement ( "yellow" ).setBackgroundColor ( yellow );
	controller.getElement ( "green" ).setBackgroundColor ( green );
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
