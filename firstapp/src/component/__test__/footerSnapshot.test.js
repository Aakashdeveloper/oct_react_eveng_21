import React from 'react';
import Footer from '../Footer';
import {create} from 'react-test-renderer';

describe('Snapshot test',() => {
    test('testing footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})