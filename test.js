
var Parent = function() {
};

Parent.prototype.doTest1 = function() {
  console.log("parent.doTest1");
}

var p = new Parent();

p.doTest1();

var Child = function() {
};


Child.prototype = Object.create(Parent.prototype);

var c = new Child();

c.doTest1();


