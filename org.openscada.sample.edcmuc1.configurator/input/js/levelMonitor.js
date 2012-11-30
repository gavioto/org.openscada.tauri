function isFailure ( value, limit, lowerOk, includedOk )
{
	var f = value > limit && lowerOk || value < limit && !lowerOk;
    if ( f )
    {
        return true;
    }

    return ! ( value != limit || includedOk );
}

isFailure ( values.get("A").getValue().asDouble(), values.get("B").getValue().asDouble(), true, true )