const result = document.querySelector("#result");

// Consulta via Fetch no Wordpress
const URL = "https://ocariocawebdesign.com/wp-json/wp/v2/posts";

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
    //console.log(data);
    console.log(data);

    /*const dadosPost = new Object();

    dadosPost[tituloPost] = data[0].title;
    dadosPost[conteudoPost] = data[0].content.rendered;
    dadosPost[dataPost] = data[0].date;
    dadosPost[autorPost] = data[0].author_info.display_name;*/

    //Pegando os dados do objeto
    const dadosPost = {
      title: data[0].title,
      slug: data[0].slug,
      content: data[0].content.rendered,
      autor: data[0].author_info.display_name,
      postDate: data[0].date,
      categorias: data[0].categories,
    };

    result.innerHTML = `
                       
                        <h1>${dadosPost.slug}</h1>
                        <p>${dadosPost.content}</p>
                        <h6>Data do post:</h6> ${dadosPost.postDate}
                        <h6>Autor:</h6> ${dadosPost.autor}
                        `;
  })
  .catch((error) => console.error("Erro:", error.message || error));
