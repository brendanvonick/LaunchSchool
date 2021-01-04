/*
1.  In my version of twenty-one (twenty-one.js) I was able to implement
    playerTotal and dealerTotal. I was also able to use it in my functions,
    however shadowing was going on which prevented updating the total outside
    of the functions. Because of this I had to update playerTotal and
    dealerTotal after each hit function. Then I could compare them.

2.  In the Launch School solution for twenty-one, the last call for playAgain
    is different because of the exclamation mark in front of it, negating the
    return from playAgain in a condition. This makes is so that if the response
    isn't 'y', then it breaks out of the main program loop. All other calls of
    the playAgain function don't utilize this method.

3.  Without restructuring the main game loop and changing the condition of the
    game loop we can't extract to a function. This is because the break keyword
    is used to exit the main game loop and can't be used in a function nested
    within the main game loop, per the MDN documentation.

4.

*/
