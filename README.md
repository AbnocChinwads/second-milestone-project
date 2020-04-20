# Second Milestone Project
For this project I chose to build a web version of the electronic game ‘Simon’, the basic premise of which is: when you press the start button at the centre of the device, the four coloured buttons surrounding it flash (they also have a tone they play specific to each colour) in a random sequence which you have to match.

## UX

The intended users of this website would be anyone who would want to improve their memory, relive the classic game but without tones, or anyone who wanted to spend some time doing something simple but not necessarily productive. They would visit this website and have the ability to set a local high score that they can beat at a later date when they have some time they don’t know how to fill.

    * As a casual gamer, I want to have fun playing a game that isn’t too difficult to understand, so that I can kill some time while waiting for a bus.
    
    * As someone who works in a retail environment, I want something that is easily picked up and put down, so that I can relax when I am on a break.
    
Link to wireframes: (https://drive.google.com/file/d/1Xm1fj7bj0bNbwhSmmLjO9SjhNgh1ZPai/view?usp=sharing)

## Features

#### Existing Features
    
* Description and title – This tells the user how the game is played, and how it increases in difficulty.

* Interactive game – There are six buttons, five game buttons and the start button, when you start a level the sequence will flash between the differently coloured game buttons for you to match.

* Score, level, and high score counters – These allow the user to track their current score and level, and their highest score. The high score feature makes use of a localStorage variable.

* Dark mode – This switch is located in the top left of the webpage, and can be used if the user wants a less harsh viewport, it switches the background colour to black and the text colour to goldenrod. It also changes the black button to a white button so it can still be seen while playing the game. The dark mode switch will persist through page loads as it makes use of a localStorage variable.

* Header – This contains the dark mode switch and social media links, which allows users to achieve navigation to social media through easily discerned images for Facebook, Instagram, and Twitter.

* Footer – This contains a contact link, which opens up the users email program, so that the developer can be contacted.

#### Features Left to Implement

* Disabling of the game buttons while they are flashing, so as to eliminate any cheating by following along with the flashes.

* ~~Add a highest level localStorage variable.

## Technologies Used

* HTML 5 (https://www.w3schools.com/html/html5_intro.asp)
The project uses HTML 5 to create the webpage.

* CSS 3 (https://www.w3schools.com/css/)
The project uses CSS 3 to customise the look of the website

* Bootstrap v4.4.1 (https://getbootstrap.com/)
The project uses Bootstrap to simplify CSS processes

* Font Awesome v5.11.2 (https://fontawesome.com/)
The project uses Font Awesome to provide images for social media links and alongside the header links

* jQuery (https://jquery.com/)
The project uses jQuery for the gamle logic and the dark mode switch

## Testing

As a retail worker myself, I distributed a live link to my web game to colleagues and friends, so that I could have a group of play testers alert me to any issues or work arounds to my design. I would receive regular feedback through messages on Whatsapp and Facebook, and in the break room, that would alert me to various issues with the latest live version.

The dark mode switch came from a side project in which I was trying to create a persistent dark mode switch, it required some googling and reading of documentation on localStorage to get the code to work. But as it does function as intended I decided to include it in this project, to add something that is becoming more and more the standard in the development world.

The initial design relied on just four colour buttons, but user feedback was that this lead to very little variation in the random generation of the sequences. Adding the fifth button created enough variance without affecting the ease of use. Users also reported that you could press the start button as much as you want and increase the level count, but admitted that this didn’t increase difficulty. This lead to the creation of a shorter code section in which the array was checked to have been finished before level would increase, instead of relying on the score count. This lead to a further change where a hidden variable was added which increased difficulty for every odd level, which allows for two levels at the current difficulty. User feedback was that one was not enough, and lead to difficulty scaling too quickly.

With each stage of development I utilised google chromes developer tools to see how my website would function on varying screen sizes. On smaller screen sizes the buttons would be spaced poorly, leading to a five pip dice face look rather than a pyramid shape. So custom CSS was needed to set the properties of the buttons, which decreased the margin on all sides to give the desired pattern.

4K resolution brought the new issue of the font size being too small to read. This required the addition of media queries to increase all of the text sizes. 

There was an issue on mobile screen sizes, where users reported the heading and description text sat too close together and too close to the buttons, this was fixed by increasing the margin size on screens of width 768 pixels and smaller.

## Deployment

Having written the code in Gitpod, it was quite easy to deploy it on GitHub, I did this by using the git commands to add (git add), and then commit (git commit -m) my files to my Gitpod session, and then used the git push command to push the changes through to my master branch.

The deployed version is different to the development version as initially it was going to have four butons like the classic game, through user feedback this was found to be too repetitive in sequencing and a fifth button was added. The navigation in the Header was unneccessary as this was going to be a single page web game, so these items were removed a short way into development. The Footer was also found to be unneccessary, as there was plenty of space at the top of the page to place the social media links. This lead to the score, level, and high score elements to be moved below the buttons to fill the page space. Initially there was only a score element, but with the addition of difficulty scaling I decided to add a level count as well. With this iteration there came the idea to add a high score element, which initially only tracked high score by session, when the page was closed or refreshed, the high score was reset along with score and level. This changed to a localStorage variable and it now persists through page loads, along with the dark mode switch.

If you want to run my code locally, choose the IDE you’re most comfortable with, if that is Gitpod then type into the terminal ‘python3 -m http.server’ to open a port that will run the site in your web browser. For other IDEs you will have to check their help files as to how to do this.

## Credits

#### Content

* The random function and dark mode switch code came from online searching and reading through of various practices on the creation of random arrays (https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php), and the use of localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Media

* There is no media in this project

#### Acknowledgements

* I received inspiration for this project from the Hasbro (formerly Milton-Bradley) game Simon
