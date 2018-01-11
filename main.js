

var sec = document.getElementById('section')
var butt = document.getElementById('dispar');

butt.onclick = function()
    {
   var ssrc = sec.getAttribute('style');
   var bsrc = butt.getAttribute('style');
   if(ssrc === 'display: none;') {
     sec.setAttribute ('style','display: all;');
     butt.setAttribute ('style','display: none;');
    }
}

// pop up
window.onload = function() {
    setTimeout( function fonc( )
        { alert( "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please" ); }
        , 5000) ;};