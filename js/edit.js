$(document).ready(function(){

    $('#save').on('click', function (e) {
  
        e.preventDefault();
        e.stopImmediatePropagation();

        var username = $('#user').val();
        var password = $("#pass").val();
        var nama = $("#nama").val();
        var phone = $('#phone').val();
        
        var dataString="username=" + username +"&password="+ password +"&nama="+ nama +"&phone="+ phone;    
        $.ajax({
                type: "POST",
                url: "https://wexpushy.xyz/project/edit.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {alert('Processing...');},
                success: function(data) 
                {  
                    if (data == 'success') {
                        alert('Profile Changed');
                        window.location.href='profile.html'; // website
                        //$.mobile.changePage('home.html', {transition: 'slide'}); // jquery mobile
                    } else if(data == 'error')
                        {alert('Error Changing Profile!');}               
                },
                error: function(data)
                {
                    alert('Connection Error');
                }
            })          
    });

});