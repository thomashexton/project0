### **Naughts and Crosses.**

#### General Assembly - SEI-31

The task was to build, from the ground up, a functioning game of naughts & crosses using a mix of the first 2 weeks' learned technologies; *HTML*, *CSS* & *JavaScript*.

I'd be lying if I said I found it easy. I pushed myself to try and have 2 separate *JS* files, one for DOM manipulation and another for the game logic. All animation is done through *CSS*, with *jQuery* manipulating the classes as necessary. Actually, thats a lie I use jQuery to fade the text.

#### **Learnings**
The way I pass in my naughts and crosses images is based on the *HTML* data attribute, I then ran a render() function after each click and depending on it's value place either the X or O. It took some discovery before I understood how jQuery actually treats this data type a bit different ... in that it doesn't actually manipulate and rewrite the DOM. If updating the data type through jQuery, it'll store it in *jQuery magic land* rather than the expected place (along with the original data types) ... and even those are technically also in *jQuery magic land* once imported.

#### **Show Me Already**
You can find my functioning naughts & crosses game here; https://trigotometry.github.io/project0/

![Trigotometry's Naughts & Crosses Game](https://www.github.com/project0/naughts&crosses.png)

#### **Potential Updates & Additions.**
I would like to add in a score counter, I'd like code it so scores fade in and out at the same rate as the h1 at the end of the round ... and if the mouse moves onto the left or right side of the game board, the scores are faded in.

I could also add a second render function that fades the naughts and crosses out once the reset button is called, perhaps there is a way to do it with my exisiting one? To be revisited.

**Thank you to both Joel and Yianni for fielding questions.**
