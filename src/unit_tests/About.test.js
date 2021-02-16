import React from 'react';
import About from 'components/About';

test("returns correct component", () => {
    expect(About()).toStrictEqual(<div>This is the About Component</div>)
});

