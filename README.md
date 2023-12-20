[![npm version](https://badge.fury.io/js/your-package-name.svg)](https://badge.fury.io/js/your-package-name)
[![code style: eslint](https://img.shields.io/badge/code_style-eslint-5a11ff.svg)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# TextScramble

TextScramble is a React component that animates text by gradually revealing it through a scrambled effect.


![ezgif com-optimize](https://github.com/DilrukR/react-scramble/assets/68820399/2aed07ec-488e-4ae0-943a-d64f30758921)



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

## Props for TextScramble Component

| Prop                      | Description                                                                       | Default Value                              |
|---------------------------|-----------------------------------------------------------------------------------|--------------------------------------------|
| texts                     | An array of strings to display and animate                                        | `["Hello world from React Scramble "]`     |
| letterSpeed               | Speed at which individual letters are revealed                                     | `20`                                       |
| nextLetterSpeed           | Speed of revealing the next letter                                                 | `100`                                      |
| paused                    | Pauses the animation when set to `true`                                            | `false`                                    |
| pauseTime                 | Time to pause between text changes                                                 | `0`                                        |
| textStyles                | Custom styles for the displayed text                                               | -                                          |
| containerStyle            | Custom styles for the component container                                          | -                                          |
| scrambledColor            | Color of the scrambled text                                                        | `'gray'`                                   |
| revealedColor             | Color of the revealed text                                                         | `'black'`                                  |
| onAnimationEnd            | Callback function triggered at the end of each text animation                      | -                                          |
| onTextScrambleComplete    | Callback function triggered when all texts have been scrambled                     | -                                          |
| symbols                   | Array of symbols to use for scrambling                                             | `["A", "B", ...]` (Alphabets A to Z)       |


## Examples

## Basic Usage

```bash
<TextScramble texts={["Hello", "World"]} letterSpeed={20} />
```
## Custom Styling

```bash
<TextScramble
  texts={["Hello", "World"]}
  letterSpeed={20}
  textStyles={{ fontSize: '24px', fontWeight: 'bold' }}
  containerStyle={{ border: '1px solid black', padding: '10px' }}
/>
```
## Contributing

Contributions to the TextScramble component are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`.
3. Implement your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin my-feature`.
5. Submit a pull request detailing your changes.

Feel free to open issues on the [GitHub repository](https://github.com/DilrukR/react-scramble) for feature requests, bug reports, or general feedback.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


## Follow Me On

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DilrukR)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dilrukr/)

Feel free to connect with me on Twitter, GitHub, and LinkedIn!

