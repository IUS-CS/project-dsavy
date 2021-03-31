import React from 'react';
import LinkedList from 'components/LinkedList';
import renderer from 'react-test-renderer';

test("Linked list page renders correctly", () => {
    const tree = renderer.create(<LinkedList/>).toJSON()
    expect(tree).toMatchSnapshot()
});

// Testing hooks
it("insert button works", () => {
    const { container } = render(<App />);
    const insertButton = getByTestId(container, "submit");
    const input = getByTestId(container, "Value");
    const value = 'test';
    fireEvent.change(input, { target: { value: value} });
    fireEvent.click(insertButton);
    expect()
})