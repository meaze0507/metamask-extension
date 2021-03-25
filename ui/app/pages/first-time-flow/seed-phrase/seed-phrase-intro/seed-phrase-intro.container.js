import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import SeedPhraseIntro from './seed-phrase-intro.component';

export default compose(withRouter, connect(null, null))(SeedPhraseIntro);
