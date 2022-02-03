const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');






searchUser.addEventListener('keyup', (e) => {

    const userText = e.target.value;

    if(userText !== ''){
      
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
            
                ui.showAlert('User not Found', 'alert alert-danger');
            }else {

                ui.showProfile(data.profile)    
            }
           
        })
    }else{
          ui.clearProfile();  

    }
})