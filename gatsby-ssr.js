/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { IntlProvider } from 'react-intl';

import { addLocaleDataFor, getLanguageFromPath } from './src/utils';
import languages from './src/locale';

addLocaleDataFor(languages);

/**
 * Create IntlProvider for generated pages.
 * Sync load messages, so they are available immediately.
 */
export const wrapPageElement = ({ element, props }) => {
  const language = getLanguageFromPath(props.location.pathname, languages);
  const messages = require(`./src/locale/${language}.json`);
  return (
    <IntlProvider locale={language} messages={messages}>
      {element}
    </IntlProvider>
  );
};

/**
 * Adds messages for current langugage to global __message.
 * __message will be used to setup IntlProvider in IntlLoader
 */
export const onRenderBody = (
  { pathname, setPostBodyComponents },
  // eslint-disable-next-line no-unused-vars
  pluginOptions,
) => {
  // The pathname is only set during builds.
  // In development, it's not set because we do just one server render which covers all pages.
  const language = getLanguageFromPath(pathname, languages);
  const messages = require(`./src/locale/${language}.json`);
  const __html = `/*<![CDATA[*/
    var __messages = ${JSON.stringify(messages)};
    var __language = '${language}';
  /*]]>*/`;
  // eslint-disable-next-line react/no-danger
  setPostBodyComponents([<script key="locales" dangerouslySetInnerHTML={{ __html }} />]);
};
