const selectTag = document.querySelector('#select-character')
const form = document.querySelector('form')



const getAllCharacters = async () => {
  try {
    const allCharacterURL = `https://futuramaapi.herokuapp.com/api/v2/characters`
    const response = await axios.get(allCharacterURL)
    console.log(response.data)


    optionTags(response.data)
    return response
  } catch (error) {
    console.error(error)
  }
}

getAllCharacters()

function optionTags(charList) {
  // console.log(charList)

  charList.forEach((char, index) => {
    // console.log(char.Name)
    // console.log(index)
    let optionTag = document.createElement('option')
    // console.log(optionTag)
    optionTag.textContent = char.Name
    optionTag.value = index

    selectTag.append(optionTag)


  })

}

console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const charValue = document.querySelector('select').value
  console.log(charValue)
  getData(charValue)
})

// ------------------------------------------------------------------

renderList = (render) => {
  const dataContainer = document.querySelector('#data-container')
  removeElement(dataContainer)


  let nameEl = document.createElement("h1")
  dataContainer.appendChild(nameEl)
  nameEl.textContent = `${render[selectTag.value].Name}`
  nameEl.value = `${render[selectTag.value].Name}`

  let picPic = document.createElement('img')
  dataContainer.appendChild(picPic)
  picPic.src = `${render[selectTag.value].PicUrl}`
  picPic.classList.add('picture')

  let planetEl = document.createElement("h2")
  dataContainer.appendChild(planetEl)
  planetEl.textContent = `Planet: ${render[selectTag.value].Planet}`
  planetEl.value = `Planet: ${render[selectTag.value].Planet}`
  planetEl.classList.add('planet')

  let speciesEl = document.createElement("h2")
  dataContainer.appendChild(speciesEl)
  speciesEl.textContent = `Species: ${render[selectTag.value].Species}`
  speciesEl.value = `${render[selectTag.value].Species}`
  speciesEl.classList.add('species')

  let voiceEl = document.createElement("h2")
  dataContainer.appendChild(voiceEl)
  voiceEl.textContent = `Voiced by: ${render[selectTag.value].VoicedBy}`
  voiceEl.value = `${render[selectTag.value].VoicedBy}`
  voiceEl.classList.add('voiced')

  let professionEl = document.createElement("h2")
  dataContainer.appendChild(professionEl)
  professionEl.textContent = `Profession: ${render[selectTag.value].Profession}`
  professionEl.value = `${render[selectTag.value].Profession}`
  professionEl.classList.add('profession')
}




const getData = async (charValue) => {
  try {
    const data = await axios.get('http://futuramaapi.herokuapp.com/api/v2/characters?search=')
    renderList(data.data)
    return data

  } catch (err) {
    console.error(err)
  }
}

// REMOVE

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


// QUOTES

let btn = document.getElementById('btn')
let output = document.getElementById('qpage')
let quotes = [
  "I'm So Embarrassed. I Wish Everybody Else Was Dead. -Bender",
  "Valentine's Day Is Coming? Oh Crap, I Forgot To Get A Girlfriend Again. -Fry",
  "Fry, It's Been Years Since Medical School, So Remind Me. Disemboweling In Your Species: Fatal Or Non-Fatal? -Zoidberg",
  "Well, You Obviously Won't Listen To Reason. So, I Guess I'll Listen To Idiotic-Ness And Come With You. -Leela",
  "Finally, A Uniform I'd Be Happy To Be Caught Dead In! -Amy",
  "If You Ask Me, It's Mighty Suspicious. I'm Gonna Call The Police. Right After I Flush Some Things. -Hermes",
  "I Got Your Distress Call And Came Here As Soon As I Wanted To. -Zap",
  "Did Everything Just Taste Purple For A Second -Fry?",
  "My Story Is A Lot Like Yours, Only More Interesting 'Cause It Involves Robots. -Bender",
  "The way to a woman’s bed is through her parents. Have sex with them and you’re in. -Zap",
  "I surrender and volunteer for treason. -Zap",
  "Shut up and take my money –Fry",
  "Good news, everyone! I've taught the toaster to feel love! -Professor",
  "Two oil changes for the price of one! Now if I could afford the one, and the car. -Zoidberg",
  "My folks were always on me to groom myself and wear underpants. What am I, the pope? –Fry",
  "Hey sexy mama. Wanna kill all humans? –Bender",
  "I hope he didn’t die. Unless he left a note naming me his successor, then I hope he did die. –Bender",
  "I never thought it would end this way, gunned down by Santa Claus. –Fry",
  "Why can’t she just drink herself happy like a normal person? –Bender",
  "You can’t keep boogieing like this. You’ll come down with a fever of some sort. –Leela",
  "You win again, gravity. –Zapp Brannigan",
  "This is the worst kind of discrimination. The kind against me! –Bender",
  "If rich people think it’s good, I’ll buy it. One art, please! –Dr. Zoidberg",
  "Bite my shiny metal ass. –Bender"
]

btn.addEventListener('click', function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote
})
