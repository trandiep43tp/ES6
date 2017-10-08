let todo=["bóng đá", "bóng chuyền", "bóng bàn"];
//console.log(todo);
/* ==================CASE 01 ======================== */
for (let i=0; i<todo.length; i++){
	//console.log(todo[i]);
}

/* ==================CASE 02 ======================== */
for (let index in todo){
	//console.log("Chỉ Số: "+ index + ": " +todo[index]);
}

/* ==================CASE 03 ======================== */
for(let j of todo){
	//console.log(j);
}

/* ==================CASE 04 ======================== */
let todo_obj={
     	id: 79,
     	name: "playfootball---1",
     	status: false
     };
	 //chỉ sử dụng vòng lặp for in để in ra một đối tượng
for(let index in todo_obj){
	//console.log(index);
	//console.log(index + ": "+ todo_obj[index]); //truy cập y như là một arr
}