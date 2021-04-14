import React from 'react';
import Stack from 'components/Stack';
import 'components/Forms/Stack-Form'
import renderer from 'react-test-renderer';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { fireEvent, getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole, getByText, render, screen } from '@testing-library/react';

test("Stack page renders correctly", () => {
    const tree = renderer.create(<Stack/>).toJSON()
    expect(tree).toMatchSnapshot()
});

describe('Testing push', () => {
    const push = (stack, number) => {
        if (number == '') {
          return stack
        }
        
        if (stack.length > 9) {
          return stack
        }
    
        if (Math.abs(number) > 999) {
          return stack
        }
        
        stack.push(number)
        return stack
    }

    it('push correctly', ()=>{
      let array = [1]
      expect(push(array,4)).toStrictEqual([1,4]);
    })

    it('push does not add, number too large', ()=>{
      let array = [1]
      expect(push(array,1000)).toStrictEqual([1]);
    })
    
    it('adds to empty stack', ()=>{
      let array = []
      expect(push(array,950)).toStrictEqual([950]);
    })

    it('Fails to add, stack at max length', ()=>{
      let array = [1,2,3,4,5,6,7,8,9,10]
      expect(push(array,950)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    })

    it('Fails to add, no entry', ()=>{
        let array = [1,2,3,4,5,6,7,8]
        expect(push(array,'')).toStrictEqual([1,2,3,4,5,6,7,8]);
      })
});

describe('Testing pop', () => {
    function pop(array) {
        if (array.length == 0) {return array}
        array.pop()
        return array
    }

    it('pops correctly', ()=>{
      let array = [1,3,4]
      expect(pop(array,4)).toStrictEqual([1,3]);
    })

});

// UI Testing
test("allows users to insert items in stack", () => {
  const wrapper = render(<Stack/>);

  const input = screen.getByPlaceholderText('Value')
  fireEvent.change(input, { target: { value: "one" } })
  fireEvent.click(screen.getByRole('button', {name: "Push"}))

  screen.getByText('one')
})