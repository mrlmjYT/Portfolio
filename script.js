function showProjects(){
    document.body.innerHTML = 
    `<div class="content">
        <div id="nav">
            <div id="back" onclick="Back()"><p>Back</p></div>
            <div id="info" onclick="showInfo()"><p>Info</p></div>
         </div>
        <h1>Projects</h1>
        <p>Here you can find some of my projects.</p>
        <div id="Projects">
            <div id="Poject1">
                <h1>Web Escape</h1>
                <p>Web Escape is an interactive web escape room.<br> Your goal is to Escape a Compute System which trapped you</p>
            </div>
        </div>
    </div>
    `
}

function showInfo(){
    document.body.innerHTML = 
    `
    <div class="content">
        <h1>Info</h1>
        <p>Here you can find some information about me.</p>
    </div>
    `
}

function Back(){
    document.body.innerHTML = 
    `
    <div id="nav">
        <div id="projects" onclick="showProjects()"><p>Projects</p></div>
        <div id="info" onclick="showInfo()"><p>Info</p></div>
    </div>
    `
}
