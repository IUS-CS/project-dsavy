import React from 'react';
import Queue from 'components/Queue';
import renderer from 'react-test-renderer';

test("Enqueue renders correctly", () => {
    const tree = renderer.create(<Queue/>).toJSON()
    expect(tree).toMatchSnapshot()
});