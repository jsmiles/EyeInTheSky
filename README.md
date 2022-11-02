# EyeInTheSky
Find an image from NASA for your location

## How it works
Select a location you like and a date. Then submit your choices and wait for a matching satellite image to be rendered below. In the first instance I used [Open Street Map](https://nominatim.openstreetmap.org/ui/about.html) to convert the location into latitude and longitude. Next, I called the [NASA API](https://api.nasa.gov/) for those coordinates and returned the closest matching Landsat image. 

## Corner Cases
While this project is fun, there are a number of issues you might face when using the app that could be frustrating but are easy to understand. 
1. Cloudy: it is a fact that clouds exist and unfortunately often the images of certain places are obscured 
2. Night: it may be that the best matching image is at night, hence it might not be as clear. 
3. Angle: some images appear to be taken at peculiar angles. This is a function of the paths taken by the various satellites. 
4. Slow load time: the app may appear quite slow, this is a function of the endpoint used and there is little I can do. It seems to usually take between 3 and 8 seconds per search. 
5. Incorrect location: the app takes the first response and returns images from those coordinates. So, if you are using a common place name it might not generate the correct result. 
6. Limited time frame: NASA only supports a limited time frame and that includes the current date. The safe range currently is from 2018 to the middle of 2022. 
7. Limited locations: for various reasons NASA have limited certain places from being returned. 

## Potential real world applications
The reason this API has been made publicly available is to tap into the potential it could provide, estimated at over $2 billion. If you are inspired there are other APIs available to build more powerful apps based on more advanced data. 

## Tools Used
I used [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to generate my base project. I then used the Fetch API to called both the Open Street Map and NASA APIs. 


## What I learned
I used this project to learn more about base CSS styling and the Fetch API. I also really enjoyed working with a cool API like the ones available from NASA.   

## Next Steps
- It would be useful to be able to make batch calls to the API. For example, to cover a wider area or alternatively one area over time. 
- The API's cloud coverage parameter is currently unavailable. This is a pity as it would provide a lot of utility to only return images below a certain threshold of cloud coverage. The amount of work required might be prohibitive on the call side but perhaps a post processor would be conceivable. 

## Deployment
I have deployed my site with Netlify, visit it [here](https://neon-sorbet-b5e580.netlify.app/)

## Local Dev Deployment
If you would like to deploy this project locally then please follow the instructions below. I assume you are working on a Windows machine and have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed (node to get access to npm). Once you do, open a terminal (git bash is a good option) in the location you would like the project.

```
# Clone the repo
git clone https://github.com/jsmiles/EyeInTheSky.git

# Change directory into the project
cd EyeInTheSky

# Install the dependencies needed
npm install

# Start the project on a local server
npm start
```

Once you have done the above the site should be available at <http://localhost:3000> or an alternative port if specified. 
