$(".myChart00").hide(); 
$(".myChart01").hide(); 
$(".myChart02").hide(); 
$(".myChart03").hide(); 
$(".myChart04").hide(); 

$(".loadBtn").click(function(){
    if($(".selectedOption").val()===0){
        $(".myChart00").show(); 
    }
  
})