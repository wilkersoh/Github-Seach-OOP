const searchUser = document.querySelector('#search');
const github = new Github;
const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        // server req
        github.getUser(userText)
          .then(data => {
              if(data.profile.message === 'Not Found'){
                  ui.showAlert('User not found', 'alert')
              } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
              }
          })
    } else {
        // clear profile UI
        ui.clearProfile();
    }
}) 