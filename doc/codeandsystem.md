# About the code 

The code that runs DSAVY is built using the React JavaScript library, HTML, and CSS (along with some react-spring and react-bootstrap).
Each data structure and algorithm has its own parents component which hold the component level state; they also have their own
forms, but some compoenents use the same forms. To add animation we used the react-spring library for the insertion and 
deletion of elements from the data structures and the recursion feature. The recursion and insertion sort feature use intervals
to adjust the speed at which the animations happen so users can go at their own pace. We used react hooks instead of classes to 
implement our components since this seems to be preferred over the classes due to its cleaner way of controlling and using state. 

The system architecture can be depicted by the following graphs:

## Data Flow
![Data Flow](/doc/images/diagram1.png?raw=true)

## Data Structure and Algorithm Component Architecture
![diagram2](/doc/images/diagram2.png?raw=true)

