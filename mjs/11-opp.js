//khai báo một lớp
class student {	
	constructor(masv,name,age){
		this.ma=masv;
		this.ten=name;
		this.tuoi=age;
	}

	//phương thức của đối tượng
	showinfo(){
		return "Ma so:  "+ this.ma + "  Ten:  " + this.ten +  "  Tuoi:  " + this.getage();
	}

	getage(){
		let today= new Date();
		let year=today.getFullYear();
		return year-this.tuoi;

	}
}

var sv1= new student("sv001","diep",1983);
console.log(sv1.showinfo());