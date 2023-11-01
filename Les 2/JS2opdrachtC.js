// Welke dag?

const d = new Date();
const schooldag = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"];
let dag = schooldag[d.getDay()];

if(dag == true){
    console.log("Ik moet naar school");
} else {
    console.log("Lekker uitslapen!");
}

