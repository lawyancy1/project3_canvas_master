
window.onload = function() {
	
	var header = document.getElementsByTagName('header')[0];
	var headerToggleTimeOut = -1;
	var headerMouseDown = false;
	
	document.addEventListener( 'mousedown', function() {
		headerMouseDown = true;
	}, false );
	
	document.addEventListener( 'mouseup', function() {
		headerMouseDown = false;
	}, false );
	
	header.addEventListener('mouseover', function() {
		if (!headerMouseDown) {
			// Listen for Header Call
			clearTimeout( headerToggleTimeOut );
			
			// Time out to shrink
			headerToggleTimeOut = setTimeout( function() {
				header.setAttribute( 'class', 'open' )
			}, 100 );
		}
	}, false);
	
	header.addEventListener('mouseout', function() {
	//Looking for Header call
		clearTimeout( headerToggleTimeOut );
		
		headerToggleTimeOut = setTimeout( function() {
			header.setAttribute( 'class', '' )
		}, 100 );
	}, false);
	
};
