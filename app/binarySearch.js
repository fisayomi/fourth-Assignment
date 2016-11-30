
	Array.prototype.toTwenty = function(){
	
		for(var i = 1; i <= 20; i++){
			this.push(i);
		}
		return this;
	}

	Array.prototype.toForty = function(){
		for(var i = 2; i<= 40; i += 2){
			this.push(i);
		}
		return this;
	}

	Array.prototype.toOneThousand = function (){

		for(var i = 10; i <= 1000; i += 10){
			this.push(i);
		}
		return this;
	}

	Array.prototype.search = function(number) {
		this.first = 0;
		this.last = this.length-1
		this.found = false;
		this.result = {};
		this.count = 0;
		this.length;

		while (this.first <= this.last && !this.found){
			this.midpoint = Math.floor((this.last +this.first)/2);

			if(this[this.midpoint] == number){
				this.index = this.midpoint;
				this.found = true;
			}
			else if(this[this.first] == number){
				this.index = this.first;
				this.found = true;
			}
			else if(this[this.last] == number){
				this.index = this.last;
				this.found = true;
			}
			else {
				if (number < this[this.midpoint]){
					this.last = this.midpoint -1;
					this.first = this.first+1;
				}
				else {
					this.first = this.midpoint + 1;
					this.last = this.last-1;
				}

				this.count++
			}
				
		}
		
		if(!this.found){
			this.index = -1;
		}
		this.result["count"] = this.count;
		this.result["index"] = this.index;
		this.result["length"] = this.length;

		

		return this.result;
	}



module.exports = {Array:Array}