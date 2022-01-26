$(document).ready(function(){

    $('#logout').on('click', function (e) {
        
        var pil = confirm('Are you sure?');

        if (pil==true){
            window.location.href='index.html';             
        }else{
            e.preventDefault();
            e.stipImmediatePropagation();
        }
        
        
    });

});