
function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}

window.onload = function () {
    var parallaxBox = document.getElementById ( 'box' );
    var balloonLeft = document.getElementById ( 'balloon-layer' ).offsetLeft;
    var balloonTop = document.getElementById('balloon-layer').offsetTop;
    var cloud1Left = document.getElementById ( 'cloud-font-layer' ).offsetLeft;
    var cloud1Top = document.getElementById('cloud-font-layer').offsetTop;
    var cloud2Left = document.getElementById ( 'cloud-font-layer' ).offsetLeft;
    var cloud2Top = document.getElementById('cloud-back-layer').offsetTop;


    parallaxBox.onmousemove = function ( event ) {
        debugger;
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;

		mouseParallax ( 'cloud-font-layer', cloud1Left, cloud1Top, x, y, 65 );
		mouseParallax ( 'balloon-layer', balloonLeft, balloonTop, x, y, 25 );
		mouseParallax ( 'cloud-back-layer', balloonLeft, balloonTop, x, y, 10 );
	}
}