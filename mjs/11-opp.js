//khai báo một lớp
class student {
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

var sv1= new student("sv001","diep",1983);
console.log(sv1.showinfo());