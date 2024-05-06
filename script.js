// Initial party checklist
const partyChecklist = ["Music Playlist", "Snacks", "Decorations", "Games", "Invitations"];

console.log("Initial Party Checklist:", [...partyChecklist]);

// Add 3 new items to the partyChecklist using a loop
let otherItems = ["Food", "Drinks", "Party Favors"];
for (let i = 0; i < otherItems.length; i++) {
  partyChecklist.push(otherItems[i]);
}
console.log([...partyChecklist]);

// Remove 2 items from the partyChecklist using a loop
for (let i = 0; i < 2; i++) {
  partyChecklist.pop();
}
console.log([...partyChecklist]);


// Sort the partyChecklist in alphabetical order using a loop
partyChecklist.sort();

console.log("Final Party Checklist:", [...partyChecklist]);

// Bonus

// Reverse Order
for (let i = 0; i < partyChecklist.length / 2; i++) {
  let temp = partyChecklist[partyChecklist.length - i - 1];
  partyChecklist[partyChecklist.length - i - 1] = partyChecklist[i];
  partyChecklist[i] = temp;
}

console.log([...partyChecklist]);

// Duplicate Items
partyChecklist.push("Snacks");
for (let i = 0; i < partyChecklist.length; i++) {
  if (partyChecklist.indexOf(partyChecklist[i]) != i) {
    partyChecklist.splice(i, 1);
    i--;
  }
}

console.log([...partyChecklist]);

// forEach Loop Practice
partyChecklist.forEach(item => console.log(`Don't forget to prepare ${item} for the party!`));

// for..of Loop Practice
let importantItems = [];

for (let item of partyChecklist) {
  if (item.length > 10) {
    importantItems.push(item);
  }
}

console.log(importantItems);