// this is the callnege 


// initiate the count 



// increase the count 


// save the count 


// show in html page 
let count = 0;

function increment() {

    count += 1;
    document.getElementById("count-el").innerText = count;

};

function save() {
    console.log(count);
};