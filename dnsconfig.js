// define our registrar and providers
var REG_NONE = NewRegistrar('none', 'NONE');
var GANDI = NewDnsProvider("gandi", "GANDI");

D("prototyp.it", REG_NONE, DnsProvider(GANDI),
    DefaultTTL('5m'),

    A("ecf",              "62.210.146.202"),
    CNAME("*.ecf",        "ecf.prototyp.it."),

    {'ns_ttl': '600'} // On domain apex NS RRs

)
