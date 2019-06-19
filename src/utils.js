/* eslint-disable import/no-dynamic-require */
import { addLocaleData } from 'react-intl';

export const getLanguageFromPath = (path, languages) => {
  if (!path) {
    return languages[0];
  }
  const langPart = path.split('/')[1];
  return languages.includes(langPart) ? langPart : languages[0];
};

export const addLocaleDataFor = languages =>
  // eslint-disable-next-line global-require
  languages.forEach(language => addLocaleData(...require(`react-intl/locale-data/${language}`)));
