$(document).ready(function(){

    $('#booking').on('click', function (e) {
  
        e.preventDefault();
        e.stopImmediatePropagation();
        var movid = $("#movid").val();
        var username = $("#username").val();
        var cinema = $("#cinema").val();
        var title = $('#title').val();
        var studio = $("#studio").val();
        var date = $("#datepicker_1").val();
        var jam = $("#jam").val();
        
        var dataString="movieid="+ movid +"&username="+ username +"&cinema="+ cinema +"&movie="+ title +"&studio="+ studio + "&datepicker_1="+ date +"&jam="+ jam;
            $.ajax({
                type: "POST",
                url: "https://wexpushy.xyz/project/tambah.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                success: function(data) 
                {  
                    if (data == 'success') {
                        alert('Booking successful!');
                        window.location.href='home.html'; // website
                        //$.mobile.changePage('home.html', {transition: 'slide'}); // jquery mobile
                    } else if(data == 'error')
                        {alert('Sorry, failed to book tickets.');}               
                },
                error: function(data)
                {
                    alert('Connection Error');
                }
            })          
    });

});