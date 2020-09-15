const data = new Date();

const Http = {
  inicia: (postsAPI) => Http._pega(postsAPI),
  _pega: (postsAPI) => {
    fetch(postsAPI, { method: "get" })
      .then((res) => res.json())
      .then(
        (posts) => Http._monta(posts),
        (err) => {
          let template = `
				<span style="color:red">
					Esse servidor não fornece permissão para consumo de sua API
				</span>
				`;
          document.querySelector(".posts").innerHTML = template;
        }
      );
  },
  _monta: (posts) => {
    posts.map((post) => {
      let template = `
				<div class="post">
                    <h1>${post.title.rendered}</h1>
                    <p>${data}</p>
                    <cite>O Carioca Web</cite>

                    <p>${post.content.rendered}</p>
                    

				</div>
			`;
      document.querySelector(".posts").innerHTML += template;
    });
  },
};
