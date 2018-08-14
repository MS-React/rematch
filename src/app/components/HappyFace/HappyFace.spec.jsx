import React from 'react';
import { shallow } from 'enzyme';

import HappyFace from './HappyFace';

describe('HappyFace', () => {
  let wrapper;

  describe('display', () => {
    describe('showHappyFace', () => {
      beforeEach(() => {
        wrapper = shallow(<HappyFace display showHappyFace />);
      });

      it('should show a =) face', () => {
        expect(wrapper.find('.happyFace').text()).toEqual('=)');
      });
    });

    describe('showUnhappyFace', () => {
      beforeEach(() => {
        wrapper = shallow(<HappyFace display showUnhappyFace />);
      });

      it('should show a =( face', () => {
        expect(wrapper.find('.happyFace').text()).toEqual('=(');
      });
    });
  });
});
