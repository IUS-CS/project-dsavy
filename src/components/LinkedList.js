import React from 'react';
import { SVG } from '@svgdotjs/svg.js'

function LinkedList() {
    return (
    <div > 
        <h3 style={{fontFamily: 'arial', padding: '10px'}}>Linked List</h3>
        {draw()} 
    </div>
    )
}

function draw() {
    var draw = SVG().addTo('body')
    var group = draw.group();

    var rect = draw.rect(50,50).fill('#94beff')
    group.add(rect);

    var text = draw.text('33').attr({x:22, y:10 });
    text.font({anchor: 'middle', size: 18});
    group.add(text);
    group.move(50,50);

    var line = draw.line(0, 0, 50, 0).move(100, 75)
    line.stroke({ color: '#94beff', width: 5})

    var group2 = draw.group();
    var rect2 = draw.rect(50,50).fill('#94beff')
    group2.add(rect2);

    var text2 = draw.text('31').attr({x:22, y:10 });
    text2.font({anchor: 'middle', size: 18});
    group2.add(text2);
    group2.move(150,50)

    var line2 = draw.line(0, 0, 50, 0).move(200, 75)
    line2.stroke({ color: '#94beff', width: 5})

    var group3 = draw.group();
    var rect3 = draw.rect(50,50).fill('#94beff')
    group3.add(rect3);

    var text3 = draw.text('17').attr({x:22, y:10 });
    text3.font({anchor: 'middle', size: 18});
    group3.add(text3);
    group3.move(250,50)

    var line3 = draw.line(0, 0, 50, 0).move(300, 75)
    line3.stroke({ color: '#94beff', width: 5})
}

export default LinkedList