fetch(
  "https://api.cosmicjs.com/v1/o-carioca-blog/objects?pretty=true&hide_metafields=true&type=posts&read_key=bkSfkEfZ1EBktVLKuVgtHAevSksKOR5Bwgc4q1NyfW63XG0F3W&limit=20&props=slug,title,content,metadata,",)
  .then((response) => response.json())
  .then((data) => console.log(data));

//Pegando os dados do objeto
const dadosPost = {
  title: data.objects[1].title,
  slug: data.objects[1].slug,
  content: data.objects[1].content,
  autor: data.objects[1].metadata.creator,
  postDate: data.objects[1].metadata.published_date,
};

result.innerHTML = `
                      <h1>${dadosPost.slug}</h1>
                      <p>${dadosPost.content}</p>
                      <h6>Data do post:</h6> ${dadosPost.postDate}
                      <h6>Autor:</h6> ${dadosPost.autor}
                    
                      `;
