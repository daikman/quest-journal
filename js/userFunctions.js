function auth(method) {
    if (method == "Login") login()
    if (method == "Register") register()
}

async function login() {
    const username = document.getElementById("login-user").value
    const password = document.getElementById("login-password").value
    
    // check name and password have been entered
    if (!username | !password) {
        alert("Username or password missing")
        return
    }

    // attempt login
    const url = "https://quest-journal-api.glitch.me/login/"

    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    // loading blur
    cloudUp()

    // attempt login
    const response = await fetch(url, config)
      .then(res => res.json())
      .then(data => {
        clearUp()
        return data
    })
    
    if (response.success) {
        success(response.journals)
        return
    }

    alert(response.message)

}

async function register() {
    const username = document.getElementById("login-user").value
    const password1 = document.getElementById("login-password").value
    const password2 = document.getElementById("login-confirm").value

    // check all required have been entered
    if (!username | !password1 | !password2) {
        alert("Username or password(s) missing")
        return
    }

    // compare passwords
    if (password1 != password2) {
        alert("Passwords do not match!")
        return
    }

    const url = "https://quest-journal-api.glitch.me/register/"

    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password1
        })
    }

    // attempt register
    cloudUp()
    const response = await fetch(url, config)
      .then(res => res.json())
      .then(data => {
        clearUp()
        return data
      })
    
    if (response.success) {
        success(response.journals)
        return
    }
    

    alert(response.message)
}

function success(journals) {
    // hide login modal
    document.getElementById("login-modal").style.display = "none"

    // draw journals
    JOURNAL = journals
    drawJournal()
}