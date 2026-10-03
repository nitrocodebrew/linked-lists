import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append('Lacey');
list.append('Sameer');
list.append('Jared');
list.append('Pat');
list.append('James');

console.log(list.toString());

// Test insertAt() and removeAt()
list.insertAt('Kristen', 1);
list.insertAt('Kat', 3);
list.insertAt('April', 5);

console.log(list.toString());

list.removeAt(1);
list.removeAt(3);
list.removeAt(5);

console.log(list.toString());

// prepend() and append()
list.prepend('Rich');
list.prepend('Katy');

console.log(list.toString());
console.log(`List length: ${list.size()}`);

list.append('Josh');
list.append('Jack');
list.append('Arrow');

console.log(list.toString());
console.log(`List length: ${list.size()}`);

// pop()
list.pop();
console.log(list.toString());
console.log(`List length: ${list.size()}`);

// findIndex()
console.log(list.findIndex('Jack')); // 8
console.log(list.findIndex('Lacey')); // 2

// contains()
console.log(list.contains('Arrow')); // False
console.log(list.contains('Lori')); // False
console.log(list.contains('Kristen')); // False
console.log(list.contains('Pat')); // True
console.log(list.contains('April')) // True

// at()
console.log(list.at(0)); // Katy
console.log(list.at(2)); // Lacey
console.log(list.at(3)); // Sameer


