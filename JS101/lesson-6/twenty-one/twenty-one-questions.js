/*
1.  Minimizing calls to total:
    In my version of twenty-one (twenty-one.js) I was able to implement
    playerTotal and dealerTotal. I was also able to use it in my functions,
    however shadowing was preventing updating the total outside
    of the functions. Because of this I had to update playerTotal and
    dealerTotal after each hit function. Then I could compare them.

2.  The last playAgain call:
    In the Launch School solution for twenty-one, the last call for playAgain
    is different for a few reasons. First off, it differs because the game
    didn't end by default and goes to comparing the final totals to determine
    the results. Second off, it doesn't need to display the results because they
    have already been displayed, so it can all be condensed to one line. And
    lastly it differes because of the exclamation mark in front of it, negating
    the return from playAgain in a condition. This makes it so that if the
    response isn't 'y', then it breaks out of the main program loop and the loop
    doesn't begin again. All other calls of the playAgain function don't utilize
    this method, but instead continue to display the results.

3.  Ending the round:
    I was able to extract the final results to a function, 'results', that
    includes the comparison of the game results, and text output if the player
    or dealer busts.

4.  Best of Five:
    Implemented!

5.  More Constants
    Implemented!


6.  Improve Input Handling
    Already had this implemented!

*/
