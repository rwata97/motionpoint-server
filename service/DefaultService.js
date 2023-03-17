'use strict';

/**
 * Retrieve a proxy configuration
 *
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * changesetId Integer Changeset id. If not present the latest version is returned. (optional)
 * returns inline_response_200_1
 **/
exports.proxy_configGET = function (
  xMotionCoreUserName,
  xMotionCoreQueue,
  changesetId
) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      'changeset-id': 25,
      'config-text':
        '################## DB PROPERTIES ##################\n' +
        '#local.host.name=escoffeycommunications.convertlanguage.com\n' +
        'local.host.name=es.example.com\n' +
        'local.dir.html=opt/websites/escoffeycommunicationsweb/wwwroot\n' +
        'local.domains=\\\n' +
        ' //example.cms.biz,\\\n' +
        ' //www.example.com,\\\n' +
        ' //cdn.cms.biz,\\\n' +
        ' //res.cloudhost.com/dpmykpsih/image/upload/\n' +
        '\n' +
        ' #//newdomain.cms.biz,\\\n' +
        ' #//www.old-domain.org\n' +
        '\n' +
        'local.defaultpage=http://example.cms.biz\n' +
        'local.charset.default=UTF-8\n' +
        '#if true case is preserved for all file urls; if false, all file urls are lowercased\n' +
        '#for multiple domains or platforms, enter a list of url patterns for which case is preserved, or * for all (i.e., true=*)\n' +
        'local.preserve.filecase=false\n' +
        '\n' +
        '#internal host name or IP (inside firewall) of translation server; used by webcatt\n' +
        '#if blank, host.translation.servlet.internal, host.translation.servlet.internal.secure, url.pages.customer.internal & all other .internal properties MUST BE REMOVED!!\n' +
        'host.name.internal=escoffeycommunications.convertlanguage.com\n' +
        '\n' +
        '#translation server installation drive letters\n' +
        'drive.servers={drive:=""}\n' +
        'drive.html={drive:=""}\n' +
        'drive.html.remote={drive:=""}\n' +
        '\n' +
        'dir.html={local.dir.html}\n' +
        '\n' +
        'dir.servers=transmotion\n' +
        'dir.customer={local.dir.customer}\n' +
        '\n' +
        '#host path is used to overrride customer directory path with transparent URLs\n' +
        '#host.path={dir.languagepair}\n' +
        'host.path=/\n' +
        '\n' +
        '########## secondary host properties\n' +
        '\n' +
        '#host.names=\\\n' +
        '#es.example.cms.biz,\\\n' +
        '#es.old-domain.org\n' +
        '\n' +
        'host.name.map.es.example.cms.biz=\\\n' +
        ' example.cms.biz\n' +
        '\n' +
        'host.server.name={dir.customer}_{dir.languagepair}\n' +
        'host.server.pages={host.name}/pages/{host.server.name}/\n' +
        'host.server.pages.internal={host.name.internal}/pages/{host.server.name}/\n' +
        '\n' +
        '#Friendly URLS\n' +
        '#host.translation.servlet=http://{host.name}/{dir.customer}/{dir.languagepair}/\n' +
        '#host.translation.servlet.secure=https://{host.name}/{dir.customer}/{dir.languagepair}/\n' +
        '#Transparent URLS\n' +
        '#host.translation.servlet=http://{host.name}/{host.path}/\n' +
        '#host.translation.servlet.secure=https://{host.name}/{host.path}/\n' +
        '#SUPER DUPER Transparent URLS\n' +
        'host.translation.servlet=http://{host.name}/\n' +
        'host.translation.servlet.secure=https://{host.name}/\n' +
        '\n' +
        'url.images.customer=http://{host.name}/img/{dir.customer}/\n' +
        'url.images.customer.secure=https://{host.name}/img/{dir.customer}/\n' +
        'url.pages.customer=http://{host.server.pages}\n' +
        '\n' +
        'file.images.customer={drive.html}/{dir.html}/img/{dir.customer}/\n' +
        'file.pages.customer={drive.html}/{dir.html}/pages/{host.server.name}/\n' +
        '\n' +
        '#properties below are enabled ONLY if host.name.internal is specified\n' +
        'host.translation.servlet.internal=http://{host.name.internal}/\n' +
        'host.translation.servlet.internal.secure=https://{host.name.internal}/\n' +
        'url.pages.customer.internal=http://{host.name.internal}/pages/{host.server.name}/\n' +
        'url.images.customer.internal=http://{host.name.internal}/img/{dir.customer}/\n' +
        '\n' +
        '######## server admin\n' +
        '#allowed admin IP addresses, if blank any client can admin tserver\n' +
        'admin.ip=\n' +
        'admin.service.restart.filepath.windows=somescript.bat\n' +
        'admin.service.restart.filepath.multios=somescript.sh\n' +
        '\n' +
        '######## translation activity logging\n' +
        'log.translationactivity.enabled=false\n' +
        '#excluded IP addresses: 65.82.186.195=MotionPoint\n' +
        'log.translationactivity.exclude.ip=111.222.333.44\n' +
        '\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## NETWORK, HTTP, SSL AND DNS SETTINGS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#Use the Apache HttpClient (Next Generation) for communication with the origin site\n' +
        'network.httpclient=com.motionpoint.net.ApacheHttpClientNg2\n' +
        '\n' +
        '#DNS Caching custom settings\n' +
        '#DNS caching policy for successful name lookups specified as the number of seconds to cache the successful lookup; the default is to "cache forever".\n' +
        'translation.dns.cache.ttl=3600\n' +
        '#DNS caching policy for un-successful name lookups specified as the number of seconds to cache the failure lookup; the default is to cache for 10 seconds; -1 means cache forever\n' +
        'translation.dns.cache.negative.ttl=\n' +
        '\n' +
        '######## CHARACTER SET ###########\n' +
        '#character to be used; overrides any values provided provided in http header and/or page\n' +
        'translation.charset=\n' +
        '#character to be used if translation.charset is not specified and it cannot be determined from http header and/or page\n' +
        'translation.charset.default={local.charset.default}\n' +
        '#if true, ISO-8859-1 is interpreted as Windows-1252; Windows-1252 is the same as ISO-8859-1, but it uses special quote, dash, etc chars instead of control chars in the 80-9F range\n' +
        '#set to true if some pages use these special chars, but incorrectly specify ISO-8859-1 as the charset; IE can handle it automatically\n' +
        'translation.charset.map.iso8859.win1252=true\n' +
        '#character to be used to output translated page; if blank or not specified, uses the same character set used to read web site\n' +
        'translation.charset.output=\n' +
        '\n' +
        '######## GENERAL BEHAVIOR ###########\n' +
        '#if true, geo load balancing mode is enabled and translated files and pages saved by content are saved to the database\n' +
        'translation.geomode=true\n' +
        '#backward compatibility version number to use for parsing; valid values are: 1 (or true) for oldest legacy databases, 2 (or false), 3, 4, 5 & 6\n' +
        'translation.backcompatibility=16\n' +
        '#strict parsing checks that the end tag > char is not a literal tag attribute value enclosed in quotes; set to true only if necessary\n' +
        'translation.html.parse.strict=true\n' +
        '#set lenient to true for expired or self-signed certificates.\n' +
        'translation.security.lenient=true\n' +
        'translation.defaultpage={host.translation.servlet}\n' +
        '\n' +
        "#if true, friendly URLs of the form 'http://abc.sitedomain.com/abc/enes/aid/_abc_com__port#/path/page?params' are used instead of the double URLs\n" +
        'translation.friendlyurls=true\n' +
        '\n' +
        '#urls for which to send output compressed if the user-agent supports it; use .* for all\n' +
        'translation.output.gzip.urls.regex=.*\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## BLOCKS AND EXCLUSIONS BY URL, IP OR USER-AGENT ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#allowed client IP addresses for the web service, if blank any client can call the web service; single IPs and IP ranges may be specified via netmask\n' +
        '#note that WebCATT calls the web service, so if this property is not blank, then the IP address of WebCATT must also be included\n' +
        'translation.translatable.webservice.ip=\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## BRANDING CODE ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#default branding code for urls not having url specific branding code\n' +
        "translation.branding.code=<script type=\"text/javascript\">(function(){var Testvar=document.createElement('script');Testvar.type='text/javascript';MPJTestvarsHost.src=('https:'==document.location.protocol?'https://':'http://')+'test.example.com/javascript.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(Testvar,s);})();</script>\n" +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## DOMAIN INCLUDES & EXCLUDES ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        'translation.translatable.domains={local.domains},{host.server.pages},{host.server.pages.internal}\n' +
        'translation.translatable.domains.regex=\n' +
        '\n' +
        '#excluded domains within the include domains; domains or urls listed here are exceptions to to the translatable domains and are NOT translatable; query parameters may be used\n' +
        'translation.translatable.domains.exclude=\\\n' +
        ' linkedin.com,\\\n' +
        ' twitter.com,\\\n' +
        ' facebook.com\n' +
        'translation.translatable.domains.exclude.regex=\n' +
        '\n' +
        '#url or parameter patterns that are required in url for translation; used to specify page ids, etc. in partial site translations\n' +
        'translation.translatable.domains.mustinclude=\n' +
        'translation.translatable.domains.mustinclude.regex=\n' +
        '\n' +
        '######## to qualify for implicit navigation a url must be a sub-url of a url in the included list\n' +
        '######## and it must not be a sub-url of a url in the excluded list\n' +
        'translation.implicitnav.pageurlrs.include={translation.translatable.domains}\n' +
        'translation.implicitnav.pageurlrs.include.regex=\n' +
        '\n' +
        '#excluded URLs within the include list\n' +
        'translation.implicitnav.pageurlrs.exclude={translation.translatable.domains.exclude},{host.server.pages},{host.server.pages.internal}\n' +
        'translation.implicitnav.pageurlrs.exclude.regex=\n' +
        '\n' +
        '#force inclusion of urls that would nor mally be excluded because of their extension\n' +
        'translation.implicitnav.pageurlrs.autoexcluded.include=\n' +
        'translation.implicitnav.pageurlrs.autoexcluded.include.regex=\n' +
        '\n' +
        '#urls for which the translation server should not do any processing and simply pass through the response\n' +
        'translation.implicitnav.pageurlrs.passthrough=\\\n' +
        ' mp-passthrough\n' +
        '# /about-us/committees/\n' +
        'translation.implicitnav.pageurlrs.passthrough.regex=\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## TRANSPARENT URL MODE MAPPINGS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#if true, the server operates in transparent url mode and urls are resolved  based on mappings defined\n' +
        '#NOTE: Any urls that cannot be resolved based on transparent url mappings revert to friendly urls, so friendly URL MUST ALSO be enabled\n' +
        'translation.transparenturls=true\n' +
        '\n' +
        '###############Production Mappings#######################\n' +
        '#one or more mappings using the following format: translationServerUrlPath::OriginalUrl\n' +
        '#translationServerUrlPath MUST BE A RELATIVE PATH\n' +
        '#OriginalUrl MUST BEGIN WITH A CLIENT HOST NAME\n' +
        'translation.transparenturls.mappings.regex=\\\n' +
        ' \\\\A/_res_cloudhost_com/(\\\\??.*)::res.cloudhost.com/$1,\\\n' +
        ' \\\\A/sdcdn/dcms/(\\\\??.*)::cdn.cms.biz/$1,\\\n' +
        ' \\\\A/(\\\\??.*)::www.example.com/$1\n' +
        '\n' +
        '#mappings used for implicit navigation using the following format: OriginalUrl::translationServerUrlPath\n' +
        '#OriginalUrl MUST BEGIN WITH A CLIENT HOST NAME\n' +
        '#translationServerUrlPath MUST BE A PATH starting at the root level, but without the begining forward slash\n' +
        'translation.transparenturls.implicitnav.mappings.regex=\\\n' +
        ' .*?/res\\\\.cloudhost\\\\.com/?(\\\\??.*)::_res_cloudhost_com/$1,\\\n' +
        ' .*?/cdn\\\\.cms\\\\.biz/?(\\\\??.*)::sdcdn/dcms/$1,\\\n' +
        ' .*?(?:/|www\\\\.)example\\\\.com/?(\\\\??.*)::$1\n' +
        '\n' +
        '###############Staging Mappings#######################\n' +
        '#one or more mappings using the following format: translationServerUrlPath::OriginalUrl\n' +
        '#translationServerUrlPath MUST BE A RELATIVE PATH\n' +
        '#OriginalUrl MUST BEGIN WITH A CLIENT HOST NAME\n' +
        'translation.transparenturls.mappings.regex.es.example.cms.biz=\\\n' +
        ' \\\\A/sdcdn/dcms/(\\\\??.*)::cdn.cms.biz/$1,\\\n' +
        ' \\\\A/(\\\\??.*)::example.cms.biz/$1\n' +
        '\n' +
        '#mappings used for implicit navigation using the following format: OriginalUrl::translationServerUrlPath\n' +
        '#OriginalUrl MUST BEGIN WITH A CLIENT HOST NAME\n' +
        '#translationServerUrlPath MUST BE A PATH starting at the root level, but without the begining forward slash\n' +
        'translation.transparenturls.implicitnav.mappings.regex.es.example.cms.biz=\\\n' +
        ' .*?/cdn\\\\.cms\\\\.biz/?(\\\\??.*)::sdcdn/dcms/$1,\\\n' +
        ' .*?(?:/|www\\\\.)example\\\\.cms\\\\.biz/?(\\\\??.*)::$1\n' +
        '\n' +
        '#transparent URL mappings for additional host name: es.old-domain.org\n' +
        '#host.name.map.es.old-domain.org=\\\n' +
        '#www.old-domain.org\n' +
        '\n' +
        '#translation.transparenturls.mappings.regex.es.old-domain.org=\\\n' +
        '#\\\\A/(\\\\??.*)::old-domain.org/$1\n' +
        '\n' +
        ' #\\\\A/sdold-domain/(\\\\??.*)::old-domain.org/$1,\\\n' +
        '\n' +
        '#translation.transparenturls.implicitnav.mappings.regex.es.old-domain.org=\\\n' +
        '#.*?(?:/|www\\\\.)old-domain\\\\.org/?(\\\\??.*)::$1\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## PAGE/FILE EXTENSIONS & URLs ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '####### page/file extensions and directory names to supplement internal tables to recognize type of url,\n' +
        "####### and to detect relative URLs in JavaScript and in tags listed in 'translation.process.tags'\n" +
        '####### IMPORTANT NOTE: multiple variations of the same extension must be listed in superset->subset order (e.g., php3,php)\n' +
        '#html page extensions; html & htm are automatically recognized\n' +
        'translation.url.extensions.html=aspx,asp\n' +
        '#extensions of images; jpg, gif, jpeg and jpe are automatically recognized\n' +
        'translation.url.extensions.img=png\n' +
        '#extensions of other files; pdf is automatically recognized\n' +
        'translation.url.extensions.file=\n' +
        '#directory names are only necessary for relative urls with no page extensions; this may also be a specific pattern in the url\n' +
        'translation.url.directories=\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## REDIRECTION PROPERTIES ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#url patterns for which to perform a specific 301 permanent url redirection; these apply to the full translation url , including the query string\n' +
        '#this can also be used when the tserver host name changes and we need old bookmarked/indexed pages to redirect to the new host name, and provides more flexibility\n' +
        '#redirection is performed even if the URL is not translatable\n' +
        '\n' +
        'urls.redirect.regex=\\\n' +
        ' (.*?)//es\\\\.example\\\\.com/health-library/(.*)\n' +
        '\n' +
        '#for each url pattren above, specify the url to explicitly set the Location header\n' +
        'urls.redirect.location.(.*?)//es\\\\.example\\\\.com/health-library/(.*)=$1//es.example.com/biblioteca-de-salud/$2\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## CUSTOM PLUGINS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#list of fully qualified class names of plugin handlers\n' +
        '#translation.plugin.handlers=com.motionpoint.servlet.translation.plugin.e4x.E4xPlugIn\n' +
        'translation.plugin.handlers=\\\n' +
        ' com.motionpoint.servlet.translation.plugin.util.PasswordPlugIn\n' +
        '#for each plugin handler specify the URL regex pattern that the plugin will handle\n' +
        'translation.plugin.handler.urls.regex.com.motionpoint.servlet.translation.plugin.util.PasswordPlugIn=.*\n' +
        '#username/password list\n' +
        'translation.plugin.PasswordPlugIn.userpasswords=username:Password\n' +
        '# Exclude regex list, comma separated\n' +
        'translation.plugin.PasswordPlugIn.urls.exclude.regex=.*javascript\\\\.js.*,.*checkout=.*\n' +
        '# Include IP address list, comma separated.\n' +
        'translation.plugin.PasswordPlugIn.ips.include=\n' +
        '# Exclude IP address list, comma separated\n' +
        'translation.plugin.PasswordPlugIn.ips.exclude=132.456.789.2,256.584.412.2,111.111.111.1\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## HEADERS & COOKIES ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#if true, the "Accept-Encoding: gzip" request header is suppressed, preventing the client server from sending compressed data to the translation server\n' +
        'translation.headers.request.suppress.acceptencoding.gzip=false\n' +
        '\n' +
        '#request header in which to forward client IP address, translation server host name & language code\n' +
        '#to send the language code in more than one header multiple comma separated header names can be specifed\n' +
        '#to send the IP in more than one header multiple comma separated header names can be specifed\n' +
        'translation.headers.request.clientip=X-Forwarded-For\n' +
        'translation.headers.request.tserverhost=X-Forwarded-Host\n' +
        'translation.headers.request.language=X-Language\n' +
        '\n' +
        '#if true, the X-MPTrans-XXXX directive response headers are recognized and processed\n' +
        'translation.headers.directive.recognize=true\n' +
        '\n' +
        '#list of MotionPoint cookies that are not to be passed to the client web site\n' +
        'translation.cookie.mp.disable=mptrans,mp_clientip\n' +
        '\n' +
        '#patterns of URLs for which an X-Robots-Tag response header is sent to prevent indexing and caching of page content in search engines that support this header such as Google and Yahoo; use .* for all urls\n' +
        'translation.headers.response.preventindex.searchengines.urls.regex=\\\n' +
        ' .+\\\\.convertlanguage\\\\.com.*,\\\n' +
        ' .+example\\\\.cms\\\\.biz.*\n' +
        '\n' +
        '#for urls listed below the Accept request header sent by browser is forwarded directly to the origin site\n' +
        'translation.headers.request.accept.forward.urls.regex=.*\n' +
        '\n' +
        '##URL regex patterns for which the original content-type response header must be forwarded intact to the browser, only changing the charset if necessary\n' +
        '#translation.headers.response.forward.contenttype.urls.regex=.*\n' +
        '\n' +
        '#if true, a post request with bootstrap cookies results in an HTTP 302 temporary redirect response to the translated page with response headers setting the cookies on the translated domain\n' +
        '#if false, the tserver performs a GET on the original url and returns a translated page in the response\n' +
        '#this setting is desirable to avoid browser repost issues when a user hits the browser back button right after the post request\n' +
        'translation.cookie.bootstrap.redirectonpost=true\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## JAVASCRIPT HANDLING ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#set to true to use new JS parser; if true, ALL JavaScript files are processed by the text detection parser, instead of just the ones listed in translation.js.textdetect\n' +
        'translation.js.newparser=3\n' +
        '\n' +
        '#Javascript include files that must be processed (i.e., contain urls and/or translatable text)\n' +
        'translation.js.process.files=\\\n' +
        ' .css,\\\n' +
        ' engine.js,\\\n' +
        ' fields.js,\\\n' +
        ' /dynamicscript/?id=,\\\n' +
        ' /DependencyHandler.axd\n' +
        '\n' +
        'translation.js.process.files.regex=\\\n' +
        ' .*sa\\\\.Calendar\\\\.v1\\\\..*\\\\.js.*,\\\n' +
        ' .*vendors~client\\\\.global\\\\..*\\\\.js.*,\\\n' +
        ' .*vendors~sa\\\\.Blog\\\\.v1~sa\\\\.Calendar\\\\.v1.*\\\\.js.*,\\\n' +
        ' .*vendors~sa\\\\.global\\\\..*\\\\.js.*,\\\n' +
        ' .*sa\\\\.global\\\\..*\\\\.js.*\n' +
        '\n' +
        '#JSON files that must be processed as JSON and contain urls and/or translatable text\n' +
        'translation.json.process.files=\\\n' +
        ' /DataList?list,\\\n' +
        ' /GetDefinition?id=\n' +
        'translation.json.process.files.regex=\n' +
        '\n' +
        '#disable lib detection in case files are being ignored\n' +
        '#translation.js.disposition.sequence.detectLibs=false\n' +
        '\n' +
        '#By default URLs that are detected as Protocol-Less Absolute URLs are NOT being processed by default.\n' +
        '#Processing for those types of URLs is only enabled globally by setting the property to true.\n' +
        '#translation.js.disposition.handleProtocolLessUrl=true\n' +
        '\n' +
        '#folders that are considered root folders\n' +
        '#translation.js.disposition.rootRelativeUrlPaths=\n' +
        '\n' +
        '### Available Dispositions ###\n' +
        '#naturalLanguage - processing content that is only text\n' +
        '#absoluteUrl - applying any URL processing rules.\n' +
        '#ignore - ignoring processing of this specific string\n' +
        '#json - processing as json\n' +
        '#html - processing as html\n' +
        '#javascript - processing as javascript\n' +
        '\n' +
        '### string\n' +
        'translation.js.disposition.string.ignore=\\\n' +
        " 'Th','Month',\"Month\",'Year',\"Year\",'Mo',\"Today\",'Today','No Transport','th','Coordinated Universal Time','year','quarter','month','week','day','hour','minute','second','millisecond',\"Circular dependency found with \",\"Test Data\",'Widget must be of type \"namespace\"',\"The top level widget should be a namespace\",\"Composite Fields\",\"Event Cost (Linked to Credit Card amount)\",\"Event node ID\",\"Event occurrence date\",\"Event title\",\"Hide values\",\"If enabled, will not allow submitters to see the actual value of the item selected. This is a good way to hide email addresses and other information you wouldn't normally want public.\",\"Shared Data List\",\"Instead of adding items below, you can choose from your shared Data Lists.\",\"Job node ID\",\"Allows you to get the To: address from a field in your form\",\"Use a field for the To: address\",\"Get To: address from\",\"Force test mode\",\"This ensures this form will force the gateway into test mode.\",\"File upload\",\"Max files\",\"Max must be a whole number between 1 and 10\",\"Allowed file types (comma separated list of mime types or file extensions)\",\"Show allowed file type list\",\"Show allowed file type list\",\"File upload\",\"Radio Buttons\",'Location types','Showing all ','No address found','Location 1','Location 2','Location 3','Location 4','Location 5','Location not found','First & last required','Invalid item type found ','Unknown data type','Data items not present. Maybe the converter did not return any values','Invalid item type found ','Unknown data type','No entries found','Still loading data...',\"No Transport\",\"today\",\"week\",\"month\"\n" +
        '\n' +
        '### naturalLanguage\n' +
        'translation.js.disposition.string.naturalLanguage=\\\n' +
        ' \'all-day\',\'Sun_Mon_Tue_Wed_Thu_Fri_Sat\',\'Su_Mo_Tu_We_Th_Fr_Sa\',\'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec\',\'January_February_March_April_May_June_July_August_September_October_November_December\',"Person requesting card (if other than member)","Zip","Address","City","State","First","Middle","Last","January","February","March","April","May","June","July","August","September","October","November","December","Date of birth"," is required"," Page "," of ","\\\\n                    Back\\\\n                ","Submit","Close all","Open all","All","Providers","Services","Locations","Search","Events","\\\\n                                Page ","sun","mon","tue","wed","thu","fri","sat","\\\\n                                Grid\\\\n                            "\n' +
        '\n' +
        '### objectKeyValue\n' +
        'translation.js.disposition.objectKeyValue.ignore=\\\n' +
        ' "name","definitionName","iconClass","Relationship to member","Rich Text Display","Text Length","$field does not meet the length requirements","Maximum Length","Minimum Length","Other","Horizontal Layout","Relationship to member","Instead of adding items below, you can choose from your shared Data Lists.","Dropdown","Shared Data List","If enabled, will layout your fields horizontally. If there is not enough room, fields will eventually move to the next row.","<p>A group allows you to combine multiple fields into a single, movable container. Doing this makes it much easier to hide many fields with a single expression. It is also an easy way to layout your fields horizontally.</p>","$field must be checked","Checked","Middle Name Required","Middle Name Visible","First Name Required","Show Country","Show Address 2","Show Name","Display these fields in the List View","These fields will be included in the Submissions tab list of your form"\n' +
        '\n' +
        '### objectKeyValue\n' +
        'translation.js.disposition.objectKeyValue.naturalLanguage=\\\n' +
        ' "name",\\\n' +
        ' "value"\n' +
        '\n' +
        '### objectValueJsonPath\n' +
        '#translation.js.disposition.objectValueJsonPath.#####=\n' +
        '\n' +
        '### functionName\n' +
        'translation.js.disposition.functionName.ignore=\\\n' +
        ' Utils.warnOnce,\\\n' +
        ' deprecate,\\\n' +
        ' deferred.reject,\\\n' +
        ' inst\n' +
        '\n' +
        '\n' +
        '### objectKey\n' +
        'translation.js.disposition.objectKey.ignore=\\\n' +
        ' ordering,\\\n' +
        ' dayIDs\n' +
        '\n' +
        'translation.js.disposition.objectKeyValue.html=\\\n' +
        ' "value"URL>>/getdefinition?id=<<URL\n' +
        '\n' +
        '### codeBlockComponent\n' +
        '#translation.js.disposition.codeBlockComponent.#####=\n' +
        '\n' +
        '### byteCodeCodeBlockComponent\n' +
        '#translation.js.disposition.byteCodeCodeBlockComponent.#####=\n' +
        '\n' +
        '### assignment\n' +
        '#translation.js.disposition.assignment.#####=\n' +
        '\n' +
        '### Pattern Matching\n' +
        '### valueMatch Types: contains,regex,exact,beginsWith,endsWith\n' +
        'translation.js.disposition.ids=1\n' +
        '\n' +
        'translation.js.disposition.1.disposition=ignore\n' +
        'translation.js.disposition.1.selector=string\n' +
        'translation.js.disposition.1.selector.string.value="(?:(?!\\\n' +
        '   Please|Email must|Did you mean|It looks like you|Must contain only numbers|The number you entered is not in range|Click here to reset|Sorry|Failed to validate|\\\n' +
        '   This form|There was an issue|Your response was submitted|Not you|Next|Previous|Step).)*"\n' +
        'translation.js.disposition.1.selector.string.valueMatch=regex\n' +
        'translation.js.disposition.1.urlRestrictions=/_hcms/forms/v2.js\n' +
        '\n' +
        '####### pages for which comments tags must be processed for urls and/or text just like a JavaScript block; JS delimiter rules apply\n' +
        '#MS Office generated pages with xmlns:o=urn:schemas-microsoft-com require this\n' +
        '#multiple urls by pattern or use a single asterisk * for ALL pages in the site\n' +
        'translation.tags.comment.process.url=\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## FILE TRANSLATION HANDLING ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#urls patterns when doing direct file translation which redirect the browser to the original file, instead of reading and returning it, when the file does not need translation\n' +
        '#improves performance as the server has to do less network calls and work; use * for all files\n' +
        '#translation.files.direct.originalfile.redirect=*\n' +
        'translation.files.direct.originalfile.redirect.regex=(?:(?!\\\\.woff|\\\\.ttf|\\\\.svg|\\\\.eot|\\\\.otf|/image/upload/).)*\n' +
        '\n' +
        '#urls patterns when doing direct file translation which redirect the browser to the translated file, instead of reading the translated file from disk and returning it\n' +
        '#improves performance as the server has to do less network calls and work; use * for all files\n' +
        '#translation.files.direct.translatedfile.redirect=*\n' +
        'translation.files.direct.translatedfile.redirect.regex={translation.files.direct.originalfile.redirect.regex}\n' +
        '\n' +
        '#translation of files below is performed by redirecting to the translation server via direct file translation; use * for all files\n' +
        '#translation is performed by url (i.e., NORMAL)\n' +
        'translation.files.direct=.woff,.ttf,.svg,.eot,.otf,/image/upload/\n' +
        'translation.files.direct.regex=\n' +
        '\n' +
        '######## translationthreshold is a pctg number from 0 to 100 (e.g., 90=translation suppressed if page not translated at least 90%)\n' +
        'translation.texttranslationthreshold=0\n' +
        'translation.imgtranslationthreshold=0\n' +
        '\n' +
        '#if true case is preserved for all file urls; if false, all file urls are lowercased\n' +
        '#for multiple domains or platforms, enter a list of url patterns for which case is preserved, or * for all (i.e., true=*)\n' +
        'translation.files.preserve.filecase={local.preserve.filecase}\n' +
        '\n' +
        '#url patterns of files which require www to be previewed in webcatt; use * for all\n' +
        'webcatt.files.prefixwww=\n' +
        '\n' +
        '#files for which translation is suppressed; WebCATT does not create file translations & does not attempt to compute the checksum on these files\n' +
        'translation.files.suppress=.woff,.ttf,.svg,.eot,.otf\n' +
        'translation.files.suppress.regex=\n' +
        '\n' +
        '#exclusions for translation.files.suppress\n' +
        'translation.files.suppress.exclude=\n' +
        'translation.files.suppress.exclude.regex=\n' +
        '\n' +
        '#url patterns of files that are not scheduled for translation by the translation server or WebCATT, but show translated if a translation is available; use * for all files\n' +
        'translation.files.suppress.queue={translation.files.suppress}\n' +
        'translation.files.suppress.queue.regex=\n' +
        '\n' +
        '#if setting below is true, NO images are translated\n' +
        'translation.supresstranslation.images=false\n' +
        '\n' +
        "#if setting below is true, NO PDF files are translated. If false, then some or ALL PDFs are translated depending on 'translation.files.include.pdf'\n" +
        'translation.supresstranslation.pdf=true\n' +
        '#applicable ONLY if translation.supresstranslation.pdf=false. If blank ALL PDFs are translated. Otherwise only the listed PDFs are translated.\n' +
        'translation.files.include.pdf=\n' +
        '\n' +
        '#if setting below is false, NO Flash files are translated. If true, then some or ALL Flash files are translated depending on translation.files.include.swf\n' +
        'translation.enabletranslation.swf=true\n' +
        '#applicable ONLY if translation.enabletranslation.swf=true. If both blank ALL Flash files are translated. Otherwise only the listed files are translated.\n' +
        'translation.files.include.swf=\n' +
        'translation.files.include.swf.regex=\n' +
        '\n' +
        '#alternate file urls; urls are case sensitive\n' +
        'translation.translatable.file.alternateurls=\n' +
        '\n' +
        '#url patterns used to recognize files without extensions or executables that generate images, pdf or flash\n' +
        'translation.files.recognize=\\\n' +
        ' .woff,.ttf,.svg,.eot,.otf,\\\n' +
        ' /mp/custom_CSS/,\\\n' +
        ' /image/upload/\n' +
        '\n' +
        '###################################################################################################\n' +
        '# The release toggle property to enable/disable the feature to provide intrinsic support for the\n' +
        '# processing of urls found in the HTML tag attributes below:\n' +
        '#\n' +
        '#            TAG         SRCSET TYPE ATTRIBUTE\n' +
        '#            ========    =====================\n' +
        '#            <img>       srcset\n' +
        '#            <source>    srcset\n' +
        '#            <link>      imagesrcset\n' +
        '#\n' +
        'translation.process.tag.rt.ProcessSrcset=true\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## SESSION PARAMETERS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '####### session parameters to be removed from URL\n' +
        'translation.sessionparams=\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## TEXT HANDLING ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#if true, sentence parsing is enabled (i.e. paragraphs are further broken down into sentence segments)\n' +
        'translation.html.parse.sentence=true\n' +
        '\n' +
        '#if true, each keyword in a <meta name="keywords" content="kwd1,kwd2, kwd3,.."> tag is parsed into an individual segment\n' +
        'translation.html.parse.keywords=true\n' +
        '\n' +
        '#if true, special single/double quotes and dashes are converted to the standard single/quote & dash\n' +
        'translation.segment.normalize.specialchars=true\n' +
        '\n' +
        '#parsing behavior for numbers found inside segments:\n' +
        '# 0: All numbers are converted to {[#]} (this is the default setting if this property is not specified)\n' +
        '# 1: All numbers are converted to {[#1]} {[#2]}, etc. so that number re-reordering can be done\n' +
        '# 2: All numbers are left alone\n' +
        'translation.segment.numberbehavior=1\n' +
        '\n' +
        '#if true, formatting tags in segments are normalized and do not count towards word count (eja:05/16/08)\n' +
        'translation.segment.normalize.formattingtags=true\n' +
        '\n' +
        '#for segments matching the patterns below, translation is suppressed; this property is case sensitive\n' +
        '#if a segment or an expression has commas, use the {%2C} marker in place of the comma\n' +
        '#1. regex to block email addresses from queue.\n' +
        'translation.segment.supress.regex=\\\n' +
        ' \\\\A[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2{%2c}4}\\\\z,\\\n' +
        ' \\\\A\\\\[Last\\\\] dddd \\\\[at\\\\] LT\\\\z,\\\n' +
        '#  \\\\A(?:\\\\{\\\\{[^\'"]+\\\\}\\\\}\\\\s*)+\\\\z\n' +
        '\n' +
        '\n' +
        '#for URL patterns listed below, segments consisting only of numbers and symbols are recognized as translatable; by default these segments are not translatable\n' +
        'translation.segment.allownumeric.urls.regex=.*\n' +
        '\n' +
        '#########Save image size and resolution as part of image activity##########\n' +
        'file.translation.details.insertion.enable=true\n' +
        '\n' +
        "##Tserver property to allow OSS to work with terms added by 'Term Extractor Job'\n" +
        '##To indicate that “version” column must not be used to filter data;\n' +
        'translation.machine.reverse.primary.data.version=-1\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## REVERSE MACHINE TRANSLATION OF SEARCH TERMS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#character set to use when decoding form data for reverse machine translation-if not specified, the default is UTF-8\n' +
        '#NOTE: For Chinese, Japanese, Arab and other double-byte languages UTF-8 must be used\n' +
        'translation.charset.formdata=UTF-8\n' +
        '\n' +
        '#form field names are case sensitive\n' +
        'translation.machine.reverse.fields=query,search_results.asp\n' +
        'translation.machine.reverse.fields.regex=\n' +
        '\n' +
        '#urls to check for each field or * for all urls; this is the action url of the form(s) that contains the field\n' +
        'translation.machine.reverse.field.urls.include.query=/search/\n' +
        '\n' +
        'translation.machine.reverse.field.urls.include.search_results.asp=/search_results.asp\n' +
        'translation.machine.reverse.field.json.urls.include.search_results.asp./search_results.asp=txtSearch\n' +
        'transiation machine.reverse.field.json.urls.incude.regex.search_results.asp./search_results.asp.txtSearch=.*\n' +
        '\n' +
        '######## TRANSLATABLE TAG TEXT ########\n' +
        '##HTML or XML tags that contain attributes with text, HTML or XML to be translated if they meet the specific set of conditions below\n' +
        '#In the case of HTML and XML, the attribute value is reparsed as HTML or XML code\n' +
        '#(1) tags listed in translation.tags.text or translation.tags.text.casesensitive\n' +
        '#(2) attribute name(s) that contain values with translatable text must be listed in translation.tags.text.atrs.TAGNAME,\n' +
        '#\tattribute name(s) that contain values with HTML must be listed in translation.tags.text.html.atrs.TAGNAME\n' +
        '#\tattribute name(s) that contain values with XML must be listed in translation.tags.text.xml.atrs.TAGNAME\n' +
        '#\tattribute name(s) that contain values with JSON must be listed in translation.tags.text.json,atrs.TAGNAME\n' +
        '#(3) must appear in one or more specified url patterns in translation.tags.text.urls.TAGNAME; or leave blank for all URL patterns\n' +
        '#(4) must include one or more attributes with one or more values that match a pattern; value patterns may be left blank to allow all values\n' +
        '#(5) must exclude one or more attributes with one or more values that match a pattern; value patterns may be left blank to allow all values\n' +
        '#By default the following tags and attributes are processed for translatable text:\n' +
        '#    \t<img title="text" alt="text">\n' +
        '#\t<area title="text" alt="text">\n' +
        '#\t<a title="text">\n' +
        '#\t<input type="submit"|type="reset"|type="button" value="text">\n' +
        '#\t<meta name="keywords"|name="description" content="text">\n' +
        '\n' +
        'translation.tags.text=div\n' +
        'translation.tags.text.html.atrs.div=data-bgset\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## CUSTOM TAG HANDLING ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '####### list of additional tags that may contain urls to be processed\n' +
        "####### for each tag one or more attributes may be defined using the 'translation.process.tag.attributes.tagName' property\n" +
        "####### if no attributes are defined for a tag, then the 'mpnav' attribute is required for url processing of that tag\n" +
        'translation.process.tags=option\n' +
        'translation.process.tag.attributes.option=value\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## FORMATTING TAGS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#HTML formatting tags that do not break up text segments & become part of a segment (note: removed br, as of, 4-5-2006)\n' +
        'translation.tags.format=abbr,acronym,b,big,blink,cite,code,del,em,font,i,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,u,var,nobr,a,span\n' +
        '\n' +
        '#format tags that do NOT become format tags when repeated twice or more in succession (e.g., <br><br>); tags listed below must also be listed in translation.tags.format.\n' +
        'translation.tags.format.inhibitonrepeat=br\n' +
        '\n' +
        '#HTML tags for that do not break up text segments and are thrown out\n' +
        'translation.tags.throwout=\n' +
        '\n' +
        '#if true, formatting tags are processed, rewriting any urls, processing text in attributes, etc.\n' +
        'translation.tags.format.process=true\n' +
        '\n' +
        '######## CONDITIONAL FORMATTING TAG HANDLING ########\n' +
        '#HTML tags that do not break-up segments & become part of a segment if they meet the specific set of conditions below:\n' +
        "#(1) tags listed in 'translation.tags.format.conditional'\n" +
        "#(2) must appear in one or more specified url patterns in 'translation.tags.format.condition.urls.TAGNAME'; or leave blank for all URL patterns\n" +
        '#(3) must include one or more attributes with one or more values that match a pattern; value patterns may be left blank to allow all values\n' +
        '#(4) must exclude one or more attributes with one or more values that match a pattern; value patterns may be left blank to allow all values\n' +
        '\n' +
        'translation.tags.format.conditional=\n' +
        '\n' +
        'translation.tags.text.structureddata.enable=true\n' +
        '\n' +
        '#Enable saving of dynamically generated segments due to Reserved Term application in ##database for tracking purposes.\n' +
        'translation.segment.reservedterm.tracking=true\n' +
        '#if locked segments with Reserved Term need to be captured for tracking.\n' +
        'translation.segment.reservedterm.tracking.handle.locked=true\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## TRANSFORMATIONS ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#### REGEX Metacharacters ()[]{}\\^$|?*+.\n' +
        'translation.transform.ids=\\\n' +
        ' 1,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21\n' +
        '\n' +
        '#XX | Ticket #5125482 | JUN-13-2019 |  Breaking title text segments by the pipe\n' +
        'translation.transform.search.regex.1=\\\\s\\\\|\\\\s\n' +
        'translation.transform.replace.1=<!-- mp_trans 1 -->|<!-- mp_trans 1 -->\n' +
        'translation.transform.types.1=titletext\n' +
        'translation.transform.urls.regex.1=.*\n' +
        '\n' +
        '#XX | JUL-10-2019 | Ticket #5125482 | Localizing google maps\n' +
        'translation.transform.search.regex.5=href="([^>]+)/maps/dir/Current\\\\+Location/(.*?)"\n' +
        'translation.transform.replace.5=href="$1/maps/dir/Current+Location/$2?hl=es"\n' +
        'translation.transform.types.5=tag\n' +
        'translation.transform.condition.regex.5=<a.*/maps/dir/Current\\\\+Location/.*\n' +
        'translation.transform.urls.regex.5=.*\n' +
        '\n' +
        '#XX | AUG-05-2019 | Ticket #5125482 | add translated url\n' +
        'translation.transform.search.regex.6=https://member.example.com/\n' +
        'translation.transform.replace.6=https://es.member.example.com/\n' +
        'translation.transform.types.6=url\n' +
        'translation.transform.condition.regex.6=//member\\\\.example\\\\.com/.*\n' +
        'translation.transform.urls.regex.6=.*\n' +
        '\n' +
        '#XX 08/06/2019 Ticket #5125482/456464.6 - Block PDF Titles\n' +
        'translation.transform.search.regex.7=(.+)\n' +
        'translation.transform.replace.7=<!-- mp_trans_disable_start 7 -->$1<!-- mp_trans_disable_end 7 -->\n' +
        'translation.transform.types.7=text\n' +
        'translation.transform.precondition1.regex.7=<a rel="noopener".*\\\\.pdf.*\n' +
        'translation.transform.condition.regex.7=(?:(?!English|Spanish|Fraud report form).)*\n' +
        'translation.transform.urls.regex.7=.*\n' +
        'translation.transform.excludeurls.regex.7=\\\n' +
        ' .*newdomain\\\\.cms\\\\.biz/.*,\\\n' +
        ' .*www\\\\.old-domain\\\\.org.*\n' +
        '\n' +
        '#XX 08/06/2019 Ticket #5125482/677544.6 - Block PDF Titles\n' +
        'translation.transform.search.regex.8=title=\n' +
        'translation.transform.replace.8=mpdistrans title=\n' +
        'translation.transform.types.8=tag\n' +
        'translation.transform.condition.regex.8=<a rel="noopener".*\\\\.pdf.*\n' +
        'translation.transform.urls.regex.8=.*\n' +
        'translation.transform.excludeurls.regex.8=.*/children-s-services/.*\n' +
        '\n' +
        '#XX | AUG-11-2019 | Ticket #5125482 | Block search kwd\n' +
        'translation.transform.search.regex.9=value="\n' +
        'translation.transform.replace.9=mp_trans_searchkwd="value" value="\n' +
        'translation.transform.types.9=tag\n' +
        'translation.transform.condition.regex.9=<input id="SearchTermInput".*\n' +
        'translation.transform.urls.regex.9=.*example\\\\.cms\\\\.biz/search/.*\n' +
        '\n' +
        '#XX | AUG-16-2019 | Ticket #5125482 | Translation on output\n' +
        'translation.transform.search.regex.10=\\\\[e\\\\._v\\\\("Submit"\\\\)\\\\]\n' +
        'translation.transform.replace.10=[e._v("Enviar")]\n' +
        'translation.transform.types.10=js\n' +
        'translation.transform.search.casesensitive.10=true\n' +
        'translation.transform.urls.regex.10=.*fields\\\\.js(?:\\\\?.*)?\\\\z\n' +
        '\n' +
        '#XX | AUG-22-2019 | Ticket #5125482 | Removing unnecessary rewrites\n' +
        'translation.transform.search.regex.11=<a href="\\\\\\n"\\\\\\/>\':\'<div a="\\\\\\n"\\\\\\/>\n' +
        'translation.transform.replace.11=<a href="\\\\\\n"/>\':\'<div a="\\\\\\n"/>\n' +
        'translation.transform.types.11=js\n' +
        'translation.transform.search.casesensitive.11=true\n' +
        'translation.transform.urls.regex.11=.*/DependencyHandler\\\\.axd.*\n' +
        '\n' +
        '#XX | AUG-22-2019 | Ticket #5125482 | Removing unnecessary rewrites\n' +
        "translation.transform.search.regex.12=href='https://es\\\\.example\\\\.cms\\\\.biz/a'\n" +
        "translation.transform.replace.12=href='/a'\n" +
        'translation.transform.types.12=js\n' +
        'translation.transform.search.casesensitive.12=true\n' +
        'translation.transform.urls.regex.12=.*/DependencyHandler\\\\.axd.*\n' +
        '\n' +
        '#XX | AUG-27-2019 | Ticket #5125482 | Switching origin URLs for easylink toggle to work\n' +
        '#OSite\n' +
        "translation.transform.search.regex.13=(oSite\\\\s*[:=]\\\\s*decodeURIComponent\\\\('https?%3A%2F%2F)[^']+'\\\\)\n" +
        "translation.transform.replace.13=$1www.example.com%2F')\n" +
        'translation.transform.types.13=html\n' +
        'translation.transform.output.13=true\n' +
        'translation.transform.urls.regex.13=\\\n' +
        ' .*example\\\\.com.*,\\\n' +
        ' .*example\\\\.cms\\\\.biz.*\n' +
        '\n' +
        '#XX | AUG-27-2019 | Ticket #5125482 | Switching origin URLs for easylink toggle to work\n' +
        '#TSite\n' +
        "translation.transform.search.regex.14=(tSite\\\\s*[:=]\\\\s*decodeURIComponent\\\\('https?%3A%2F%2F)[^']+'\\\\)\n" +
        "translation.transform.replace.14=$1{local.host.name}%2F')\n" +
        'translation.transform.types.14=js,tag\n' +
        'translation.transform.output.14=true\n' +
        'translation.transform.urls.regex.14=\\\n' +
        ' .*example\\\\.com.*,\\\n' +
        ' .*example\\\\.cms\\\\.biz.*\n' +
        '\n' +
        '#XX - 10/23/19 - per Ticket# 868806 - Added Contact\n' +
        '#XX | SEP-4-2019 | Ticket #5125482 | DTs\n' +
        'translation.transform.search.regex.15=(Location|Contact):</th>\\\\s*<td>(.*?)</td>\n' +
        'translation.transform.replace.15=$1:</th>{%0a}<td><!-- mp_trans_disable_start 15 -->$2<!-- mp_trans_disable_end 15 --></td>\n' +
        'translation.transform.types.15=html\n' +
        'translation.transform.urls.regex.15=.*/calendar/events/.*\n' +
        '\n' +
        '#XX | AUG-11-2021 | Ticket #5125482 | Activate images\n' +
        '#translation.transform.search.regex.16=res\\\\.cloudhost\\\\.com/dpmykpsih/image/upload/\n' +
        '#translation.transform.replace.16=es.example.com/_res_cloudhost_com/dpmykpsih/image/upload/\n' +
        '#translation.transform.types.16=tag\n' +
        '#translation.transform.output.16=true\n' +
        '#translation.transform.condition.regex.16=<div[^>]+\\\\s*class="c-carousel-slide__image.*\n' +
        '#translation.transform.urls.regex.16=.*\n' +
        '\n' +
        '#XX 25-OCT-21 | 222222/111111\n' +
        'translation.transform.search.regex.17=,http\n' +
        'translation.transform.replace.17=, http\n' +
        'translation.transform.types.17=tag\n' +
        'translation.transform.condition.regex.17=<div .*data-bgset=".*\n' +
        'translation.transform.urls.regex.17=.*\n' +
        'translation.transform.search.regex.18=data-bgset="([^"]+)"\n' +
        'translation.transform.replace.18=data-bgset="<!-- mp_trans_custom_parse_start delim=\',\\\\\\\\s\' urls remove 18 -->$1<!-- mp_trans_custom_parse_end remove 18 -->"\n' +
        'translation.transform.types.18=tag\n' +
        'translation.transform.condition.regex.18=<div .*data-bgset=".*\n' +
        'translation.transform.urls.regex.18=.*\n' +
        '\n' +
        '#XX | 2022-01-03 | 22222 | suppress pdfs\n' +
        'translation.transform.search.regex.19=href="\n' +
        'translation.transform.replace.19=mpdisqueue="href" href=""\n' +
        'translation.transform.types.19=tag\n' +
        'translation.transform.condition.regex.19=<a href="[^"]+\\\\.pdf.*\n' +
        'translation.transform.urls.regex.19=.*\n' +
        '\n' +
        '#XX - 07/13/2022 - Ticket #5125482 - Added Contact\n' +
        'translation.transform.search.regex.20=(<div class="l-calendar-item__content">.+?</div>)\n' +
        'translation.transform.replace.20=<!-- mp_trans_disable_start 20 -->$1<!-- mp_trans_disable_end 20 -->\n' +
        'translation.transform.types.20=html\n' +
        'translation.transform.urls.regex.20=.*/calendar/events/kfhc-asthma-classclase-de-asma.*\n' +
        '\n' +
        '#XX - 08/17/2022 - Ticket #5125482 - Block content\n' +
        'translation.transform.search.regex.21=<th scope="col">Language assistance tagline</th>(.+?</table>)\n' +
        'translation.transform.replace.21=<th scope="col">Language assistance tagline</th><!-- mp_trans_disable_start 21 -->$1<!-- mp_trans_disable_end 21 -->\n' +
        'translation.transform.types.21=html\n' +
        'translation.transform.urls.regex.21=.*/members/interpreter-and-translation-services.*\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## Project code properties ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#Project codes to use when queuing pages for translation\n' +
        '#translation.pages.queue.projectcodes=1\n' +
        '\n' +
        '#PC: Gold\n' +
        '#translation.pages.queue.projectcode.1.url=\\\n' +
        '#//newdomain.cms.biz\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## CUSTOM PAGE HANDLING ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '####### pages for which translation is disabled\n' +
        '#by url\n' +
        'translation.pages.suppressed.url=\\\n' +
        ' /health-library/,\\\n' +
        ' /about-us/committees/,\\\n' +
        ' /about-us/governing-board/,\\\n' +
        ' /about-us/grant-programs/,\\\n' +
        ' /about-us/leadership/,\\\n' +
        ' /about-us/letter-from-the-ceo/,\\\n' +
        ' /about-us/report-to-the-community/,\\\n' +
        ' /about-us/request-for-proposal/,\\\n' +
        ' /providers/,\\\n' +
        ' mp-rule-c,\\\n' +
        ' /health-library-spanish\n' +
        '\n' +
        '#by page title\n' +
        'translation.pages.suppressed.title=\n' +
        '\n' +
        '####### PAGE QUEUE CONTROL ########\n' +
        '# pages that cannot automatically go into the translation queue\n' +
        '#by url\n' +
        'translation.pages.suppressed.queue.url=\\\n' +
        ' {translation.pages.suppressed.url},\\\n' +
        ' example.cms.biz/,\\\n' +
        ' /search/?,\\\n' +
        ' /redirecturls.html,\\\n' +
        ' /checker.html,\\\n' +
        ' /DependencyHandler.axd,\\\n' +
        ' old-domain.org,\\\n' +
        ' calendardate,\\\n' +
        ' /biblioteca-de-salud/\n' +
        '\n' +
        'translation.pages.suppressed.queue.url.regex=\n' +
        '#by page title\n' +
        'translation.pages.suppressed.queue.title=\n' +
        '#excluded IP addresses; requests coming from these IPs will not go into the queue; the last quartet may be left blank (e.g., 65.82.186) to cover the full address range in the last quartet\n' +
        'translation.pages.suppressed.queue.ip=\n' +
        '\n' +
        '####### pages that go into the translation queue by content instead of by url (e.g., shopping cart)\n' +
        '#by url pattern or use a single asterisk * for ALL pages in the site\n' +
        'translation.pages.saved.queue.url=login,checkout,form,submit,account,checkout,cart,api,webservice,booking,confirm,payment\n' +
        '#by url pattern using regular expressions (case-insensitive)\n' +
        'translation.pages.saved.queue.url.regex=\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '# System name indication (SNI) properties.\n' +
        '#################################################################################################################################\n' +
        '###################################################################################################\n' +
        '# The following property enables the SNI extension for\n' +
        '# an additional name verification in a server certificate.\n' +
        '#\n' +
        '# By default the property is set to false (disable behaviour)\n' +
        '# even if not present, to change this include the property\n' +
        '# and change its boolean value to true (not recommended\n' +
        '# as this needs to be disabled to fix a reported issue with\n' +
        '# the additional validation).\n' +
        '\n' +
        'translation.security.enableSNIExtension=true\n' +
        '\n' +
        '\n' +
        '#################################################################################################################################\n' +
        '######## CACHE PROPERTIES ########\n' +
        '#################################################################################################################################\n' +
        '\n' +
        '#if true page cache is static; use false for deployment/production\n' +
        'cache.page.static=false\n' +
        'cache.optimistic=true\n' +
        '\n' +
        '#HTTP CACHING\n' +
        '#if true, automatic http caching of static translated content is enabled, such as translated JavaScript and CSS files\n' +
        'cache.http.enable=true',
      'impact-index': 'HIGH',
      'change-type': 'ON-SITE-SEARCH',
      'line-number': '25',
      'issue-number': '1234.1',
      version: 40,
      URL: 'http://www.motionpoint.com/',
      desc: 'Description of configuration change.',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Add a proxy configuration changeset.
 *
 * body Proxyconfig_body A changeset id is return if succesful. (optional)
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * returns inline_response_200_2
 **/
exports.proxy_configPOST = function (
  body,
  xMotionCoreUserName,
  xMotionCoreQueue
) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      'changeset-id': 1,
      'config-text': '# Configuration text here',
      'impact-index': 'HIGH',
      'change-type': 'ON-SITE-SEARCH',
      'line-number': '25',
      'issue-number': '1234.1',
      version: 40,
      queue: 'EN.ES.1',
      URL: 'http://www.motionpoint.com/',
      desc: 'Description of configuration change.',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieve the versions of a proxy configuration
 *
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * limit Integer Limit the number of items returned. (optional)
 * offset Integer Offset to items returned. Starts at zero. (optional)
 * returns List
 **/
exports.proxy_config_versionsGET = function (
  xMotionCoreUserName,
  xMotionCoreQueue,
  limit,
  offset
) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        'changeset-id': 32,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Joe',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 33,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Joe',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 34,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Joe',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieve a list of available proxy configurations
 *
 * xMotionCoreUserName String User name header
 * returns List
 **/
exports.proxy_configsGET = function (xMotionCoreUserName) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        cn: 'BestBuy',
        qn: 'EN.ES.1',
      },
      {
        cn: 'BestBuy',
        qn: 'EN.ES.1',
      },
      {
        cn: 'Uline',
        qn: 'EN.ES.MX.1',
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
