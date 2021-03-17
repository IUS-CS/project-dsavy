import React from 'react'

function About() {
  return (
    <div style={{margin: '32px'}}>
        <p>
            <strong>DSAVY?</strong> What would that mean? It actually stands for <b>D</b>ata <b>S</b>tructures and <b>A</b>lgorithms <b>V</b>isually, and it is
            pronounced as <i>dee-savvy</i>. Data structures and algorithms can be difficult to understand, though many students manage to understand
            it initially, the 'aha' moment can be difficult to achieve, and DSAVY can help you get that easily. Most students tend to be visual learners, 
            and that is why we created DSAVY. Utlimately, our goal is to help students become savvy in data structures and algorithms by visualizing them.
        </p>

        <p>
        DSAVY is a web application that allows users to interact with chosen data structures and algorithms visually by manipulating their values.
        Users are able to select from an assorment of data structures they want to see visualized. Once a selection is made, the user can play
        with the data structure to better understand how it works. DSAVY allows users to input thier own values for the data structures and even
        maniplulate when data is inserted, sorted, and deleted according to the data structure or the algorithm.
        </p>
    </div>
  );
}

export default About;