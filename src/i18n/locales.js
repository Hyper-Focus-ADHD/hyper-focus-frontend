const LOCALES = {
  PORTUGUESE: { KEY: 'pt', NAME: 'Português' },
  ENGLISH: { KEY: 'en', NAME: 'English' },
};

const localesNames = {};
Object.keys(LOCALES).forEach((localeKey) => {
  localesNames[localeKey] = LOCALES[localeKey].NAME;
});

const backendLanguages = {
  en: 'English',
  pt: 'Portuguese',
};

export { LOCALES, backendLanguages, localesNames };
