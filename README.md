> This repo has been archived and moved [here](https://github.com/etn-ccis/blui-doc-it).

# Doc-It (a.k.a. brightlayer-ui.github.io)

[![CircleCI](https://circleci.com/gh/brightlayer-ui/doc-it/tree/master.svg?style=shield&circle-token=fc2656a76d70b4ff9cdc66cccc758c0dfbf89d25)](https://circleci.com/gh/brightlayer-ui/doc-it/tree/master)

Doc-It is the source code for the brightlayer-ui.github.io documentation site for Brightlayer UI. The site is built to both provide documentation on how to use the system, but also as an example of how to use it. The entire site is using using the Brightlayer UI design system - built with React+Redux, Material UI, and the Brightlayer UI component library.

## Contributing

To contribute to the documentation site, you will need to clone a local copy of the repository:

```
git clone https://github.com/brightlayer-ui/doc-it
```

You can then install the necessary dependencies and run a local instance with the following commands:

```
cd doc-it
yarn install
yarn start
```

### Updating Search Index

Every time you make any changes to anything in `src/docs/`, run `yarn indexer` from the root folder to regenerate the databases stored in `src/databases/`.

If you make changes to `src/__configuration__/navigationMenu/navigation.tsx`, you will also need to update `scripts/crawl/sitemap.json`.

## Project Structure

This project is built using [React](https://reactjs.org/), [React-Router](https://reacttraining.com/react-router/), [Redux](https://react-redux.js.org/), and [MDX](https://mdxjs.com/). The majority of the content is written in Markdown and integrated into the React skeleton and navigation by using MDX. This approach allows us to simplify the application logic and make the content easy to update.

### Folder Structure

The folder structure of the application is segregated to keep the application and the content separate (as much as possible).

```
└── /src
    |── index.tsx                           // the root file that renders the application
    |── /__configuration__                  // assorted configuration for populating some dynamic content areas on the site (navigation, roadmap, etc.)
    |── /__types__                          // shared type definitions
    |── /databases                          // databases generated automatically for the search functionality
    |── /app
    │   |── /api                            // api utilities for pulling data from npm, github, circleci
    │   |── /assets                         // images and icons
    │   |── /components                     // re-usable component definitions
    │   |── /hooks                          // react hook definitions
    │   |── /pages                          // component-based pages, not markdown-based (e.g., resources, roadmap, langin page)
    │   |── /redux                          // actions, reducers, and store
    │   |── /router                         // the main application router and navigation drawer
    │   └── /shared                         // extra utility functions
    |
    └── /docs                               // markdown-based page definitions
        |── /community                      // information on how to be a part of Brightlayer UI
        |── /design                         // information for designers using Brightlayer UI
        |── /development                    // information for developers using Brightlayer UI
        |── /get-started                    // information on getting started with a project
        |── /patterns                       // design patterns and sample code
        |── /release-notes                  // information about past releases
        └── /style                          // style guide definitions (color, typography, icons)
```

## Builds and Deployment

The Doc-it project is configured with automated builds and deployment scripts.

When changes are committed to the dev branch, they are automatically run through the test scripts and if the tests pass, the site is deployed to the staging server.

When changes are committed to the master branch and the tests pass, the changes are automatically deployed to brightlayer-ui.github.io.

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                       | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |
