# DSAVY Testing

Our testing consists of using Jest testing framework and the react testing library. Each main component 
will have a snapshot test to ensure it renders correctly. Each main operation for the data structures and 
algortihms have unit testing, such as push, pop, enqueue, and dequeue for example. These functions are what 
updates the state of our components so we have unit testing that covers each case that could occur like a blank entry, 
exceeding bounds, and entering too big of a number. As of sprint 4 we have completed unit testing and snapshots for the 
queue, stack, and insertion sort components. In sprint 5 we plan to test the linked list and recursion components, 
along with other features we add. 