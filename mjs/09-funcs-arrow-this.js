

/*============== case 1 ERROR ========================*/
/*
let sinh_vien={
	name: "Hai Dang",
	khoa_hoc: ["Php","Addroid", "Java"],
	showinfo: function(){		
		this.khoa_hoc.forEach(function(kh){
			console.log(`${this.name} hoc khoa hoc ${kh}`); //lỗi không hiện tên
		})
	}
}
*/

/*============== case 1 ========================*/
// không nên làm theo cách này
/*
let sinh_vien={
	name: "Hai Dang",
	khoa_hoc: ["Php","Addroid", "Java"],
	showinfo: function(){
		var _this=this;  //tạo một đối tượng this
		this.khoa_hoc.forEach(function(kh){
			console.log(`${_this.name} hoc khoa hoc ${kh}`);
		})
	}
}
*/

/*============== case 2 su dung .bind() ========================*/
//không nên áp dụng theo cách này
/*
let sinh_vien={
	name: "Dang",
	khoa_hoc: ["Php","Addroid", "Java"],
	showinfo: function(){		
		this.khoa_hoc.forEach(function(kh){
			console.log(`${this.name} hoc khoa hoc ${kh}`);
		}.bind(this))
	}
}
*/


/*============== case 3 su dung arrow func ========================*/

let sinh_vien={
	name: "Hai Dang",
	khoa_hoc: ["Php","Addroid", "Java"],
	showinfo: function(){		
		this.khoa_hoc.forEach( kh => console.log(` ${this.name} hoc khoa hoc ${kh} ` ))
	}
}


sinh_vien.showinfo();












