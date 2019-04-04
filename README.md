### **Naughts and Crosses.**

#### General Assembly - SEI-31

The task was to build, from the ground up, a functioning game of noughts & crosses using a mix of the first 2 weeks' learned technologies; *HTML*, *CSS* & *JavaScript*.

I'd be lying if I said I found it easy. I pushed myself to try and have 2 separate *JS* files, one for DOM manipulation and another for the game logic. All animation is done through *CSS*, with *jQuery* manipulating the classes as necessary. Actually, thats a lie I use jQuery to fade the text.

#### **Learnings**
The way I pass in my naughts and crosses images is based on the *HTML* data attribute, I then ran a render() function after each click and depending on it's value place either the X or O. It took some discovery before I understood how jQuery actually treats this data type a bit different ... in that it doesn't actually manipulate and rewrite the DOM. If updating the data type through jQuery, it'll store it in *jQuery magic land* rather than the expect place (along with the original data types) ... and even those are technically also in *jQuery magic land*.

#### **Show Me Already**
You can find my functioning naughts & crosses game here; https://trigotometry.github.io/project0/

#### **Potential Updates.**
~~I plan on refining the responsiveness, I'm not yet sure how I feel about Bulma over Bootstrap. Even though a number of posts have said the semantic approach it takes makes things easier to understand and guess, I'm not finding that with my own first attempt.~~
Responsiveness updated and overall Bulma does seem quite cool, though it took a long time to work out how to get my reset button to maintain an equal size of the middle column. The padding and margin default for the button on top of the columns was a real nightmare.

**Thank you to both Joel and Yianni for fielding questions.**
