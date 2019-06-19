/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { addLocaleDataFor, getLanguageFromPath } from './src/utils';
import languages from './src/locale';

addLocaleDataFor(languages);

class IntlLoader extends React.Component {
  constructor(props) {
    super(props);
    // sets initial messages from window (this is set in onRenderBody ssr hook)
    this.state = {
      messages: window.__messages,
      language: window.__language,
    };
  }

  // Note: in development onRenderBody is renedered only once for all pages
  componentDidMount() {
    if (this.props.language !== this.state.language) {
      this.loadMessages(this.props.language);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.language !== prevProps.language) {
      this.loadMessages(this.props.language);
    }
  }

  /**
   * Async loads messages and set state.
   */
  loadMessages(language) {
    import(`./src/locale/${language}.json`).then(messages => {
      this.setState({ messages, language });
    });
  }

  render() {
    const { language, ...otheProps } = this.props;
    return <IntlProvider locale={language} messages={this.state.messages} {...otheProps} />;
  }
}

IntlLoader.propTypes = {
  language: PropTypes.string,
};

export const wrapPageElement = ({ element, props }) => {
  const language = getLanguageFromPath(props.location.pathname, languages);
  return (
    <IntlLoader language={language} {...props}>
      {element}
    </IntlLoader>
  );
};

wrapPageElement.propTypes = {
  element: PropTypes.element,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  props: PropTypes.object,
};
