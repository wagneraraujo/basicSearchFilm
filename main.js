
document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(evento){
    const filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa); 
    evento.preventDefault();
}



function buscarFilmes(filmePesquisa){

    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=e580e191&s=' + filmePesquisa)
  .then(function (response) {
    // handle success
      console.log(response);
      let filmes = response.data.Search;
      let mostrarFilmes = '';

      for(let i = 0; i < filmes.length; i++){

     mostrarFilmes += `

<div class="card" style="width: 18rem;">
  <img src="${filmes[i].Poster}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${filmes[i].Title}</h5>
   <a href="#" class="btn btn-primary" onclick="filmesDetalhes('${filmes[i].imdbID}')">Detalhes</a>
  </div>
</div>

          `; 
      } 

      document.getElementById('LinhaMostrarFilmes').innerHTML = mostrarFilmes;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

function filmesDetalhes(id){
    console.log(id)
}
