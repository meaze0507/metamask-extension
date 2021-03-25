// Components
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/button';
// Routes
import { INITIALIZE_SEED_PHRASE_ROUTE } from '../../../../helpers/constants/routes';

export default class SeedPhraseIntro extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
  };

  static propTypes = {
    history: PropTypes.object,
  };

  handleNextStep = () => {
    this.props.history.push(INITIALIZE_SEED_PHRASE_ROUTE);
  };

  renderMainContent() {
    const { t } = this.context;

    return (
      <>
        <div className="seed-phrase-intro__title">
          {t('seedPhraseIntroTitle')}
        </div>
        <div className="seed-phrase-intro__title-copy">
          {t('seedPhraseIntroTitleCopy')}
        </div>
        <div className="seed-phrase-intro__video-wrapper">
          <video controls>
            <source
              type="video/webm"
              src="./images/videos/recovery-onboarding/video.webm"
            />
            <track
              default
              srcLang="en"
              label="English"
              kind="subtitles"
              src="./images/videos/recovery-onboarding/subtitles-en.vtt"
            />
          </video>
        </div>
        <div className="seed-phrase-intro__next-wrapper">
          <Button type="primary" onClick={this.handleNextStep}>
            {t('next')}
          </Button>
        </div>
      </>
    );
  }

  renderSidebarContent() {
    const { t } = this.context;

    return (
      <div className="seed-phrase-intro__sidebar">
        <div className="seed-phrase-intro__sidebar-block">
          <div className="seed-phrase-intro__sidebar-title">
            {t('seedPhraseIntroSidebarTitleOne')}
          </div>
          <div className="seed-phrase-intro__sidebar_copy">
            {t('seedPhraseIntroSidebarCopyOne')}
          </div>
        </div>
        <div className="seed-phrase-intro__sidebar-block">
          <div className="seed-phrase-intro__sidebar-title">
            {t('seedPhraseIntroSidebarTitleTwo')}
          </div>
          <div className="seed-phrase-intro__sidebar_copy">
            <ul>
              <li>{t('seedPhraseIntroSidebarBulletOne')}</li>
              <li>{t('seedPhraseIntroSidebarBulletTwo')}</li>
              <li>{t('seedPhraseIntroSidebarBulletThree')}</li>
              <li>{t('seedPhraseIntroSidebarBulletFour')}</li>
            </ul>
          </div>
        </div>
        <div className="seed-phrase-intro__sidebar-block">
          <div className="seed-phrase-intro__sidebar-title">
            {t('seedPhraseIntroSidebarTitleThree')}
          </div>
          <div className="seed-phrase-intro__sidebar_copy">
            {t('seedPhraseIntroSidebarCopyTwo')}
          </div>
        </div>
        <div className="seed-phrase-intro__sidebar-block">
          <div className="seed-phrase-intro__sidebar_copy">
            {t('seedPhraseIntroSidebarCopyThree')}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="seed-phrase-intro">
        <div className="seed-phrase-intro__sections">
          <div className="seed-phrase-intro__left">
            {this.renderMainContent()}
          </div>
          <div className="seed-phrase-intro__right">
            {this.renderSidebarContent()}
          </div>
        </div>
      </div>
    );
  }
}
