class AutoInfo {

/*	id: BigInteger;
	maker: String;
	doors: String;
	body: String;
	cylinders: String;
	hp: bigint;
	rpm: bigint;
	price: bigint;
*/
	constructor(id, maker, doors, body, cylinders, hp, rpm, price) {
		this.id = id;
		this.maker = maker;
		this.doors = doors;
		this.body = body;
		this.cylinders = cylinders;
		this.hp = hp;
		this.rpm = rpm;
		this.price = price;    
	}
	
	print() {
		console.log("{id:" + this.id +
		", maker:" + this.maker +
		", doors:" + this.doors +
		", body:" + this.body +
		", cylinders:" + this.cylinders +
		", hp:" + this.hp +
		", rpm:" + this.rpm +
		", price:" + this.price +
		"}");	
	}
	
	get() {
		const auto =("{id:" + this.id +
		", maker:" + this.maker +
		", doors:" + this.doors +
		", body:" + this.body +
		", cylinders:" + this.cylinders +
		", hp:" + this.hp +
		", rpm:" + this.rpm +
		", price:" + this.price +
		"}");
		return auto;
	}
	
	getAutos() {
		const autos = [
			new AutoInfo(1, 'Subaru', 'two', 'hatchback', 'four', 69, 4900, 5118),
			new AutoInfo(2, 'Chevrolet', 'two', 'hatchback', 'three', 48, 5100, 5151),
			new AutoInfo(3, 'Mazda', 'two', 'hatchback', 'four', 68, 5000, 5195),
			new AutoInfo(4, 'Toyota', 'two', 'hatchback', 'four',62, 4800,5348),
			new AutoInfo(5, 'Mitsubishi', 'two', 'hatchback', 'four', 68, 5500,  5389),
			new AutoInfo(6, 'Honda', 'two', 'hatchback', 'four', 60, 5500, 5399),
			new AutoInfo(7, 'Nissan', 'four', 'sedan', 'four', 69, 5200, 6849),
			new AutoInfo(8, 'Dodge', 'four', 'sedan', 'four', 68, 5500, 7609),
			new AutoInfo(9, 'Plymouth', 'four', 'sedan', 'four',68, 5500, 7609),
			new AutoInfo(10, 'Volkswagen', 'two', 'sedan', 'four', 52, 4800,7775),
			new AutoInfo(11, 'Saab', 'two', 'hatchback', 'four', 110, 5250, 11850),
			new AutoInfo(12, 'Peugot', 'four', 'sedan', 'four', 97, 5000, 11900),
			new AutoInfo(13, 'Audi', 'four', 'sedan', 'four', 102, 5500, 13950),
			new AutoInfo(14, 'Porsche', 'two', 'hatchback', 'four', 143, 5500,22018),
			new AutoInfo(15, 'Volvo', 'four', 'sedan', 'four', 114, 5400, 22625),
			new AutoInfo(16, 'Audi', 'four', 'sedan', 'five', 140, 5500, 23875),
			new AutoInfo(17, 'BMW', 'four', 'sedan', 'six', 121, 4250, 24565),
			new AutoInfo(18, 'Benz', 'four', 'sedan', 'five', 123, 4350, 25552),
			new AutoInfo(19, 'Jaguar', 'four', 'sedan', 'six', 176, 4750, 32250)
		];
		return autos;
	}
}

module.exports = AutoInfo;

/*
nissan,gas,std,four,sedan,fwd,four,69,5200,31,37,6849
dodge,gas,std,four,sedan,fwd,four,68,5500,31,38,7609
plymouth,gas,std,four,sedan,fwd,four,68,5500,31,38,7609
volkswagen,diesel,std,two,sedan,fwd,four,52,4800,37,46,7775
saab,gas,std,two,hatchback,fwd,four,110,5250,21,28,11850
peugot,gas,std,four,sedan,rwd,four,97,5000,19,24,11900
audi,gas,std,four,sedan,fwd,four,102,5500,24,30,13950
porsche,gas,std,two,hatchback,rwd,four,143,5500,19,27,22018
volvo,gas,turbo,four,sedan,rwd,four,114,5400,19,25,22625
audi,gas,turbo,four,sedan,fwd,five,140,5500,17,20,23875
bmw,gas,std,four,sedan,rwd,six,121,4250,20,25,24565
mercedes-benz,diesel,turbo,four,sedan,rwd,five,123,4350,22,25,25552
jaguar,gas,std,four,sedan,rwd,six,176,4750,15,19,32250


*/