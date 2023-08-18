let totalPeople = prompt("Сколько людей хочет зайти в клуб?");
let name = prompt("Введите имя:");
let age = prompt("Введите возраст:");
let money = prompt("Сколько денег в кармане?");
if (name[0].toLowerCase() === 'a' && age > 20 && age <= 40 && money > 100) {
  count++;
  alert(name + " может зайти в клуб!");
} else {
  alert("Alex соответствует требованиям для посещения клуба.");
}