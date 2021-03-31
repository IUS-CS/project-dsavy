import React from 'react';
import Queue from 'components/Queue';
import renderer from 'react-test-renderer';

// Queue renders
test("Enqueue renders correctly", () => {
    const tree = renderer.create(<Queue/>).toJSON()
    expect(tree).toMatchSnapshot()
});

describe('Testing enqueue', () => {
    const enqueue = (queue, number) => {
        if (number == '') {
          return queue
        }
        
        if (queue.length > 9) {
          return queue
        }
    
        if (Math.abs(number) > 999) {
          return queue
        }
        
        queue.push(number)
        return queue
    }

    it('enqueue correctly', ()=>{
      let array = [1]
      expect(enqueue(array,4)).toStrictEqual([1,4]);
    })

    it('enqueue does not add, number too large', ()=>{
      let array = [1]
      expect(enqueue(array,1000)).toStrictEqual([1]);
    })
    
    it('adds to empty queue', ()=>{
      let array = []
      expect(enqueue(array,950)).toStrictEqual([950]);
    })

    it('Fails to add, queue at max length', ()=>{
      let array = [1,2,3,4,5,6,7,8,9,10]
      expect(enqueue(array,950)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
    })

    it('Fails to add, no entry', ()=>{
        let array = [1,2,3,4,5,6,7,8]
        expect(enqueue(array,'')).toStrictEqual([1,2,3,4,5,6,7,8]);
      })
});

describe('Testing enqueue', () => {
    const dequeue = (queue) => {
        return queue.splice(1)  
    }

    it('enqueue correctly', ()=>{
      let array = [1]
      expect(dequeue(array)).toStrictEqual([]);
    })

    it('enqueue does not add, number too large', ()=>{
      let array = [1,2,3,4]
      expect(dequeue(array)).toStrictEqual([2,3,4]);
    })
    
    it('adds to empty queue', ()=>{
      let array = []
      expect(dequeue(array)).toStrictEqual([]);
    })
});