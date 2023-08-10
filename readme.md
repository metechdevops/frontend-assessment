# Assessment Task Completed


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



### Q: Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

#### Explaination

The expression ('b' + 'a' + + 'a' + 'a').toLowerCase() might look a bit confusing at first, but let's break it down step by step to understand why the result is "banana."

'b' + 'a' evaluates to the string "ba". So far, we have: "ba" + + 'a' + 'a'.

+ 'a' is an attempt to convert the character 'a' to a number using the unary plus operator (+). However, since 'a' is not a valid number, this part evaluates to NaN (which stands for "Not-a-Number"). Now, the expression becomes: "ba" + NaN + 'a'.

"ba" + NaN results in the string "baNaN". The expression is now: "baNaN" + 'a'.

"baNaN" + 'a' simply concatenates the strings, resulting in the string "baNaNa". Now, the expression is: "baNaNa".toLowerCase().

Finally, .toLowerCase() is a method that converts all characters in a string to lowercase. Applying this method to "baNaNa" results in the string "banana".

So, the entire expression ('b' + 'a' + + 'a' + 'a').toLowerCase() breaks down as follows:

'b' + 'a' → "ba"
+ 'a' → NaN
"ba" + NaN → "baNaN"
"baNaN" + 'a' → "baNaNa"
"baNaNa".toLowerCase() → "banana"


the final result of the expression is "banana".
