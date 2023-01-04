let myLeads = []
const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render()
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear
    myLeads = []
    render()
})

saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render()
})

inputEl.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        myLeads.push(inputEl.value)
        console.log(myLeads)
        render()
        inputEl.value = ""
    }
})

function render() {
    let listItems = ""
    for (let i=0; i<myLeads.length; i++) {
        listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}