/* 
Step 1: get pet's name from user,
        store in variable (petName).
Step 2: keep track of pet's happiness + energy lvls, 
        - both starting at zero. (petHL, petNRG)
Step 3: loop to repeat 6 times: 
        prompt user for action in bold (feed, pet, walk):
        - loop petHL and petNRG 6 times. 
        - feed increases energy by 2. 
        - pet increases happiness by 1. 
        - walk increases happiness by 2 but decreases energy by 1.
        - log pet's name, happiness, and energy level to the console. 
        - if user chooses "walk" but energy lvl is at zero, do not increase happiness or decrease energy. tell user "not enough energy to enjoy walk". 
        - after 6 actions, log pet's name, happiness, and energy levels to console.
*/

function meeMeesVirtualPetTracker() {
  // Step 1: declare a variable for petName.
  let petName = prompt("What is your pet's name?");
  console.log(petName);
  alert("Thank you!");

  // Step 2: declare variable for petHL + petNRG.
  let petHL = 0;
  let petNRG = 0;

  for (let i = 0; i < 6; i++) {
    // Step 3: loop petHL + petNRG 6 times.
    let action = prompt(
      "What would would your pet like to do? Your options are: feed, pet, walk."
    );
    if (action === "feed") {
      petNRG += 2;
    } else if (action === "pet") {
      petHL += 1;
    } else if (action === "walk") {
      petHL += 2;
      petNRG -= 1;
    } else if (action === "walk" && "energy" === 0) {
      alert("Not enough energy for a walk.");
    } else if (action != "pet" || action != "feed" || action != "walk") {
      alert("Your options are 'pet', 'feed' or 'walk'");
    }
  }
  console.log(
    `${petName}'s energy level is ${petNRG} and their happiness level is: ${petHL}'`
  );
  return;
}
meeMeesVirtualPetTracker();
