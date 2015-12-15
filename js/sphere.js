
(function(){

	var d = document,
		canvas = d.body.appendChild( d.createElement( 'canvas' ) ),
		context = canvas.getContext( '2d' ),
		 time = 1,
		 w = 10,
		 h = 10,
		 cos = Math.cos,
		 sin = Math.sin,
		 PI = Math.PI;
	
	function resize() {
		canvas.width = w = innerWidth;
		canvas.height = h = innerHeight;
	}

	// Browser Size Response
	addEventListener( 'resize', resize, false );

	// Initial size
	resize();
	
	// The main animation loop
	setInterval( function() {
		context.clearRect( 0, 0, w, h );
		context.fillStyle = 'rgba(255, 102, 0,.5)';
		context.globalCompositeOperation = 'lighter';
		context.fillstyle = 'rgba(0, 255, 0, .5)';
		context.globalCompositeOperation = 'color-burn';
		time += .1;
		
		// The number of particles to generate
		i = 7500;
		
		while( i-- ) {
			// Where Math happens lol(Makes stuff go in circles)
			r = ( ( w + h ) * 0.4 ) * ( cos( ( time + i ) * ( .05 + ( ( sin(time*0.00030) / PI ) * .4 ) ) ) / PI );
			
			context.fillRect( sin(i) * r + (w/2), 
							  cos(i) * r + (h/2), 
							  4, 
							  4 );
		}
	}, 32 );
	  
    function keyControls(e) {
        switch(e.keyCode) {
            case 32:
                // spacebar pressed
                loader.directStream('toggle');
                break;
            case 37:
                // left key pressed
                loader.directStream('backward');
                break;
            case 39:
                // right key pressed
                loader.directStream('forward');
                break;
        }   
    }

})()