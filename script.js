// background
const homeSection = document.getElementById('home')

function generateStars() {    
    for(let i=0; i < 500; i++) {
        const star = document.createElement('div')
        star.classList.add('star')
        star.style.left = `${Math.floor(Math.random() * (window.innerWidth -5))}px`
        star.style.top = `${Math.floor(Math.random() * (window.innerHeight -5))}px`
        homeSection.append(star)
        console.log(star)
    }
}
generateStars()
window.addEventListener('resize', () => {
    homeSection.querySelectorAll('.star').forEach(star => {
        star.remove();
    })
    generateStars();
})
// projects
fetch("./data.json")
    .then(response => {
        return response.json();
    }).then(data => {
        main(data)
    })

function main(data) {
    const template = document.getElementById('project-card-template')

    const githubLink = "https://github.com/abdul-rehman-d"
    const demoLink = "https://abdul-rehman-d.github.io"
    const repoName = "frontend_mentor_challenges"


    const projects = data[repoName]

    const projectsDiv = document.querySelector(`#${repoName} .projects-container`)

    projects
        .reverse()
        .slice(0, 5)
        .forEach((project, index) => {
            const item = template.content.cloneNode(true)
            
            const projectNum = project.folderName.slice(0, 2)
            item.querySelector('.card-img img').setAttribute('src', `${githubLink}/${repoName}/raw/main/assets/${projectNum}.jpg`)

            item.querySelector('.card-title').innerText = project['name']
            item.querySelector('.card-description').innerText = project['description']

            item.querySelector('.github-link').setAttribute('href', `${githubLink}/${repoName}/tree/main/${project['folderName']}/`)
            item.querySelector('.live-link').setAttribute('href', `${demoLink}/${repoName}/${project['folderName']}/`)

            projectsDiv.append(item)
        })
}