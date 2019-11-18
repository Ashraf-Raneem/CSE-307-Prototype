$(".myChart00").hide(); 
$("#deptDropdown").hide(); 
$("#schoolDropdown").click(function(){
        $("#deptDropdown").show(); 
})
$(".loadBtn").click(function(){
        $(".myChart00").show(); 
        $(this).hide(); 
})


//do this 
$("#elementId :selected").val();