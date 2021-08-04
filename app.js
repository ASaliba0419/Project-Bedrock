const selectTag = document.querySelector('#select-character')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')


const getAllCharacters = async () => {
  try {
    const allCharacterURL = `https://futuramaapi.herokuapp.com/api/v2/characters`
    const response = await axios.get(allCharacterURL)
    console.log(response)
    const charList = Object.values(`${response.data[0].Name}`)
    const joinChar = charList.join('')
    const option = document.createElement("option")
    // option.textContent = charList
    option.textContent = joinChar
    document.querySelector("#select-character").append(option)
    console.log(charList)

    // setOptionTags(charList)
    // console.log(charList)


  } catch (error) {
    console.error(error)
  }
}

getAllCharacters()

function setOptionTags(list) {
  list.forEach((char) => {
    const optionTag = document.createElement('option')
    optionTag.value = char
    optionTag.textContent = char
    selectTag.append(optionTag)
  })
  return list
}




