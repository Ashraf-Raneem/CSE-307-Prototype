$("#myChart00").hide(); 
$("#myChart01").hide();
$("#myChart02").hide();
$("#myChart04").hide();
$("#schoolDropdown").click(function(){
        $("#deptDropdown").show(); 
})
$(".loadBtn").click(function(){
        $("#myChart00").show(); 
        $("#myChart01").show();
        $("#myChart02").show();
        $(this).hide(); 
})

$(".comparisonLoad").click(function(){
        $("#myChart04").show();
        $(this).hide();
})
//do this 
$("#elementId :selected").val();