import React from 'react';
import Stack from 'components/Stack';
import renderer from 'react-test-renderer';

test("Stack page renders correctly", () => {
    const tree = renderer.create(<Stack/>).toJSON()
    expect(tree).toMatchSnapshot()
});