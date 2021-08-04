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



  let nameEl = document.createElement("h1")
  dataContainer.appendChild(nameEl)
  nameEl.textContent = `${render[selectTag.value].Name}`
  nameEl.value = `${render[selectTag.value].Name}`

  // let planetEl = document.createElement("h2")
  // dataContainer.appendChild(planetEl)
  // planetEl.textContent = `${data.Planet}`
  // planetEl.value = `${info.Planet}`

  // })
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


