import React from 'react';
import LinkedList from 'components/LinkedList';
import renderer from 'react-test-renderer';

test("Linked list page renders correctly", () => {
    const tree = renderer.create(<LinkedList/>).toJSON()
    expect(tree).toMatchSnapshot()
});