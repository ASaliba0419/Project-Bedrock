# Project Overview

## Project Name

Slurm-Factory

## Project Description

Slurm-Factory is a Futurama API that takes a search request and returns a character from the show Futurama.

## API and Data Sample

The API I will be using is from futuramaapi.herokuapp.com/api/v2/characters

    {
        "Species": "Decapodian Monster",
        "Age": "86-92",
        "Planet": "Formerly: Decapod 10Currently: Earth",
        "Profession": "Planet Express (Physician)",
        "Status": "Alive gra",
        "FirstAppearance": "\"The Series Has Landed\"",
        "PicUrl": "https://vignette.wikia.nocookie.net/en.futurama/images/4/45/Dr._John_A._Zoidberg.png/revision/latest/scale-to-width-down/327?cb=20101014052403",
        "Relatives": "Norm Zoidberg,Sam Zoidberg,Sadie,Norman Zoidberg,Harold Zoid,Zoidfarb",
        "VoicedBy": "Billy West",
        "Name": "John A. Zoidberg"
    },

## Wireframes

![Website Wireframing](https://user-images.githubusercontent.com/87334000/127892496-1a0d5f9f-84c4-490e-97f3-3b785cd6abfa.jpg)

#### MVP 

- Find API to use 
- Link anchor tag to sections
- Allow user to type in any character name and return species, planet, first appearance, pictures, voiced by, name about the searched character
- On new search, clear current search

#### PostMVP  

- Add a All Quotes API that returns random quotes in timed intervals
- Add animation to the quote on the main screen
- Embed YouTube video
- Link Futurama show to externally take you to the series in YouTube
- Add a search quote function to allow results to return with a quote from the searched character

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 3| Work with JavaScript and apply the API | Incomplete
|August 4| CSS/more code  | Incomplete
|August 5| Make sure all MVP is complete | Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

![Untitled](https://user-images.githubusercontent.com/87334000/127894670-915af9ae-4c5c-4d90-9885-6a22cbd3b734.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Pseudocode | L | 3hrs | hrs | hrs |
| Gather All Resoures | H | 3hrs | hrs | hrs |
| Basic HTML | H | 3hrs| hrs | hrs |
| Create dynamic JavaScript Elements | H | 3hrs| hrs | hrs |
| Link Quotes | H | 4hrs| hrs | hrs |
| Link Nav Bar | H | 1.5hrs| hrs | hrs |
| Style text and prompts | H | 3hrs| hrs | hrs |
| Layout webpage with Flexbox | H | 5hrs| hrs | hrs |
| Working with API | H | 5hrs| hrs | hrs |
| Media Query | H | 4hrs| hrs | hrs |
| Total | H | 34.5hrs| hrs | hrs |

## Code Snippet

@keyframes moveShip {
  0% {
    transform: translate3d(-375px, 0, 0);
  }
  100% {
    transform: translate3d(1800px, 0, 0);
  }
}

.PX {
  /* position: relative; */
  margin-top: -7vh;
  width: 20%;
  animation: moveShip linear infinite 5s;
}

This was my favorite code I wrote because taking a stationary object and being able to make it move was a new and exciting learning experience for me

## Change Log
I decided to change the title from the left side of the screen to the middle top. I decided to do that because I felt it gave the website more of a presence rather than having nothing in the header other than "Watch Futurama". I also removed the two nav links I had set up because I felt they were no longer necessary. 