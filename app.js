const selectTag = document.querySelector('#select-character')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')


const getAllCharacters = async () => {
  try {
    const allCharacterURL = `https://futuramaapi.herokuapp.com/api/v2/characters`
    const response = await axios.get(allCharacterURL)
    // console.log(response.data)
    

    optionTags(response.data)
    return response
  } catch (error) {
    console.error(error)
  }
}

getAllCharacters()

function optionTags(charList) {
  // console.log(charList)

  charList.forEach((char) => {
    // console.log(char.Name)
    let optionTag = document.createElement('option')
    // console.log(optionTag)
    optionTag.textContent = char.Name
    optionTag.value = char.Name
    
    document.querySelector("#select-character").append(optionTag)
 
 
  })
  
}

console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const charValue = document.querySelector('select').value
  console.log(charValue)
})



