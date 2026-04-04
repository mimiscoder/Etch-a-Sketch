# Etch-a-Sketch

## Personal Feeling
Phew! That was tough, but I finally did it. This was a harder project compared to the other ones. At the start, I didn't actually understand the assignment at hand. I couldn't understand, like, what they were asking me to do. It was something new for me, so it was really hard for me to get it. But after a long time of research and looking up stuff here and there. I finally was able to get it. So, I start off building it. 

Everything was somehow going smoothly until I reached two of the last tasks, which were like bonuses or optional to do. But you know me (I like challenges!). So, I take on both of them. But you can't imagine what was waiting for me at the end of the tunnel. 

And, NO, I didn't see any lights, but I saw a bunch of scary and tough problems and a really challenging bug waiting and smiling at me (Lol, I said it like it was a movie or something). Overall, it was painful; nonetheless, it was an experience filled with learning and understanding. 

## Project Description
It is like something between a sketchpad and an Etch-A-Sketch. In this web app, you have a large rectangular board. Inside this board, there are many small cells (or boxes) arranged in a grid.

There are different buttons that allow you to choose various coloring modes. Once you select a mode, you can move your mouse over the cells, and they will change color based on the selected mode.

There are also two additional buttons: one to increase the number of cells per side, and another to reset the grid back to its default size.

## Challenges
Well, I faced two main hard challenges. First, as I said above. I couldn't understand the project itself. Like, what actually is this project, and what should I do to build it? But, after a lot of research, I understand it. Lastly, for the shade mode button. I was trying to use two event listeners that had a parent-child relationship.

Where the inner (child) event listener method was created multiple times and stacked one after another every time the shade mode button was clicked. As a result, the opacity was calculated uncorrectly and not as expected. I couldn't find any solution at first.

After doing a lot of googling, I come to understand that I can set the `onmouseover` property for each of the grid's cells. That doesn't lead to the event listener being created again and again when the shade mode button is clicked. But it just replaces the old one, which fixed the problem.

## Learning Experience
- I learned more about DOM manipulation and got a lot of practice with it while building this project.
- I learned how event listeners work both individually and when used together or inside one another.
- I learned about dynamic UI, meaning how the layout can change based on user input.
- I also got introduced to some new events.