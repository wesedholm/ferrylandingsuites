/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 100,
		logo_img = document.querySelector( '.navbar-logo-img' );

	function init() {
		on_init();
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			classie.add( logo_img, 'narrow' );
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			classie.remove( header, 'p10_0' );
			classie.remove( logo_img, 'narrow' );
		}
		didScroll = false;
	}

	function on_init() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'dark-bg' );
			classie.add( header, 'p10_0' );
			classie.add( logo_img, 'narrow' );
		}
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();