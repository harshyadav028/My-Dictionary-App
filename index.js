const dictionary = (word) => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '1908e77775msh7244f9abf625fecp1f2e45jsn65dbe58ab9ff',
      'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word, options)
    .then(response => response.json())
    .then((response) => {
      
      console.log(response);
      wordappearhere.innerHTML=response.word;
      definition.innerHTML=response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.")
      .replace("5.", "<br>5.").replace("6.", "<br>6.").replace("7.", "<br>7.");
    })
    .catch(err => console.error(err));
}

searchbutton.addEventListener("click", (e)=>{
  e.preventDefault();
  dictionary(searchinput.value);
})