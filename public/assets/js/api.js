const singerName = document.getElementById("artistName");

const url = "https://emki-app-c841c0ee2e8c.herokuapp.com/page";

let getName = () => {
    fetch(url)
    .then(data => data.json()) 
    .then(item => {
        singerName.textContent = `${item.artistName}`; 
    })
    .catch(error => console.log('Error:', error)); 
}

getName();
