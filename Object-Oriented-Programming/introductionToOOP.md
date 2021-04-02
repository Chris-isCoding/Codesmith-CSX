Introduction to Object-Oriented Programming in JavaScript
What Is Object-Oriented Programming?
Object-oriented programming (OOP) is a programming paradigm that uses objects to model real world data. OOP in JavaScript allows us to create objects that serve as models, and then create new instances of those models. This is a process called instantiation.

How is object instantiation useful? Imagine that we have an application with many users, and we want to store data about all of those users. For each user we want to track their name, age, number of visits to the our website, and number of comments. We also want each user to have a method introduce that logs out its name. We could do so by creating a new object from scratch every time a user signs up, like so:

function createUser(name, age) {
return {
name: name,
age: age,
visits: 0,
comments: 0,
introduce: function() {
console.log('My name is ' + this.name);
}
};
}

On the other hand, creating a new user object from scratch every single time might not be the most DRY approach. Each user object has the same fields, and all user objects will start with visits and comments set to 0. There are several ways in JavaScript that we can create a model, also known as a class, to serve as a template for creating future objects.

Create Objects Using a Function
Perhaps the most obvious way to create an object based on a template is to create a function that returns objects with a defined structure. For example, we could create a function createUser that accepts name and age parameters and returns a new object:

function createUser(name, age) {
return {
name: name,
age: age,
visits: 0,
comments: 0,
introduce: function() {
console.log('My name is ' + this.name);
}
};
}
This works, but it still doesn't feel like the most elegant solution. Every object that we create has a new copy of the introduce method, but all of those introduce methods do the exact same thing. If only there were some way we could create new objects with access to the same methods, so that we don't have to keep copying those same methods over and over again (and thus using more and more memory!).

The Prototype Chain
We're in luck! JavaScript does allow us to create new objects with access to the same properties and methods (without creating new copies of those properties and methods each time) through something called the prototype chain. The prototype chain connects objects that we create with another object that serves as a (you guessed it) prototype. Objects inherit properties and methods from objects that are in their prototype chain. You can create an object that inherits from another object, which inherits from another object, which inherits from another object, which...you get the idea! The last object in your chain will inherit properties and methods from every previous object in the prototype chain.

To make the prototype chain more concrete, follow the steps below. Keep in mind that arrays in JavaScript are actually just special object implementations. We'll see exactly how arrays are implemented here!

Open your browser's dev tools (in Chrome or Firefox, right-click and then choose "Inspect").
Open the console.
Type const tinyArray = ['a', 'b', 'c'] and press enter.
Type tinyArray and press enter.
We now see our array with a little arrow next to it. Click the arrow, which will show you all of tinyArray's properties. You can see that it has a length property and a property for each index: 0:'a', 1:'b', 2:'c'. But it also has a mysterious **proto** property. What is this? Click it to find out!

You will see a big list of properties and methods sprout from tinyArray. You will assuredly recognize some of them: these are JavaScript's native array methods! If you try calling any of those array methods on tinyArray in the console, you will find that they all work. In fact, all arrays in JavaScript have access to these array methods. And it's all thanks to the prototype chain. That **proto** property of tinyArray is actually a link to the next prototype in the prototype chain. So all arrays in JavaScript are linked to the Array prototype, which is where all array methods and properties are actually stored. In other words, all arrays created in JavaScript inherit from the Array class.

Scroll down to the bottom of the Array properties and methods, and you will see another **proto** property -- a link to the next step up in the prototype chain. Click it, and you'll see that the next step up is the Object prototype. So under the hood, the Array class is an extension of the Object class! Our tinyArray should have access to all of the Object properties and methods you see. Test this out by calling tinyArray.hasOwnProperty(0) in the console.

One last thing on the prototype chain: it only works in one direction. So although all arrays have access to methods of the Object prototype, objects do not have access to methods of the Array prototype.

Using the Prototype Chain
Now that you know what the prototype chain is, let's figure out how to use it! The challenge of this unit will lie in researching different methods of creating objects that inherit properties and/or methods from other objects using the prototype chain. As you proceed through the subunits, you should refer to the MDN documentation for Object.create(), using constructor functions, and using ES6 class syntax.
