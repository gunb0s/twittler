# TODO

    handle storage when edit tweets

# Issue 1

    When click hash tag, page renders and show only tweets include the hash tag
    and url modified with /#hashtag
    Without click hash tag, just type url with /#hashtag, page should show same page above.
    In this situation, how can i implement?
    => manage hash state in App.jsx

## Issue 1-1

    when I comback to home, show all tweet again.
    => when click home in sidebar trigger setHash("")
