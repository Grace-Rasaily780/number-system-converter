function binary() {
	var n1 = document.getElementById('space1').value;

	var tempDecimal,rem,binary = 0, place = 1;
	tempDecimal = n1;

	
		while(tempDecimal > 0){
			rem = tempDecimal % 2;
			binary = binary + (rem * place);
			tempDecimal = parseInt(tempDecimal /2);
			place = place * 10; 
		} 
		document.getElementById('out').placeholder = binary;
		document.getElementById('con').innerHTML = "Binary:";
		console.log(n1);
		
}

function hex(){
	var n1 = document.getElementById('space1').value;
	
	var str = n1.toString().split();

	console.log(str);

	/*var i = 0;
	var l = str.length
	var tempDecimal,rem,binary = 0, place = 1;
	
	var  dem = [];	

	while(i < l){
		tempDecimal = str[i];

		while(tempDecimal > 0){
			rem = tempDecimal % 2;
			binary = binary + (rem * place);
			tempDecimal = parseInt(tempDecimal /2);
			place = place * 10; 

			var j = 0;
			var p = str.length;
			while(j < p){
				dem[i] = binary;
				j = j + 1;
			}
		}
		i = i + 1;
		

		var tempDecimal,rem,binary = 0;
		var place = 1;
		
	}
	
	var x = 0;
	var t = str.length;
 	
 		while(x < t){
 			if (dem[x] === 0){
 				document.getElementById('out').innerHTML = 0;
 			}
 			else if (dem[x] === 1){
 				document.getElementById('out').innerHTML = 1;
 			}
 			else if (dem[x] === 10){
 				document.getElementById('out').innerHTML = 2;
 			}
 			else if (dem[x] === 11){
 				document.getElementById('out').innerHTML = 3;
 			}
 			else if (dem[x] === 1010
 			

 			x = x + 1;

 		}*/
}


function remove() {
	location.reload();
}
