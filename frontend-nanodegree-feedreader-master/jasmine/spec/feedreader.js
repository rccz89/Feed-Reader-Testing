let pastFeed,
    newFeed;


$(function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

    describe('RSS Feeds', function() {     
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have in each feed a defined url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have in each feed a defined name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


        /*  Write a new test suite named "The menu" */
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
    describe('The menu', function() {     
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('changes visibility when the menu icon is clicked', function() {
            $('a.menu-icon-link').trigger('click'); // show menu
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').trigger('click'); // hide menu again
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

        /*Write a new test suite named "Initial Entries" */
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {     
        beforeEach(function() {
            done();
        });

        it('are present', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

        /* Write a new test suite named "New Feed Selection" */
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {


        beforeEach(function(done) {
            loadFeed(0, function() {
                pastFeed = $('.feed').html();

                loadFeed(1, function(){
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('is different from the other feed', function() {
            expect(pastFeed).not.toBe(newFeed);
        });
    });
}());
