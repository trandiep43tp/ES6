//khai báo một lớp
class person {
	constructor(masv,name,age){
		this.masv=masv;
		this.name=name;
		this.age=age;
	}

	//phương thức của đối tượng
	showinfo(){
		console.log("Ma so:  "+ this.masv + "  Ten:  " + this.name +  "  Tuoi:  " + this.getage());
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

	showinfo(){
		super.showinfo();
		console.log( " diem: " + this.diem);		
	}
}


var nguoi= new person("sv","dương",2015);
nguoi.showinfo();

var sv= new student1("sv002","Hai dang",2011,7);
sv.showinfo(); 