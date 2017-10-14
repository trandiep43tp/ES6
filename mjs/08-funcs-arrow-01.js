
/*cách khai báo thông thường*/
function func01(name, age){
	return `Func 01-Ten la: ${name}. Tuoi: ${age}`;
}

/*cách 2*/
 var func02=function(name,age){
 	return `Func 02-Ten la: ${name}. Tuoi; ${age}`;
 }

 /*cách 3*/
 var func03=(name,age)=>{
 	return `Func 03-Ten la: ${name}. Tuoi; ${age}`;
 }
//trường hợp có 1 giá trị trả về thì không cần return và {} nữa.
var func04 = (name,age) => `Func 04-Ten la: ${name}. Tuoi: ${age}`;

//trường hợp có 1 biến thì khi viết biến không cần dùng ()
var func05 = name => `Func 05-Ten la: ${name}`;

//trường hợp không có biến nào nữa
var func06 = () =>`Func 06. bai hoc hay`;

//console.log(func06());


//============ Ví dụ ==================

//Hàm map() trong Javascript là một hàm dành cho đối tượng array, hàm này có công dụng tương tự như vòng lăp forEach.
/*
Cú pháp:
	array.map( item =>{
    // item chính là phần tử đang lặp
    return item; // giá trị trả về sẽ thay thế cho giá trị ban đầu của phần tử
});
*/

var khoa_hoc=["addroid","java","php"];

var khoahoc= khoa_hoc.map( kh =>{
			return kh.toUpperCase();
		});
console.log(khoahoc);

//============ Ví dụ 2 ==================

let scores=[1,6,9,2,5,8];
scores.sort(
		(a,b) => b-a //giống cách viết theo func04
	);
console.log(scores);

















