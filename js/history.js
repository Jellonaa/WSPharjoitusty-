const HISTORY = 'history'
const list = document.querySelector("table")
let history = JSON.parse(localStorage.getItem(HISTORY))
const button = document.querySelector("button")

const addTableRow = (text) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    
    col1.innerHTML = text
}

button.addEventListener('click', () => {
    for (let i = 0; i < history.length; i++) {
        history.splice(i)
    }
    list.innerHTML = ""
    localStorage.setItem(HISTORY,JSON.stringify(history))
})

const renderArray = () => {
    for (let i = 0; i < history.length; i++) {
        addTableRow(history[i])
    }
}

if (history == null) {
    history = []
}

renderArray()