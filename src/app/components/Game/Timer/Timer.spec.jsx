import React from 'react';
import { shallow } from 'enzyme';

import Timer from './Timer';

jest.useFakeTimers();

describe('Timer', () => {
  let wrapper;
  let defaultProps;

  beforeAll(() => {
    defaultProps = {
      totalTimer: 30,
      isPaused: false,
      pause: false,
      timeEnd: jest.fn(),
    };

    wrapper = shallow(<Timer {...defaultProps} />);
  });

  describe('start', () => {
    it('should start render the time given by props', () => {
      expect(wrapper.find('.timer').text()).toEqual('30');
    });
  });

  describe('countdown', () => {
    beforeEach(() => {
      jest.advanceTimersByTime(1000);
      wrapper.update();
    });

    it('should update the timer decreased by one since its began', () => {
      expect(wrapper.find('.timer').text()).toEqual('29');
    });
  });

  describe('pause', () => {
    beforeEach(() => {
      wrapper.setProps({
        pause: true,
      });
      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(1000);
    });

    it('should call clearInterval to stop the timer', () => {
      expect(clearInterval).toHaveBeenCalled();
      expect(wrapper.find('.timer').text()).toEqual('29');
    });
  });

  describe('resume', () => {
    beforeEach(() => {
      wrapper.setState({ isPaused: true });
      wrapper.setProps({
        pause: false,
      });
      jest.advanceTimersByTime(1000);
      wrapper.update();
    });

    it('should call clearInterval to stop the timer', () => {
      expect(wrapper.find('.timer').text()).toEqual('28');
    });
  });

  describe('nothing changes', () => {
    beforeEach(() => {
      wrapper.setProps({
        elapsed: 28,
      });
      wrapper.update();
    });

    it('should not update component', () => {
      expect(wrapper.find('.timer').text()).toEqual('28');
    });
  });

  describe('reset timer', () => {
    beforeEach(() => {
      wrapper.setProps({
        resetTimer: true,
      });
      wrapper.update();
    });

    it('should call clearInterval to stop the timer and setInteval to initialize it again', () => {
      expect(clearInterval).toHaveBeenCalled();
      expect(setInterval).toHaveBeenCalled();
    });
  });

  describe('finish', () => {
    beforeEach(() => {
      jest.advanceTimersByTime(40000);
    });

    it('should trigger timeEnd callback from props', () => {
      expect(defaultProps.timeEnd).toHaveBeenCalled();
    });
  });

  describe('unmount', () => {
    beforeEach(() => {
      wrapper.unmount();
    });

    it('should call clearInterval to stop the timer', () => {
      expect(clearInterval).toHaveBeenCalled();
    });
  });
});
