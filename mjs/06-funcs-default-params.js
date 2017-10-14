


//đặt giá trị mặc định vào biến khi viết hàm ====>func-default-params. nó giúp tránh lỗi undefine
function show(name="diep",price="26"){
	return `<div>Tên khóa học: <b>${name}</b> Giá khóa học: <b>${price}</b></div>`;
}

$(document).ready(function(){
	//$("#mContent").css("color","#0174DF");
	//$("#mContent").html(show());  //khi không truyền giá trị
	//$("#mContent").html(show("hùng", 30));  //khi truyền giá trị
});