
function makePrefix ( region, country, site )
{
	return "EON.R" + region + ".C" + country + ".S" + site; 
}

function prefix ( arg )
{
	var region = controller.getProperty ( "region" );
	var country = controller.getProperty ( "country" );
	var site  = controller.getProperty ( "site" );
	
	var p = "EON.R" + region + ".C" + country + ".S" + site;
	if ( arg === undefined || arg == null )
		return p;
		
	return p + arg;
}

function sitePrefix ( arg )
{
	var region = controller.getProperty ( "region" );
	var country = controller.getProperty ( "country" );
	var site  = controller.getProperty ( "site" );
	
	var p = "EON.DCS.SITE.R" + region + ".C" + country + ".S" + site;
	if ( arg === undefined || arg == null )
		return p;
		
	return p + arg;
}

function maintenancePrefix() {
	return "org.openscada.da.master.common.marker.maintenance";
}

// more common

/**
 * Import properties from controller to target properties JavaScript map 
 */
function importProperties ( targetProperties, args )
{
	for ( var i = 0; i < args.length ; i++ )
	{
		targetProperties[args[i]] = controller.getProperty ( args[i] );
	}
}