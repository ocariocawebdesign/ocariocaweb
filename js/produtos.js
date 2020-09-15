const result = document.querySelector("#result");

// Consulta via Fetch no Wordpress
const URL = "https://api-produtos-requinte.herokuapp.com/produtos";

// Consulta via Fetch no ComicCMS Twitter
/*const URLTWITTER =
  "https://api.cosmicjs.com/v1/o-carioca-blog/objects?pretty=true&hide_metafields=true&type=posts&read_key=bkSfkEfZ1EBktVLKuVgtHAevSksKOR5Bwgc4q1NyfW63XG0F3W&limit=20&props=slug,title,content,metadata,";

// Consulta via Fetch no ComicCMS
const URL =
  "https://api.cosmicjs.com/v1/o-carioca-blog/objects?pretty=true&hide_metafields=true&type=posts&read_key=bkSfkEfZ1EBktVLKuVgtHAevSksKOR5Bwgc4q1NyfW63XG0F3W&limit=20&props=slug,title,content,metadata,";
*/

fetch(`${URL}`)
  .then((body) => body.json())
  .then((data) => {
    console.log(data);

    //Pegando os dados do objeto
    const dadosPost = {
      title: data[0].Descricao,
      slug: data[0].Foto_do_produto.formats.small.url,
      content: data[0].Modelo,
      autor: data[0].Preco,
    };
  })
  .catch((error) => console.error("Erro:", error.message || error));
