/* ================ CASE 01 =====================*/
//cho mảng
let a=[123,"ES6","free"];
/*
let a1=a[0];
let a2=a[1];
let a3=a[2];
*/
//cách viết thông thường
//console.log(a1 + "-" + a2 + "-" + a3);


//cách viết theo destrusting
let [a1,a2,a3]=a;
//console.log(a1 + "-" + a2 + "-" + a3);

/* ================ CASE 02 =====================*/
//cho đối tượng

let obj={
	id: 345,
	name: "trần điệp",
	age: 35,
	//createby: "admin123"
}
let {id, name, age, createby="admin"}=obj;
console.log(id + "-" + name + "-" + age + "-" + createby);