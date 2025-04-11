# Netflix GPT
-create app using vite
- configure tailwindcss
- Header
-routing of app
-Login form
-Sign up form in the same form . Convert the same form into sign up form using toggling and state variable 
-and will built validation in the form
-Read about formik
-see useRef hook to get the reference of input field here , useRef gives the reference of the element in the form of object
//we will have regex in utils which will test my email and password and we will also show error msg
-we will built authentication using firebase
-firebase setup

-deploying our app to production
-Create SignUp in Firebase
- using password authentication we have our code for signin or signup
-if the user sign up-sign in we will get this user object and we have to keep this object user with us because we can need this user object anywhere in my app, so as soon my user sign-in or sign-up , i will just add all my data to redux store and will navigate the user to my browse page
-create redux store
- we will push the user in our redux store
- now we have a fucntion onAuthStateChanges , what does this function do, this api is called whenever the user signup, whenever the user sign in and whenever the user sign out matlab whenever the authentication state changed, this is kind of event listener
-we will do thiss setup in body of our app initially
-as soon as the user sign in , we will navigate it to the browser page, so we have useNavigate hook
//but when we did that in body , it throws an error useNavigate may be used only in the context of a <Router> component but this body is outside the router , it is itself the parent , so we need to add this inside the child component, so where should we add this , so we willl navigate in our login page
- now we will add logout function signout authentication in header
- BugFix: Sign up user displayName and picture update
- BugFix: if the user is not logged in  Redirect /browse to login page and vice-versa, humlog auth statechanged se hi navigate karenge
onauthstatechange is the code which check auth of user

- Unsubscribed to the onAuthStateChanged
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
-Get Data from TMDB now playing movies list API 
- make api call
Register TMDB API & create an app & get access token
-get Data from TMDB now playing movies list api , look for now playing api
-make api call
-add the movie data in redux store
-make custom hook for api call of addNowPlayingMovies
- create movieSlice
updated the store with movie data
-Planning for mainContianer & secondary container
fetch data for trailer video
-update store with Trailer Video Data
- Embedded the youtube video and make it autoplay&mute
-added Tailwind classes to make mainContainer look awesome
-Build Secondary component
-Build Movie List
-Build Movie Card
-TMDB Image CDN URL
-Made the browse page amazing with tailwind css
- usePopularMovies custom hook
GPT search feature





# Features
- Login/Sign Up
    - Sign In/Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieSuggestions
                - MovieList 8 N
- NetflixGPT
    - Search Bar
    - Movie Suggestions

