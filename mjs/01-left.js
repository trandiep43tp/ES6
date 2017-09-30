console.log("ABC");
//alert("xin chào");
$(document).ready(function(){
	$('#DRAW').click(function(){
		var p="";
		for(var i=1; i<10;i++){			
				p=p+"<p>"+i+"</p>";				
		}
		
		$('#mContent').html(p);		
	});


	$('#CLEAR').click(function(){

		//lấy giá trị trong thẻ có id=mcontent. còn nếu lấy trong textbox thì.val();
		//var m=$('#mContent').html();  //lấy giá trì
		
		//gán 
		//$('#mContent').html("");
		//$("p").hide(5000);
		$("p").toggle();
	});

	$("p").on({
	    mouseenter: function(){
	        $(this).css("background-color", "lightgray");
	    }, 
	    mouseleave: function(){
	        $(this).css("background-color", "green");
	    }, 
	    click: function(){
	        $(this).css("background-color", "yellow");
	    } 
	});
});