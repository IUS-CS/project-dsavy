import React from 'react';
import About from 'components/About';
import renderer from 'react-test-renderer';

test("returns correct component", () => {
    const tree = renderer.create(<About/>).toJSON()
    expect(tree).toMatchSnapshot()
});