import React from 'react';
import LinkedList from 'components/LinkedList';
import renderer from 'react-test-renderer';
import { fireEvent, getByText } from '@testing-library/react';
import ListForm from '../components/Forms/List-Form';

test("Linked list page renders correctly", () => {
    const tree = renderer.create(<LinkedList/>).toJSON()
    expect(tree).toMatchSnapshot()
});

// Testing hooks
it("insert button works", () => {
    fireEvent.click(getByText("Insert"));
    expect()
})