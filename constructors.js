var Cat = function (name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function (){
  return this.owner + " loves " + this.name;
}

cat1 = new Cat("cat1", "cat1's owner");
cat2 = new Cat("cat2", "cat2's owner");
cat3 = new Cat("cat3", "cat3's owner");

console.log(cat1);
console.log(cat2);
console.log(cat3);

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat3.cuteStatement());

Cat.prototype.cuteStatement = function (){
  return "Everyone loves " + this.name;
}

Cat.prototype.meow = function (){
  return this.name + " meows";
}

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat3.cuteStatement());

console.log(cat1.meow());
console.log(cat2.meow());
console.log(cat3.meow());

cat1.meow = function (){
  return this.name + " MEOWS";
}

console.log(cat1.meow());
console.log(cat2.meow());
console.log(cat3.meow());