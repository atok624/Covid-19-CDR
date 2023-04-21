import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import Home from '../components/Home';
import HomeSlice from '../redux/Home-Api/HomeSlice';

const mockStore = configureStore({
  reducer: {
    Home: HomeSlice,
  },
  middleware: [thunk],
});

describe('Home component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      Home: {
        data: {
          rawData: [
            { Combined_Key: 'Test Country 1', Confirmed: '100' },
            { Combined_Key: 'Test Country 2', Confirmed: '200' },
            { Combined_Key: 'Test Country 3', Confirmed: '300' },
          ],
        },
        state: 'Success',
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
