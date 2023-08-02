$(document).ready(function(){
    $('#target').on('change', function(){
    	var demovalue = $(this).val(); 
        $("div.inv").hide();
        $("#show"+demovalue).show();
    });
});