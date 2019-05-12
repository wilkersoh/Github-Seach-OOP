class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="user-container">
                <div class="row">
                    <div class="user-profile">
                        <img src="${user.avatar_url}">
                        <p>${user.bio}</p>
                        <p>${user.company}</p>
                        <p>Location: ${user.location}</p>
                        <p>Posted: ${user.public_repos}</p>
                        <p>Member Since: ${user.created_at}</p>
                        <a href="${user.html_url}" target="_blank">View Profile</a>
                    </div>
                </div>
            </div>

        `
    }
    // show the repos
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
                <div>
                    <div class="row">
                    <div>
                        <a href="" target="_blank">${repo.name}</a>
                    </div>
                    <div>
                        
                    </div>
                    </div>
                </div>
            `
        })

        // REnder DOM
        document.getElementById('repos').innerHTML = output;
    }
    showAlert(message, className){
        this.clearAlert()   
        // create DOM
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // parent
        const container = document.querySelector('.container');
        const beforeProfile = document.querySelector('#profile');
        // container里面 search之前 插入
        container.insertBefore(div, beforeProfile);

        // clear Alert after 3s
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
}