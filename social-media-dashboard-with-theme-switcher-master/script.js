const swtichButton = document.getElementById('switch');

changeTheme = () => {
    let chan = document.getElementById('theme');
    if(chan.className === 'lightTheme') {
        document.getElementById('mode').innerText = 'Light Mode'
        chan.className = 'darkTheme'
    } else {
        document.getElementById('mode').innerText = 'Dark Mode'
        chan.className = 'lightTheme'
    }
}

swtichButton.addEventListener('click', () => {
    changeTheme();
})  