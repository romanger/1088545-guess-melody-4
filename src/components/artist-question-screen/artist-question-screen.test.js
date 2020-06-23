import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';


const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `${AVATAR_URL}/20`,
    artist: `John Snow`,
  }, {
    picture: `${AVATAR_URL}/30`,
    artist: `Jack Daniels`,
  }, {
    picture: `${AVATAR_URL}/40`,
    artist: `Jim Beam`,
  }],
};

it(`Should ArtistQuestionScreen component render correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        onAnsware = {()=>{}}
        question = {question}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
