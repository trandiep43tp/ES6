/*
function coculate(action,x,y,z){
	let result=0;
	switch(action){
		case "+":
				result=x+y+z;
				break;
		case "-":
				result=x-y+z;
				break;
	}

	return result;
}
*/
/*vấn đề đặt ra là nếu có n biến thì phải làm sao?
	===> use rest param để xử lý.
	khi viết hàm, các biến ta khai báo bằng biến đại diện: ...values
*/

function coculate(action,...values){
	let result=0;
	console.log(values);
	switch(action){
		case "+":
					for(let i of values){
						result+=i;
					}
					break;
		case "-": 
					result=values[0];
					for( let i=1;i< values.length; i++){
						result-=values[i];
					}
					break;
	}
	return result;
}
console.log(coculate("-",3,5,8,9));