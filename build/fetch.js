const body = document.querySelector("body")

const  request = fetch("https://restcountries.com/v3.1/name/nigeria").then(res=> res.json()).then(([data]) => {
console.log(data);
const html = document.createElement('img')
html.src =  `${data.coatOfArms.png}`
body.append(html)

const flag =  document.createElement('img')
flag.src =  `${data.flags.svg}`
body.append(flag)


});
console.log(request);

;