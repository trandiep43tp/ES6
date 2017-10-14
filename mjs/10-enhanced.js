

/*============== PROPERTY VALUE shorthand ========================*/
//vd: thiết lập trả về một đối tượng

/*function get_student(name,price,free){
	return {
		ten: name,
		gia: price, 
		mienphi: free
	}
}
console.log(get_student("diep",30,false));
*/

//khi dùng property value shorthand
/*
function get_student(name,price,free){
	return {
		name,   //không truyền biến nữa
		price,  
		free
	}
}
console.log(get_student("Hai dang",30,false));
*/

/*============== METHOD PROPERTY========================*/

function get_student(name,price,free){
	return {
		name,   //không truyền biến nữa
		price,  
		free,
		showinfo1: function(){
			console.log(`${ name + "-" + price + "-" + free}`);
		},
		showinfo2(){
			console.log(`${ name + "-" + price + "-" + free}`);
		},

		//sử dụng methed property
		showinfo3(bien="--"){
			console.log(`${ name + bien + price + bien + free}`);
		}
	}
}

//khai báo một đối tượng
var my=get_student("diep",30, true);
//my.showinfo2();
my.showinfo3();

/*============== COMPUTED PROERTY NAME  ========================*/
//cách thông thường
/*
let khach_hang={
	"cung cap_thit": "diep",
	"cung cap_ca": "hung",
	"cung cap_rau": "hieu"
}
console.log(khach_hang);

*/
//dùng computer property name

let pro="cung cap ---";  //tạo ra biến
let khach_hang={
	[pro + "thit"]: "diep",
	[pro + "ca"]: "hung",
	[pro + "rau"]: "hieu"
}
console.log(khach_hang);












