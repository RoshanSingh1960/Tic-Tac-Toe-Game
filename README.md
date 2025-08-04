Tic-Tac-Toe Game
A simple, interactive, and fun web-based Tic-Tac-Toe game built with HTML, CSS, and JavaScript. This project supports two-player gameplay (Player X vs Player O), has cool sound effects, and includes a reset option. It also shows a victory animation when someone wins!

Live Preview
Just open index.html in your browser and start playing. No installation needed.

How to Play
1.	The game starts with Player X.
2.	Players take turns clicking on any of the 9 empty cells.
3.	The first player to line up 3 of their marks (horizontally, vertically, or diagonally) wins.
4.	If all cells are filled and no one wins, it’s a tie.
5.	Click the "Reset Game" button to play again anytime.

Features
⦁	Interactive 3x3 Game Board
⦁	Two-Player Mode (X vs O)
⦁	Turn Indicator: See whose turn it is.
⦁	Win Detection: Highlights winning cells with a flash animation.
⦁	Draw Detection: Handles tie games cleanly.
⦁	Sound Effects:
1.	 	X’s turn → x.mp3
2.	 	O’s turn → o.mp3
3.	 	Win sound → won.wav
4.	 	Draw sound → draw.wav
⦁	Win Celebration GIF: Displays a fun “Good Game” animation when a player wins.

Code Overview
⦁	HTML (index.html): Sets up the layout of the game board, status display, and reset button.
⦁	CSS (styles.css) (not shown here): Handles visuals like layout, colors, fonts, flashing win effects, and board styling.
⦁	JavaScript (script.js):
1.	 	Manages game state (board[], current player, win conditions).
2.	 	Listens for clicks on cells.
3.	 	Handles switching turns, checking for wins or draws, and resetting the game.
4.	 	Controls sound effects and win GIF display.

Files & Structure
Tic-Tac-Toe/
├── index.html        → Main game UI
├── styles.css        → Styling and layout
├── script.js         → Game logic and interactivity
├── x.mp3             → Sound for X's turn
├── o.mp3             → Sound for O's turn
├── won.wav           → Victory sound
├── draw.wav          → Tie game sound
├── gg.gif            → Win celebration GIF
