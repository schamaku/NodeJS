module.exports = (x,y,callback) => {
	if(x<=0 || y<=0){
		setTimeout(() => 
			callback(new Error("dimensions must be positive"), 
				null),
			2000);
		console.log("dimensions must be greater than 0 l:" + x + " and b:" + y);
	}
	else{
		setTimeout(() => 
			callback(null, 
				{
					perimeter :() => (2*(x+y)),
                    area :() => (x*y)
				}),
			2000);

	
	}
}







perimeter = (x,y) => (2*(x+y));
area = (x,y) => (x*y); 