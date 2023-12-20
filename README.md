[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/your-package-name)
[![code style: eslint](https://img.shields.io/badge/code_style-eslint-5a11ff.svg)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# TextScramble

TextScramble is a React component that animates text by gradually revealing it through a scrambled effect.

## Installation

Install TextScramble via npm:

```bash
npm install @dilrukr/react-text-scramble
```
## Example Code

```bash
import React from 'react';
import TextScramble from '@dilrukr/react-text-scramble';

const YourComponent = () => {
  return (
    <div>
      <h1>Welcome to TextScramble!</h1>
      <TextScramble
        texts={['Hello', 'World']}
        // Other props...
      />
    </div>
  );
};

export default YourComponent;
```
