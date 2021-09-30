(() => {
  if (!localStorage.getItem("movies")) {
    const movies = [
      {
        title: "Fight Club",
        description:
          "Viajando en avión conoce a Tyler Durden (Brad Pitt), un vendedor de jabón con una clara ideología: el perfeccionismo es para los débiles y la destrucción de uno mismo es lo que, verdaderamente, vale la pena en la vida. A Jack le convence ese argumento y decide unirse a Tyler para pelear.",
        image:
          "/imgs/fight-club.jpg",
      },
      {
        title: "Her",
        description:
          "Ambientada en Los Ángeles, California, en el futuro cercano, la película muestra a Theodore Twombly (Joaquin Phoenix), un hombre solitario que trabaja escribiendo cartas personales para familiares o seres queridos de personas que por alguna razón no pueden escribirlas ellas mismas.",
        image: "http://localhost:5500/imgs/her.jpg",
      },
      {
        title: "Apocalypse Now",
        description:
          "El capitán Willard es enviado a Vietnam a un lugar de la jungla donde deberá localizar y matar al coronel Kurtz (Marlon Brando), un ex Boina Verde que ha organizado su propio ejército y se deja adorar por los nativos. ... Poco a poco Willard se convierte en un hombre similar a aquel al que tiene que matar.",
        image: "/imgs/apocalypse-now.jpg",
      },
      {
        title: "Apocalypse Now",
        description:
          "El capitán Willard es enviado a Vietnam a un lugar de la jungla donde deberá localizar y matar al coronel Kurtz (Marlon Brando), un ex Boina Verde que ha organizado su propio ejército y se deja adorar por los nativos. ... Poco a poco Willard se convierte en un hombre similar a aquel al que tiene que matar.",
        image: "/imgs/apocalypse-now.jpg",
      },
      {
        title: "Apocalypse Now",
        description:
          "El capitán Willard es enviado a Vietnam a un lugar de la jungla donde deberá localizar y matar al coronel Kurtz (Marlon Brando), un ex Boina Verde que ha organizado su propio ejército y se deja adorar por los nativos. ... Poco a poco Willard se convierte en un hombre similar a aquel al que tiene que matar.",
        image: "/imgs/apocalypse-now.jpg",
      },
    ];

    localStorage.setItem("movies", JSON.stringify(movies));
  }
})();

(()=>{
    if(localStorage.getItem('movies')){
        const movies = JSON.parse(localStorage.getItem('movies'))
        const cardFrames = document.getElementById('content-movies')
        movies.forEach((data,index)=>{                        
            cardFrames.innerHTML += `
                <div class="card" onclick="openDialog(${index},${600})">
                    <img src="${data.image}"/>
                    <h2>${data.title}</h2>                    
                </div>
            `           
        })
    }
})();

window.addEventListener("load", () => {
  const images = [
    { path: "imgs/apocalypse-now.jpg" },
    { path: "imgs/fight-club.jpg" },
    { path: "imgs/her.jpg" },
  ];

  const image = document.getElementById("slider");

  let imageIndex = 0;

  const changeImage = () => {
    image.setAttribute("src", images[imageIndex].path);
    if (imageIndex < 2) {
      imageIndex++;
    } else {
      imageIndex = 0;
    }
  };  

  setInterval(changeImage, 3000);
});


const openDialog = (data,width) => {    
    const fatherDiv = document.createElement('div')
    fatherDiv.className = "modalFather"
    fatherDiv.id = "modalFather"

    const modal = document.createElement('div')
    modal.className = "modal"
    modal.id = "modal"
    modal.style.width = width+"px"

    modal.innerHTML =  buildModal(data)

    document.body.appendChild(fatherDiv)
    fatherDiv.appendChild(modal)

}

const closeDialog = () =>{
    const fatherDiv = document.getElementById('modalFather')
    document.body.removeChild(fatherDiv)
}

const buildModal = index =>{
    const movie = JSON.parse(localStorage.getItem('movies'))[index]
    return `
        <img src="${movie.image}" class="modal-image"/>
        <h1> Titulo:${movie.title} </h1>
        <h3> Description:${movie.description} </h3>
        <a onclick="closeDialog()" class="cerrar-modal">cerrar modal</a>
    `   
}
