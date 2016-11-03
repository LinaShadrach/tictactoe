# _Tic Tac Toe_

#### _A Page Display the Ping-Pong Javascript Challenge, 11-2-2016_

#### By _**Devin Ludwig Lina Shadrach**_

## Description

_This page will allow two users to play tic tac toe against each other and output a response when someone wins._

## Specifications

* _It will display an empty tic tac toe grid when a button is pushed for a new game._
    * _Example Input: button push_
    * _Example Output: (a visual grid made with html on the page)_
* _It will accept inputs for names of Player 1 and Player 2._
    * _Example Input: 9_
    * _Example Output: "ping"_    
* _It will assign symbols "x" and "o" to the two players._
    * _Example Input: button push_
    * _Example Output: player1 mark = "O" player2 mark = "X"_  
* _It will place an x or o depending on whose turn it is_
    * _Example Input: player1 click_
    * _Example Output: "o"_  
* _It will not allow players to click on the same square twice._
    * _Example Input: player1 click on filled square_
    * _Example Output: nothing_  
* _It will check when there is three in a row and declare a winner._
    * _Example Input: three Xs_
    * _Example Output: player2 wins_  
* _It will ask the user whether they would like to play one or two players_
  * _Example Input: one player_
  * _Example Output: player vs computer_
#### One player Specs

* _If player1 has 2 in a row, computer blocks it._
  * _p00, p11_
  * _c22_
* _If computer has 2 in a row, it chooses spot to make 3 in a row._
  * _c00, c11_
  * _c22_
* _If player1 goes first and chooses center, computer chooses a corner._
  * _p11_
  * _c00, c02, c20, or c22_
* _If player1 goes first and does not choose center, computer chooses a center._
  * _p00_
  * _c11_
* _If player1 chooses center first and second choice presents nothing to block, computer takes another corner._
  * _p11_
  * _c02, c20, or c22_
* _It will randomize which player goes first_
  * _one player_
  * _player 1 goes first_
* _If computer goes first, it will choose the center._
  * _one player: computer_
  * _c11_
* _If computer goes first and player chooses a corner, then computer takes opposite corner._
  * _p00_
  * _c20_
* _If computer goes first and player chooses a corner, and there's nothing to block, then computer chooses corner in row where there are no player marks._
  * _p21_
  * _c02_
* _If computer goes first and player does not choose a corner, then computer chooses adjacent corner_
  * _p12_
  * _c22_


## Setup/Installation Requirements

* _Clone git repository_
* _Navigate to index.html in the "tracks" directory and open in your browser of choice_
* _You may also view it on Github Pages at "https://devinludwig.github.io/ping-pong/"_


## Support and contact details

_If you have any issues with this application please don't hesitate to contact me at devinludwig@hotyahoos.com. You are welcome to contribute to the code and please let me know if you do!_

## Technologies Used

_This was made with Javascript, utilizing bootstrap for some of the styling and jQuery for the interactivity._

### License

*This project is licensed under the GPL license.*

Copyright (c) 2016 **_Devin Arthur Ludwig_**
