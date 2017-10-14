//khai báo một lớp
class person {
	constructor(masv,name,age){
		this.masv=masv;
		this.name=name;
		this.age=age;
	}

	//phương thức của đối tượng
	showinfo(){
		return "Ma so:  "+ this.masv + "  Ten:  " + this.name +  "  Tuoi:  " + this.getage();
	}

	getage(){
		let today= new Date();
		let year=today.getFullYear();
		return year-this.age;

	}
}

class student1 extends person {
	constructor(masv,name,age,diem){
		super(masv,name,age);   //gọi lại đối tượng
		this.diem=diem;
	}
}


var nguoi= new person("sv001","diep",1983);
console.log(nguoi.showinfo());

var sv= new student1("sv001","diep",1983,7);
console.log(nguoi.showinfo());