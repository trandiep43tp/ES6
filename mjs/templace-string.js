$(document).ready(function(){
	$("#mContent1").css("color","#0174DF");
	let name="ES6";
	let price=5;
	
	//theo cách thông thường
	//$("#mContent1").html("<div> Tên khóa học:  <b>"+ name +"</b>  Giá: <b style='color: red'>"+ price +" USD</b> </div>");

	//theo cách sử dụng templace string
	//sử dụng dấu `` và ${ten biến} 
	/*$("#mContent1").html(`<div> Tên khóa học:  <b>${name}</b>
							  Giá: <b style="color: red">${price} USD</b>
					      </div>`);
     */

     let todo={
     	id: 79,
     	name: "playfootball---1",
     	status: false
     };

     $("#mContent1").html(` <div id="todo-id-${todo.id}">
                               <i class=" ${todo.status==true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
                               <span>  ${todo.name}</span>
                            </div>`);
});