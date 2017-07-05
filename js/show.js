
var monitor = (function() {

	function button() {
		[].slice.call( document.querySelectorAll( '.wifed' ) ).forEach( function( e, i ) {
			var open = false;
			e.querySelector( '#button' ).addEventListener( 'click', changeView, false );
			function changeView() {
				if( open ) {
					classie.remove( e, 'view-screens' );
				}
				else {
					classie.add( e, 'view-screens' );
				}
				open = !open;
			}
		} );
	}
	function monitor() {
		[].slice.call( document.querySelectorAll( '.wifed' ) ).forEach( function( e, i ) {
			var open = false;
			e.querySelector( '#front' ).addEventListener( 'click', changeView, false );
			function changeView() {
				if( open ) {
					classie.remove( e, 'view-screens' );
				}
				else {
					classie.add( e, 'view-screens' );
				}
				open = !open;
			}
		} );
	}
	function screens() {
		[].slice.call( document.querySelectorAll( '.wifed' ) ).forEach( function( e, i ) {
			var open = false;
			e.querySelector( '#screens' ).addEventListener( 'click', changeView, false );
			function changeView() {
				if( open ) {
					classie.remove( e, 'view-screens' );
				}
				else {
					classie.add( e, 'view-screens' );
				}
				open = !open;
			}
		} );
	}

	button();
	monitor();
	screens();

})();



$('#button').click(function(){
    var $this = $(this);
    $this.toggleClass('close');
    if($this.hasClass('close')){
        $this.text('Close');         
    } else {
        $this.text('Open');
    }
});
$('#front').click(function(){
    var $this = $('#button');
    $this.toggleClass('close');
    if($this.hasClass('close')){
        $this.text('Close');         
    } else {
        $this.text('Open');
    }
});
$('#screens').click(function(){
    var $this = $('#button');
    $this.toggleClass('close');
    if($this.hasClass('close')){
        $this.text('Close');         
    } else {
        $this.text('Open');
    }
});