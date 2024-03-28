function quoteGenerator(){
    const url = "https://api.quotable.io/random";
    let getQuote = () => {
        fetch(url)
        .then((data) => data.json())
        .then((item) => {
            document.getElementById("quote").innerText = item.content
            console.log(item.author)
        });
    };
    getQuote()
}

export default quoteGenerator