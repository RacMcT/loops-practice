
### Setup

1. From your project directory, run `npm i` to tell NPM to install all the
node modules we use in this class (see `package.json`)
1. Use your textEditor (VS Code) to change your files.
1. When you're finished `git status`, stage your file `git add .`, commit your changes `git commit -m "functions working"`, and push to
GitHub `git push`
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```

1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.

#### Get latest workbook updates

1. To get the latest code/homework/test updates, be sure to have a "clean
working directory" by committing or removing all of your changes. You check for
a "clean working environment" by running `git status` and making sure no files
show up.

1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure your code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
