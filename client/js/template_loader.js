define([
	"jquery",
	"underscore"
], function($, _){
	var TplCache = Window.TplCache || {};

	var render = function(tmpl_name, tmpl_data) {

	    if ( ! TplCache[tmpl_name] ) {
	        var tmpl_dir = ' js/templates';
	        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

	        var tmpl_string;
	        $.ajax({
	            url: tmpl_url,
	            method: 'GET',
	            async: false,
	            success: function(data) {
	                tmpl_string = data;
	            }
	        });

	        TplCache[tmpl_name] = _.template(tmpl_string);
	    }

	    return TplCache[tmpl_name](tmpl_data);
	}

	return render;
});