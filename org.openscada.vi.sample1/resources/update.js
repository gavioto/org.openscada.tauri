function updateText ( name, elementText, elementBackground )
{
	var e1 = controller.getElement ( elementText );
	var e2 = controller.getElement ( elementBackground );
	if ( elementBackground == null || elementBackground === undefined )
		{
			e2 = e1;
		}
	
	e1.setText ( "Value: " + data.getPrimaryValue("A" ).asString("<none>") );
	e2.setBackgroundColor ( data.getSummary().isValid()  ? null : controller.getProperty("color.invalid" ) );
}