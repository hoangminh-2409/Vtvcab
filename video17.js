// Video 17
console.log('Hello world from HTML');
let arrTop4 = ['Liverpool', 'Chelsea', 'MU', 'Man City']

let i = 0;
while (i < arrTop4.length) {
    // if else codition
    if(arrTop4[i].length ===2){
        console.log('Top club: ', i + 1, arrTop4[i]);

    }else
    i++;
}
let hour = 2
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}