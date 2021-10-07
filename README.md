# DSAVY

DSAVY (dee-savvy) stands for **D**ata **S**tructures and **A**lgorithms **V**isuall**y**. This is a web application that allows users to interact with chosen data structures and algorithms visually by manipulating their values.

Users are able to select from an assorment of data structures they want to see represented. After a selection is made, the user can play with the data structure to better understand how it works. DSAVY allows users to input thier own values for the data structures and even maniplulate when data is inserted, sorted, and deleted according to the data structure. 

Please see [here](./doc/howtouse.md) to see a demo of the application and how to use it.

## How to Build
This webapp is built with React and requires Node and npm to build locally.
* Clone the repository 
* Run `npm install` in the /src folder
* Run `npm run start`

## Testing
DSAVY will be tested using Jest JavaScript testing framework for the unit tests.  
All unit tests are located in src/unit_tests  
To setup Jest and run:
* Run `npm install --save-dev jest` in /src
* Run `npm run test`
 
## Purpose
We hope that DSAVY will provide a way for students to learn data structures more quickly through visualization. 