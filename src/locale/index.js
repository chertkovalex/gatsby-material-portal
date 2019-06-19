const languages = ['en', 'it'];
export const languageNames = ['English', 'Italiano'];
export const getLocalePrefix = locale => (locale === languages[0] ? '' : `/${locale}`);
export default languages;
