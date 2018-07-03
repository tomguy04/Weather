// always need document.ready in a jquery file
$(document).ready(function(){
    //always use $.get to retrieve api info
    //$.get(“<url>”, <what to do …function(){}>, ‘what kind of data are we expecting back’ …json);
    
    // get data from a form
    // $('#formid').submit(function(){
        //var localvar = $('#formfieldid').val();
        //do the work, like append, html, get...
        //return false;
    //})
    // 
    $('#weather').submit(function(){
        var city=$('#cityid').val();
        //$.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853',
        $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853',
        function(res){
                //console.log(res);
                
                var temp=res.main.temp;
                $('#weatherresult').html(`<h1>${city}</h1><h3>Temperature: ${temp}</h3>`);
                },'json'
            );
            return false;
        })
})