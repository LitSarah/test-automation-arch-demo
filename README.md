# Test Automation Architecture Demo

![GitHub License](https://img.shields.io/github/license/LitSarah/test-automation-arch-demo)

A demo project for experimenting and documenting architectural patterns for test automation projects.

[OrangeHRM's demo site](https://opensource-demo.orangehrmlive.com) is the site used for example purposes.

## Table of Contents

- [Installation](#Installation)
- [Usage/Examples](#Usage/Examples)
- [Running Tests](#Running-Tests)
- [Tech Stack](#Tech-Stack)
- [Contributing](#Contributing)
- [License](#License)

## Installation

1. Fork or clone this repository
2. Run `pnpm install`

## Usage/Examples

One of the main tenents of this repository is to be self-explanatory. Comments will be added to explain the why and how of certain patterns.

The project is broken into several folders:

- `tests`
  - Contains the Playwright spec files
- `playwright`
  - Contains code to get Playwright working, such as fixtures and authentication files
- `pages`
  - Contains the page objects for the project
- `api`
  - Contains classes for interacting with REST APIs
- `components`
  - Contains the component objects

## Running Tests

To run tests, run the following command

```bash
  pnpm run test
```

## Tech Stack

![Tech Stack](https://go-skill-icons.vercel.app/api/icons?i=playwright,ts,nodejs)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)
