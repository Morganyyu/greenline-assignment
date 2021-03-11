# Greenline Assignment

## Installation Instructions

1. Clone this repo.
2. `yarn install`
3. `yarn start` to start developing on [http://localhost:3000](http://localhost:3000)
4. `yarn test` to run basic tests

### Version Requirements

```
node: ^14.4.0,
yarn: 1.22.5
```

## Tech Stack

Bootstrapped with [Create React App with TypeScript template](https://create-react-app.dev/docs/adding-typescript/) which utilizes React v17 and TypeScript 4.
No additional packages were installed, and no changes to the default scripts.
For Statement Management, it is implemented with the `useReducer()` hook.

## Assignment Requirements Summary

### Core Requirement 

Build a program to calculate the total price at checkout for a customer, taking discounts into consideration.

### Core Solution Summary

A simple interface with 3 inputs for the 3 different fruits that allow their quantities to be increased or decreased as a whole integer, which updates the data in the component state according to the assignment example input expectation `[ ['grapes', 1], ['apples', 0], ['peaches', 1] ]`. The total with discount is calculated on Calculate Total button click, displaying a number representing the total price at checkout after discounts.

### Bonus Requirements and Solutions

#### TypeScript

Written in TS, with the default configurations and set up from Create React App

#### Testing

A suite of tests added for the assignment Input/Output Expections: 

```
[ ['grapes', 1], ['apples', 0], ['peaches', 1] ] => 12
[ ['grapes', 1], ['apples', 1], ['peaches', 1] ] => 15
[ ['grapes', 2], ['apples', 2], ['peaches', 1] ] => 16.8
[ ['grapes', 3], ['apples', 5], ['peaches', 2] ] => 36
[ ['peaches', 7], ['grapes', 7], ['apples', 7] ] => 85.8
```

#### State Management

With `useReducer`, a simple Admin Inventory display can be shown. On the Purchase action, it shows updated inventory, sold quantity, net profit, and a basic  purchase history with the date + time and the purchase total.

### Improvements Needed

1. Add styling with `styled-components`.
2. Restructure the input data from arrays of arrays, to a simpler object of `{fruit: quantity, fruit: quantity}`. That is better for readability and reduces the amount of 'data manipulation'.
3. Code refactoring with more isolated modules.

### Additional Features with More Time Given

1. Display remaining inventory for the Checkout Interface, and disable attempts to purchase quantity more than the inventory.
2. Add more tests, as well as writing some DOM testing.
3. UI for Admin to add/reduce inventory, edit prices, edit discount.
4. Replace `useReducer` with redux if the project was to expand and become more complex for a better global state management.
