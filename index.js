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
