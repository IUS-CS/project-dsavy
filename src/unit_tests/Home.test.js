import React from 'react';
import Home from 'components/Home';

test("returns correct component", () => {
    expect(Home()).toStrictEqual(<div>This is the Home Component</div>)
});


