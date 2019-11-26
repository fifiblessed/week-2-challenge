let year_of_birthday = window.prompt ('when were you born');
let legability = 2019- year_of_birthday;
if(legability < 18){
    console.log('minor');
} else if(legability < 37){
    console.log('youth');
} else {
    console.log('adult');
}


//objects;
let squares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (i=0; i<15; i++){
   let square = Math.pow(squares[i],2);
    console.log(`"${squares[i]}":${square}`);
}