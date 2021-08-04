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
  planetEl.textContent = `${render[selectTag.value].Planet}`
  planetEl.value = `${render[selectTag.value].Planet}`

  let speciesEl = document.createElement("h2")
  dataContainer.appendChild(speciesEl)
  speciesEl.textContent = `${render[selectTag.value].Species}`
  speciesEl.value = `${render[selectTag.value].Species}`

  let voiceEl = document.createElement("h2")
  dataContainer.appendChild(voiceEl)
  voiceEl.textContent = `${render[selectTag.value].VoicedBy}`
  voiceEl.value = `${render[selectTag.value].VoicedBy}`

  let professionEl = document.createElement("h3")
  dataContainer.appendChild(professionEl)
  professionEl.textContent = `${render[selectTag.value].Profession}`
  professionEl.value = `${render[selectTag.value].Profession}`
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


function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


