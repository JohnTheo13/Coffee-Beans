Folder Structure
================

Motivations
-----------

- Module usage predictability (refactoring, maintainemaintenancence, you know
  what's shared-what's not, prevents accidental regressions, reusability,
  avoids huge directories of not-actually-reusable modules, etc)
- Code splitting

How it works
------------

It consist of "generic" folders and a containers folder which contains
folders of bigger components that usually consume the "generic".
The containers can contain a components folders which encapsulates only components
consumed by the specific container. Last our test are in _test_ folders inside path
of the component they are testing.
`UI/_test_/file.test.js`.

Examples of "generic" folders:

- components (the first)
- api
- types
- store
- reducer
- config

Our directories like this:

```
src
├── api 
├── components
|    ├── UI
|    :   └── _test_
|
├── config   
├── containers
|    ├── Home
|    : 
|     
├── reducers    
├── store
├── types
└── index.js

```

Next, each of these folders has an `index.js` file, which is the file
that handles the entry into the folder We'll also have
some top-level application bootstrapping stuff at the root, like ├── └── index.js
`config/index.js`.

```
src
├── api
|    └── index.js
├── components
|    └── UI
|         └── index.js 
├── config
|    └── index.js
├── containers
|    └── Home
|         └──index.js
├── reducers
|    └── index.js
├── store
|
├── types
|    └── index.js
└── index.js
```

With this structure, each component has its own directory to hold its
modules. In other words, we've introduced "scope" into our application
file structure.

As our components get bigger we can have smaller components inside the "main" components
folder and since we are using [styled-components](https://styled-components.com) as they get
bigger is wise to have them in different files to be consumed by the component. Also we introduce
helper files which contains methods or structure to help computations and other scenarios
`src/Card/`

```
src
└── components
         └── Card
              ├── FlexContainers
              ├── RattigSection
              ├── Styled
              ├── index.js
              └── helpers.js
```