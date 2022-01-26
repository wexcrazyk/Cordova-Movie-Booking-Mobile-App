$(document).ready(function(){

    $('#remove').on('click', function (e) {
        
        var username = $("#user").val();
        var pil = confirm('Are you sure?');

        if (pil==true){
            
            var dataString="username="+ username;
                $.ajax({
                    type: "POST",
                    url: "https://wexpushy.xyz/project/remove.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    success: function(data) 
                    {  
                        if (data == 'success') {
                            alert('Account Removed');
                            window.location.href='index.html'; // website
                            //$.mobile.changePage('home.html', {transition: 'slide'}); // jquery mobile
                        } else if(data == 'error')
                            {alert('Error Occured!');}               
                    },
                    error: function(data)
                    {
                        alert('Connection Error');
                    }
                })              
        }else{
            window.location.href='profile.html';
        }
        
        
    });

});