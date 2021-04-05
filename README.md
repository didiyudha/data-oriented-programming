# Data Oriented Programming

## Three Principle of Data Oriented Programming

- ### Separate code from fata.
- ### Represent data entities with generic data structures.
- ### Data is immutable.

## First Principle.

Separate code from data in a way that the code resides in functions whose behaviour does not depend on data that is somehow encapsulated in the function's context. This principle recommends a clear separation between code and data.

When we are careful to separate code from data, our program benefit from:

1. Code can be **reused** in different context.
2. Code can be **tested** in isolation.
3. System tend to be **less complex**

## Second Principle

We represent our data with generic data structures (like **map** and **arrays**) instead of instantiating data via specific clasees.
