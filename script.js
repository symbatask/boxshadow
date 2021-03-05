let blur = document.querySelector(".blur")
let spread = document.querySelector(".spread")
let vertical = document.querySelector(".vertical")
let horizontal = document.querySelector(".horizontal")
let color = document.querySelector(".color")
let settingsRanges = document.querySelectorAll(".settings-block input")
let box = document.querySelector(".box")
let box_shadow_code = document.querySelector(".box_shadow_code")

settingsRanges.forEach(input =>{
    input.addEventListener("input", () =>{
generateShadow()
    })
})

function generateShadow(){
    let property = `${horizontal.value}px ${vertical.value}px ${spread.value}px ${blur.value}px ${color.value}`
    box.style.boxShadow = property
    box_shadow_code.textContent = `box-shadow:${property};`
}

generateShadow()





// событие types //////////////////////////////////////////////////////////////////////
// 1 click
// 2 dblclick
// 3 mousemove pri navedenii myshi
// 4 mouse over запускает функцию при наведении один раз
//  5 change срабатывает при изменении и отпускании мыши
// 6 input   срабатывает при изменении без  отпускания мыши

// ссылка html dom style object site w3school