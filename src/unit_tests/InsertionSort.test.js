import React from 'react';
import InsertionSort from 'components/InsertionSort';
import renderer from 'react-test-renderer';

// Queue renders
test("Insertion Sort renders correctly", () => {
    const tree = renderer.create(<InsertionSort/>).toJSON()
    expect(tree).toMatchSnapshot()
});

describe('Testing enqueue', () => {
    const sort = (array) => {
        let a = [...array]
        for (let j = 1; j < a.length; j++) {
          let key = a[j]
          let i = j - 1
          while (i >= 0 && a[i] > key) {
            a[i + 1] = a[i]
            i--
          }
          a[i + 1] = key
        }
        return a 
    }

    it('sorts correctly', ()=>{
      let array = [5,4,3,2,1]
      expect(sort(array)).toStrictEqual([1,2,3,4,5]);
    })

    it('sorts correctly', ()=>{
        let array = [98,67,8,456,3,45,44,4]
        expect(sort(array)).toStrictEqual([3,4,8,44,45,67,98,456]);
    })

    it('sorts correctly', ()=>{
        let array = [1,2,3,4,5,6,7,8,9,10]
        expect(sort(array)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    })
});