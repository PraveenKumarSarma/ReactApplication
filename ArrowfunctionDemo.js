let   arr1 = [1,2,3,4,5];

let  arr2 =  arr1.map(Math.sqrt);

function  getEvens(n)
{
	return  n * 2; 
}

let  arr3 =  arr1.map( getEvens  );
let  arr4 =  arr1.map( n =>  n * 2  );
let  arr5 =  arr1.map( n =>  n * n  );
let  arr6 =  arr1.map( n =>  n * 10  );
let  arr7 =  arr1.map( n =>  n * 11  );


console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);