import React from 'react';
import { shallow } from 'enzyme';
import { init } from '@rematch/core'
import * as models from '../../models'
import renderer from 'react-test-renderer';

jest.mock('../../utils/proofGenerator', () => {
  return {
    createProof: jest.fn().mockReturnValue({
      equation: '1 + 1',
      result: 2
    })
  };
});

import Game from './Game';

describe('<Game />', () => {
  let store;

  beforeAll(() => {
    store = init({ models });
  });

  describe('WHEN initializes', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Game store={store} />);
    });

    it('THEN it should render a view to start', () => {
      expect(renderer.create(wrapper.html()).toJSON())
        .toMatchSnapshot();
    });
  });
});
