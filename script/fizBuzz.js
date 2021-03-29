let fiz = 1;
let buz = 1;
let fizbuz = 1;

for(n =1; n < 40; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(`${n} : There are ${fizbuz} FizBuzzes so far.`)
    fiz++;
    buz++;
    fizbuz++;
  } else if(n % 3 == 0) {
    console.log(`${n} : There are ${fiz} Fizzes so far.`);
    fiz++;
    continue;
  } else if (n % 5 == 0) {
    
    console.log(`${n} : There are ${buz} Buzzes so far.`);
    buz++;
    continue;
  } else {
  console.log(`${n} : `);
  } 

}