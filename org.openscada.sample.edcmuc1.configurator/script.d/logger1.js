var enable = [
		/\.C$/,
];

var disable = [
	];

for ( var i = 0; i < items.length ; i++ )
{
	var item = items[i];
	
	item.setDefaultMonitorDemote ( "maintenance" );
	
	for ( var j = 0 ; j < enable.length; j++ )
	{
		var re = enable[j];
		if ( re.exec ( item.getAlias ( )) )
		{
			println ( "Enable event logger on " + item.getAlias () );
			item.setEventCommand ( true );
		}
	}
	
	for ( var j = 0 ; j < disable.length; j++ )
	{
		var re = disable[j];
		if ( re.exec ( item.getAlias ( )) )
		{
			println ( "Disable event logger on " + item.getAlias () );
			item.setEventCommand ( false );
		}
	}
}