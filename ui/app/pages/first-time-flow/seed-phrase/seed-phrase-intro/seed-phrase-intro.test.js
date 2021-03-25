import assert from 'assert';
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import SeedPhraseIntro from './seed-phrase-intro.container';

describe('Seed Phrase Intro', function () {
  const props = {
    history: {
      push: sinon.spy(),
    },
  };

  it('renders the seed phrase video', function () {
    const wrapper = mount(<SeedPhraseIntro.WrappedComponent {...props} />, {
      context: {
        t: (str) => str,
      },
    });

    const seedPhraseVideo = wrapper.find(
      '.seed-phrase-intro__video-wrapper > video',
    );

    assert.strictEqual(seedPhraseVideo.length, 1);
  });
});
