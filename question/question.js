let rulesPage = document.querySelector("#rules-page");
let dismissBtn = document.querySelector("#dismiss-btn");

function rulesPageDisplyHandler(){
    rulesPage.style.display = 'none';
    
}

dismissBtn.addEventListener("click", rulesPageDisplyHandler)

