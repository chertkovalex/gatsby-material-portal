# Sapiens Digital Portal Template Application

## About

Sample application with basic functionality as an example of integrating [Gatsby](https://www.gatsbyjs.org/) + [MATERIAL-UI](https://material-ui.com/) + [Netlify CMS](https://www.netlifycms.org/) with other services.

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
