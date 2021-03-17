import React from 'react';
import Home from 'components/Home';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

test("Home page renders correctly", () => {
    const tree = renderer.create(<BrowserRouter><Home/></BrowserRouter>).toJSON()
    expect(tree).toMatchSnapshot()
});