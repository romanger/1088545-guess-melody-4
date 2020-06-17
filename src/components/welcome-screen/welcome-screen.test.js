import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`Should WelcomeScreen component render correctly`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        time={5}
        errorCount={3}
        onWelcomeButtonClick={() => {}}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
