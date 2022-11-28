# Chess-website
A React Project that allows a user to play chess

## Skills Used
* React
  * State Management
  * React Hooks (useState, useEffect)
  * Organization
* CSS
  * Grid
* Logic
  * How the pieces should move
  * Castling
  * En passent
  * Naming the moves

### Photo
___
![Screenshot of main page on website](https://user-images.githubusercontent.com/67520166/171050754-0a6d0f67-078c-4cb1-bcc1-f7fc65887995.png)
___

## Improvements
Although it is a lot of fun to play already, it could benefit from more additional things and perhaps some tweaks to the UI and how the moves are determined
(on the right) <br/>
I will certainly look back at this sometime in the future and improve it. I want to add a bot to play with (through API calls with a third party). I also want to make my
own bot to be able to play with, although I'm not sure how this would end up working as I'd have to make the algorithm (or ML Reinforcement Learning Model) and host it 
somewhere. <br/>
Here is a list of how I think it could/should be improved upon:

* Gameplay
  * Getting the moves correctly when there are multiple things that could move to a spot (for example if two rooks can go to the same spot, specifiy their row or
  column in the move to uniquely identify it) (example: Rbc8 if there is a Rook at b8 and d8)
* UI
  * Could use better styling
  * Needs more organization
  * Could be more responsive for smaller screen sizes 
  * Could use actual icons of chess pieces and not the unicode so that it looks the same across devices
* General
  * Needs a bot to play with (I have little to no friends and I'm sure others are in the same boat)
  * Statistics Page
  * Player vs Player
  * Chess Puzzles
  

## To see the website
<a href="https://verdant-ganache-0ecc86.netlify.app/">Click here to see the website</a>

## Conclusion
This project was a lot of fun developing across the few weeks that I've been working on it (about 20 hours of effort in total, note I was doing other things so I didn't dedicate all my time to this project).
I definitely realized with this project, the importance of organization and thinking about what you are going to do, before you do it. To develop fast means to develop slow (at least in the long run). 
