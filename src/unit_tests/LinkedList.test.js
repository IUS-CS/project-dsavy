import React from 'react';
import LinkedList from 'components/LinkedList';
import renderer from 'react-test-renderer';
import { fireEvent, getByRole, getByPlaceholderText, render, screen } from '@testing-library/react';
import ListForm from '../components/Forms/List-Form';

test("Linked list page renders correctly", () => {
    const tree = renderer.create(<LinkedList/>).toJSON()
    expect(tree).toMatchSnapshot()
});

// Testing hooks
// it("insert button works", () => {
//     fireEvent.click(getByText("Insert"));
//     expect()
// })

test("allows users to insert items in list", () => {
    const wrapper = render(<LinkedList/>);

  const input = screen.getByPlaceholderText('Value')
  fireEvent.change(input, { target: { value: "one" } })
  fireEvent.click(screen.getByRole('button', {name: "Insert"}))

  screen.getByText('one')
})