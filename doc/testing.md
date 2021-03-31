# DSAVY Testing
# All testing code is located in src/unit_tests

## Snapshot and Unit Testing

Our testing consists of using Jest testing framework and the react testing library. Each main component 
will have a snapshot test to ensure it renders correctly. Each main operation for the data structures and 
algortihms have unit testing, such as push, pop, enqueue, and dequeue for example. These functions are what 
updates the state of our components so we have unit testing that covers each case that could occur like a blank entry, 
exceeding bounds, and entering too big of a number. As of sprint 4 we have completed unit testing and snapshots for the 
queue, stack, and insertion sort components. In sprint 5 we plan to test the linked list and recursion components, 
along with other features we add. 

## UI and Manual Testing

We will manually test our UI by executing each operation to ensure the data structures and algorithms are displayed correctly.
We use the unit test to know the data is right so manually testing will show the data is displayed correctly and animations happen 
at the right time. We will also make sure the UI doesn't change when a user error happens, such as a blank entry, 
exceeding bounds, and entering too big of a number.