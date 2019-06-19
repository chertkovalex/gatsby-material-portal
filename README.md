# Sapiens Digital Portal Template Application

## About

Sample application with basic functionality as an example of integrating [Gatsby](https://www.gatsbyjs.org/) + [MATERIAL-UI](https://material-ui.com/) + [Netlify CMS](https://www.netlifycms.org/) with other services.

## Currently supported features

- Static site generated with [Gatsby](https://www.gatsbyjs.org/)
- UI framework used: [MATERIAL-UI](https://material-ui.com/)
- Static content managed with [Netlify CMS](https://www.netlifycms.org/) sourced from github
- Query siteMetadata and NetlifyCMS with [GraphQL](https://graphql.org/)
- Authentication service ready to integrate with any auth system
- Restricted pages access for authenticated users
- Multilanguage support with [react-intl](https://github.com/formatjs/react-intl)

## How to use

First, install Gatsby CLI

```sh
npm install -g gatsby-cli
```

or

```sh
yarn global add gatsby-cli
```

<!-- Download the example [or clone the repo](https://github.com/mui-org/material-ui): -->

<!--
```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/next | tar -xz --strip=2  material-ui-next/examples/gatsby-next
cd gatsby-next
``` -->

Create new project from template:

```sh
gatsby new new-project-name https://github.com/digital-portlal-tpl
```

Enter the project folder and install dependencies:

```sh
cd new-project-name
yarn install
```

Start development server

```sh
gatsby develop
```

Create a production build

```sh
gatsby build
```

Serve the production build locally

```sh
gatsby serve
```

## Steps to configure CMS

- In order to start serving your static data for NetlifyCMS - push your content onto git repository
- Configure NetlifyCMS
- Authenticate NetlifyCMS with git repository

## Best Practices

### useStaticQuery

- **useStaticQuery** for receiving data inside of components instead passing as props from pages.
- **useStaticQuery** should be in external file to make a component clearer

A nice video tutorial on it can be found [here](https://egghead.io/lessons/gatsby-load-data-using-graphql-queries-directly-in-a-gatsby-v2-component-with-staticquery)

### Some articles on Best practices

https://www.gatsbyjs.org/blog/2019-02-14-behind-the-scenes-q-and-a/#best-practices-with-gatsby
https://www.netlify.com/blog/2018/06/28/5-pro-tips-and-plugins-for-optimizing-your-gatsby---netlify-site/

## Additional topics which can be useful

### Adding Search

https://www.gatsbyjs.org/docs/adding-search/

### SEO

https://www.gatsbyjs.org/docs/seo/

### Themes

https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/
https://www.gatsbyjs.com/gatsby-days-themes-chris/

### Authentication

https://www.gatsbyjs.org/docs/authentication-tutorial/

https://www.gatsbyjs.org/docs/building-apps-with-gatsby/#client-only-routes--user-authentication

## Multi-language solution

---

### Inspired by:

- [react-intl](https://github.com/formatjs/react-intl)
- [gatsby-react-intl-demo](https://github.com/bmihelac/gatsby-react-intl-demo) - Basic configuration and concepts.

Another [starter](https://www.gatsbyjs.org/starters/tomekskuta/gatsby-starter-intl/) which makes static pages for every locale and detect your browsers lang. i18n with react-intl (not implemented in this project, but worth seeing).

Another plugin [gatsby-plugin-i18n](https://github.com/angeloocana/gatsby-plugin-i18n), which solves multi language routes for Gatsby.
Has not been implemented, because it demands to make files with **.langKey.js** and the url will be /**langKey**/path/fileName.

### Implementation

---

### Infrastructure

- `src/utils.js` - Helper functions (taken from `gatsby-react-intl-demo`). _TODO:_ consider to combine with `src/locale`
- `gatsby-browser.js` - Component wrapper with locale data (taken from `gatsby-react-intl-demo` with several fixes). 
- `gatsby-node.js` - Added support in order to catch also pages behind the **locale prefix** (for example: **`/it`**`/app/profile` etc).
- `gatsby-ssr.js` - taken from `gatsby-react-intl-demo` (with eslint fixes). 

The above files are configured and should not require any changes for additional languages.

---

Locale configuration could be found in the `/src/locale` folder.

- `en.json, it.json` - json files with translation resources. For additional languages - add corresponding files.
- `index.js:`

```js
const languages = ['en', 'it'];
export const languageNames = ['English', 'Italiano'];
export const getLocalePrefix = locale => (locale === languages[0] ? '' : `/${locale}`);
export default languages;
```

- `languages` - list of supported locales
- `languageNames` - list of supported language names
- `getLocalePrefix` - helper function to get locale prefix (used in `navigate` method, `path` property and `<Link to="" />` property)

Default language is **English** (locale: `en`).

Default Page files are stored at `/src/pages` directory.

In order to add a new language for pages, they should be placed inside of the corresponding folder with locale name. For example, **Italian** pages are placed at `/src/pages/it`, **French** - at `/src/pages/fr` and so on.

### Components:

- `LanguageSelector` - used for switch between languages

### TODO:

- Use [gatsby-plugin-intl](https://github.com/wiziple/gatsby-plugin-intl) in order to **support multi-language url routes in a single page component**
- See more feature available for multilanguage support for CMS at [gatsby-starter-i18n-bulma](https://github.com/kalwalt/gatsby-starter-i18n-bulma)

## Tests

[Official Gatsby documentation](https://www.gatsbyjs.org/docs/unit-testing/)

[Testing with React-Intl](https://github.com/formatjs/react-intl/blob/master/docs/Testing-with-React-Intl.md)

[Testing Gatsby components and Graphql](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/testing-components-with-graphql.md)

## Working with images
Optimizing image size is very important since lots of images can dramatically increase the size of your site.
Please refer to the following best practices when you want to use images:

https://www.gatsbyjs.org/docs/working-with-images/
https://www.gatsbyjs.org/packages/gatsby-image/
https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/



---

## **TODO**

- Fix 404 implementation
- Tests
