let year_of_birthday = window.prompt ('when were you born');
let legability = 2019- year_of_birthday;
if(legability < 18){
    console.log('minor');
} else if(legability < 37){
    console.log('youth');
} else {
    console.log('adult');
}