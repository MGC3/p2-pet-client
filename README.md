# P2 Petlee Full-Stack App (client)

<p align="center">
  <img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/screenshot-final-landing.png" width=300>
</p>

Petlee is a weight tracking app for pets. Users sign up and add the pets they want to track and then begin adding weight entries. As users add entries, they can see an auto-generated chart to help track their progress.

The backend for this app can be found in the following repo: [p2-pet-server](https://github.com/MGC3/p2-pet-server)

### Technologies used

- Javascript
- jQuery
- Ruby
- Ruby on Rails
- Postgres
- SASS
- Handlebars
- Material Design
- Chart.js

### Planning, Development and Problem Solving Strategy

<p align="center">
  <img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/mango.jpg" width=300>
</p>
As a cat owner who's trying to help their pet lose weight, I quickly became attached to the idea of creating a web app to help me track her progress. This is something that I've been keeping track of in a Google Doc, so I thought it would be a fun and practical opportunity to try and improve my current process.

<p align="center">
  <img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/sketch-p2.jpg" width=300>
</p>

Before touching any code, I spent a good amount of time planning out what MVP would look like. After cutting the idea down to the absolute bare minimum (a user can CRUD pets), I started thinking about other features that could be reasonable MVP+ features (use charts to display pets weight) and nice-to-haves (a fun landing page). I created some quick sketches to get a better idea of what I would be aiming for and to help flush out the user flow a bit. I found this to be pretty useful as it's much faster iterating on paper than it is in code.

<p align="center">
  <img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/trello-p2-initial.png" width=300>
</p>

After the sketching and brainstorming sessions, I created stories on a Trello board and began coding. Even with all the planning, there were definitely times were I started to feel overwhelmed by the amount of things that needed to get done. And of course there were also some unexpected twists along the way and fun bugs to try and squash. Despite some challenges here and there, I was still able to reach MVP and a couple extra features.

My problem solving strategy for most things involved relying heavily on the Chrome dev tools. As always, `console.log`ing anything and everything was a solid strategy. I also relied on the network tab to help test and debug my API requests, which helped pinpoint if issues were coming from the frontend or the backend. Another useful strategy was drawing things out on paper, which helped to visualize abstract problems.

### If I had more time...

Some known issues that I'd really like to fix as priority would be making the app responsive (I put this off early on and always thought I'd get the chance to come back to it, but never did) and adding a confirmation dialog before destructive actions.

One feature I would have liked to implement if I had more time would be to allow users to set a target weight and goal and have a "burn down chart" style option to help encourage goal progression. Another feature I was interested in was the ability to optionally store other data such as meals, calories, notes, etc. and see if that would make the app more useful.

### Wireframes and User Stories

Initial wireframe for MVP:

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/wireframes-pet-show.png" width=300>
</p>

Progress towards MVP:

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/screenshot-mvp-02-userhome.png" width=300>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/screenshot-mvp-pet-show.png" width=300>
</p>

Final screenshots:

<p align="center">
  <img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/screenshot-final-landing.png" width=300>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p2-pet-client/master/documentation/screenshot-final-pet-show.png" width=300>
</p>

Some examples of user stories:

- As a pet owner, I want to be able to track my pets weight over time.
- As a pet owner, I want to be able to add multiple pets.
- As a user, I want to be able to easily visualize my pets progress on a chart.
