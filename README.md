![Give+Seek logo](readme-img/logo.png)

# Front End

[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/nwHacks2019/frontend/blob/master/LICENSE)

Angular 7.2.3 website for Give+Seek, a platform for human connection and support when we need it most.

View the website here: https://nwhacks2019.github.io/frontend/

## Setup

First, install [Angular](https://angular.io/).

To set up the website locally, run:
```shell
ng serve
```

And open the website at http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Deployment

To build the website generically for deployment, run:
```shell
ng build
```

The build artifacts will be stored in the `dist/` directory. These are ignored by Git and will not be tracked by version control.

Our website is built and hosted on [GitHub Pages](https://pages.github.com/). Any changes made to the source code will not be reflected on the deployed website unless the GitHub Pages files are rebuilt.

Rebuild the GitHub Page by running the following:
```shell
./scripts/deploy-gh-pages
```

Commit and push the changes made to the `docs/` directory, and the deployed site will update.
