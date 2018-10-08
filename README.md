# Feed Reader Testing

## Important Note

This is the third project for Udacity's front-end web development nanodegree.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

## Steps
- Review the functionality of the application within your browser.
- Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an      understanding of how it works.
- Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
- Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
- Return the `allFeeds` variable to a passing state.
- Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
- Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
- Write a new test suite named `"The menu"`.
- Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- Write a test suite named `"Initial Entries"`.
- Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
- Write a test suite named `"New Feed Selection"`.
- Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
- No test should be dependent on the results of another.
- Callbacks should be used to ensure that feeds are loaded before they are tested.
- Implement error handling for undefined variables and out-of-bound array access.
- When complete - all of your tests should pass. 


![screen shot 2018-10-08 at 5 01 02 pm](https://user-images.githubusercontent.com/28276138/46634047-a951ca80-cb1d-11e8-9652-ccef93b93fea.png)

![screen shot 2018-10-08 at 5 15 55 pm](https://user-images.githubusercontent.com/28276138/46634110-dd2cf000-cb1d-11e8-8b51-07f8b091c161.png)


## Required

- Download or Clone the Repository.
- Double click the index.html file to view the project in your browser.
