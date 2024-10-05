# English

For english version refer to docs/README.eng.md

-------

# About the Application

The application was written to study React. It was developed by following [this video](https://youtu.be/GNrdg3PzpJQ) from Ulbi. My approach was to first watch a video fragment to see what we were going to implement and what tools the author used to implement each feature. Afterward, I would create a task in Obsidian where I described:

* What needed to be implemented (without details, for example, if I needed to create sorting functionality for posts, I would simply write "Implement sorting by title and content").

* I would list the technologies I needed for the implementation.

Once the task was ready, I would create a plan either using pseudocode or a schematic in a tool like Paint to outline the implementation steps. Only then would I begin working on the task. I researched the necessary technologies, read documentation, and wrote a solution that matched my understanding, rather than just copying the code from the video.

Once the implementation was complete, I would go back to the video to see how it was implemented there and look for areas where I could improve my own solution.

# Running the Application and Its Contents

## Running the App
To run the app, you need to clone the repository to your local machine and install the dependencies by running `npm install`.

Once the installation is complete, start the application using the command `npm start`.

## What the Application Includes

The app consists of several pages:
* `About` - A page with a brief description of the app
* `Home` - A welcome page
* `Blog` - A page with blog posts
* `AuthPage` - A page with a login form

The app does not have any specific purpose or underlying idea; it was developed solely to practice React.

# What Was Learned and Implemented

## React Basics
* Learned how to properly convert an array of data into an array of elements using the `key` attribute
* Understood what `JSX` is and how to structure an application into components
* Two-way data binding
* Props and `props.children`
* Controlled and uncontrolled components
* Conditional rendering of components
* Not exactly React-related, but I studied CSS modules for styling components
* Class and functional components
* Hooks

There might be other things I've forgotten because they’ve become so routine that I just use them without thinking about them.

## Basic Hooks
Nearly all essential vanilla hooks:
* `useState()`
* `useRef()`
* `useEffect()`
* `useContext()`
* `useMemo()`

## Custom Hooks
I learned how to write custom hooks and understood their purpose. Custom hooks in the application:
* `useFetching()` - A hook for fetching data from the server
* `usePosts()` - A hook for working with posts
* `useObserver()` - A hook for working with the Intersecting Observer API

## Routing
I got familiar with `react-router-dom` and learned how to handle routing within the application using the corresponding components:
* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `Outlet`
* `NavLink`

I also learned two fundamental hooks from the library:

* `useParams`
* `useNavigate`

## Server Requests
Worked with the `axios` library to send server requests from the client.

For example, it was used to fetch posts from `jsonplaceholder`, load specific posts, and fetch comments for those posts.

## Animations
I briefly experimented with element animations using the `React Transition Group` library.

## Additionally

I reinforced a lot of core JavaScript concepts such as:

* `Working with objects`
* `Working with arrays`
* `Spread and rest operators`
* `Asynchronous programming`
* `Classes`
* `Event handling`
* `Ternary operator`

And likely more things that I can't recall right now.

## Conclusion
I might have missed something, but unfortunately, I can't keep all the information in my head. I've written down everything I could remember and find in the app and in the journal I maintained during development, which is available in `docs/GUIDE.md`.

In the end, this project turned out to be quite comprehensive and gave me a lot of knowledge, for which I'm extremely grateful to [this person](https://www.youtube.com/@UlbiTV).