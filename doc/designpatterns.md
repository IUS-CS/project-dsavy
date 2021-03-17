# DSAVY Design Patterns

## Current Design Patterns in Use
Currently the only design pattern we use is the behaivoral pattern, chain of responsibilty. 
We use this pattern by seperating user input and data structure manipulation. We have forms for inserting and deleting 
elements from our data structures that do not manipulate the structure themselves; instead the data received from the user
is passed down to the main data structure componenet which manipulates the state of the component. This seperates the responsibilty  
of handling the data between components. This will enable us to have one form component that can handle events for different 
data structures since all it has to do is send the data to the correct data structure and procedure. Then the data structure will perform 
its specfic operations. The chain of responsibilty is passed from the form to the actual data structure component. 

## Future Design Pattern 
* Strategy

## Strategy 
We plan to incorporate the design pattern, strategy, becuase we have many data structures that are built from the same underlying 
data structure, such as an array for the linear data structures we have (Linked List, Queue, Stack). This means that we can have different components that isolate the algorithms for each of those data structures but their implementation is still through an array. This gives us the ability to write components for the algorithms to manipulate the array and have one main array component that holds the state of that data structure.  

## Plan for future module design
Moving foward we plan to consolidate our components and incorporate the strategy design pattern more. This will enable us to have a cleaner
/src directory and simpler code by having components that can handle more than one data structure. We will continue to use chain of responsibilty so our user input is at the end of the 'chain' and we will pass that responsibilty (data) down to the specific components. 