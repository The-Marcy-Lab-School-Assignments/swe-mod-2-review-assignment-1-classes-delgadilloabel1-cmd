# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

**Composition** is a **Has** relationship

**Inheritance** is a **Is** relationship

1. **Composition**: A `Car` **Has a** `Engine`
2. **Inheritance**: A `Dog` **Is a** `Animal`
3. **Composition**: A `Classroom` **Has** `Students`
4. **Inheritance**: A `Rectangle` **Is a** `Shape`
5. **Composition**: A `Computer` **Has a** `CPU`
6. **Inheritance**: A `Manager` **Is an** `Employee`

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

**"Poly"** meaning many, and **"Morph"** meaning transform. Put it together, and you get **"many forms"**: the same method name takes many different forms depending on the object. This is very useful because **child classes** can inherit properties and methods from the **parent class**, but customize them to behave differently. This is really cool because when you call `play()` on any `MediaItem`, **JavaScript** automatically calls the correct version based on the object's class (`Song`, `Podcast`, or `Audiobook`). You don't need to check **"if this is a `Song`, do this..."** it simply does it!
For instance, a `Song's` `play()` includes the artist, while a `Podcast's` includes the host and episode number, **same method name, different behavior**.

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) An **instance property** is data that is constructed by the constructor for that **specific instance**, for example: `name`, `age`, `jersey number`. This information will **vary** for every instance of the class.

A **static property** is declared **before** a constructor and that data is applied to the **class itself**, not each individual instance, for example: `school name`, `species for animals`, `count of how many objects created`. This data will be **shared** across the entire class.

b) Real world example: In a `Student` class, `name`, `age`, and `grade` would be **instance properties** because they're different for each student. However, `schoolName` and `schoolAddress` would be **static properties** because all students attend the same school at the same address. My `name`, `age`, and `grade` are different from my classmates, but we all go to the same school at the same address.
