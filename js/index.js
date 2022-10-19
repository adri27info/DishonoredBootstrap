const contenedorModal = document.getElementById("contenedorModal");
const botonesPersonajes = document.querySelectorAll(".main_personajes button");
const btnCerrar = document.getElementById("btnCerrar");
const parrafo_personaje = document.getElementById("parrafo_personaje");
const imagen_personaje = document.getElementById("imagen_personaje");
const personajes = {
  emily_kaldwin: {
    descripcion:
      "Emily es la hija de la emperatriz Jessamine Kaldwin, se desconoce quién es el padre, aunque se insinúa que es el propio Protector Real, Corvo Attano. En cualquier caso, Emily tenía una relación muy cercana con Corvo y llegaba a considerarlo como una figura paterna. Emily recibe emocionada a Corvo a su regreso a Dunwall tras su viaje por las demás islas en busca de un remedio para la plaga de ratas que asolaba la ciudad, pero poco después Daud y sus hombres asesinan a su madre delante de sus ojos y la secuestran a ella, dejando a Corvo como el aparente culpable. Daud posteriormente la entrega al Lord Regente Hiram Burrows, quien la deja al cuidado de los gemelos Pendleton en el Golden Cat. Durante su estancia allí, Emily se siente muy triste y echa de menos a su madre y a Corvo, por lo que trata de escapar, pero es atrapada. Poco después es rescatada por Corvo, quien la lleva al Hound Pits Pub junto a los conspiradores, quienes pretenden instaurarla en el trono. Una vez Corvo ha eliminado al Lord Regente Burrows, Havelock, Martin y Pendleton eliminan a los demás miembros de la conspiración y se llevan a Emily a la Isla de Kingsparrow.",
    imagen: "img/popup_emily_kaldwin.jpg",
  },
  corvo_attano: {
    descripcion:
      "Corvo Attano es el protagonista de Dishonored y co-protagonista de Dishonored 2. Anteriormente, trabajaba como guardaespaldas de la emperatriz; siendo posteriormente encarcelado por el usurpador Lord Regente, con el pretexto de haber asesinado a su protegida. Y luego de esto es ayudado por Lord Havelock y por Lord Pendleton con muchos más a vengarse, pero luego de salvar a Emily Kaldwin y de matar a Lord Regente es traicionado por sus supuestos aliados y se ve obligado a matarlo para salvar a Emily Kaldwin, quien finalmente se vuelve emperatriz. La emperatriz Jessamine Kaldwin encomendó a Corvo la tarea de viajar por todas las islas del imperio en busca de una solución para la terrible peste que sufría Dunwall, pero, tras dos meses de viaje, regresó sin haber sido capaz de encontrar un remedio para la peste. La emperatriz Jessamine Kaldwin encomendó a Corvo la tarea de viajar por todas las islas del imperio en busca de una solución para la terrible peste que sufría Dunwall, pero, tras dos meses de viaje, regresó sin haber sido capaz de encontrar un remedio para la peste.  ",
    imagen: "img/popup_corvo_attano.jpg",
  },
  delilah_copperspoon: {
    descripcion:
      "Delilah Copperspoon es una bruja aparecida en las expansiones de Dishonored, El Puñal de Dunwall y Las Brujas de Brigmore. Es la líder del aquelarre de Brigmore y desempeña el papel de antagonista en ambas expansiones, pese a que su relevancia es mucho mayor en la segunda. Delilah es la figura en torno a la que gira la historia de las expansiones, ya que Daud, por consejo del Forastero, decide investigar el nombre y los planes de la misteriosa bruja. Presumiblemente nacida en Dunwall, Delilah trabajó como aprendiz de panadera en Dunwall Tower en su niñez, donde se hizo amiga de una joven Jessamine Kaldwin. Sin embargo, las dos amigas fueron descubiertas practicando actividades prohibidas (Posiblemente relacionadas con magia negra), y Delilah y su madre fueron expulsadas del palacio. Más tarde, trabajó como aprendiz del eminente filósofo natural y artista Anton Sokolov, desarrollando sus habilidades de pintura y escultura. En algún momento posterior a este aprendizaje, Delilah se vio involucrada en actividades de magia negra y captó la atención del Forastero, quien decidió otorgarle su Marca. ",
    imagen: "img/popup_delilah_copperspoon.jpg",
  },
  duke_luca: {
    descripcion:
      "Luca Abele es el duque interino de Serkonos durante los eventos de Dishonored 2 y el hijo del duque anterior, Theodanis. A diferencia de su padre benévolo, oprime a la gente de Serkonos, provocando actos de rebelión contra su autoridad. Luca es el hijo mayor del duque Theodanis y la duquesa Callas Abele. Durante su juventud, Luca conoció a Delilah Copperspoon en Dunwall.",
    imagen: "img/popup_duke_luca.jpg",
  },
  meagan_foster: {
    descripcion:
      "Meagan Foster está resentida y reservada sobre su pasado. En sus propias palabras, estuvo en una banda de mercenarios durante su juventud. Conoció a Delilah Copperspoon y Breanna Ashworth, y brevemente fue miembro de su aquelarre de brujas. También afirma haber tenido (pero perdido) la oportunidad de matar al actual duque de Serkonos, Luca Abele, quien estuvo involucrado en la muerte de su amigo de la infancia. Navegó a Serkonos para olvidar su pasado y comenzó un negocio de contrabando con su barco, el Dreadful Wale. Aquí conoció al filósofo natural Anton Sokolov alrededor de 1847,[1] quien se había retirado a la capital más al sur por su propio dolor. Los dos se hicieron amigos cercanos y finalmente ella lo invitó a vivir en su barco. Si bien su relación parece algo tensa, Meagan se preocupa mucho por el anciano.",
    imagen: "img/popup_meagan_foster.jpg",
  },
  the_outsider: {
    descripcion:
      "Aunque muchas personas lo adoran, la Abadía de Everyman lo considera herejía y se castiga con medidas extremas, que incluyen la muerte. Creado para ser la figura representativa del Vacío,[1] parece ser la fuente de toda la magia en el mundo de la franquicia Dishonored, y sus santuarios se pueden encontrar en las Islas. El Forastero nació más de 4000 años antes de los eventos de Dishonored. Vivió como un paria humano[3] sin familia conocida en una ciudad en ruinas.[4] Cuando tenía quince años, [5] fue buscado y llevado por el Envisionado que vio en él todas las señales para convertirse en uno con el Vacío, en particular su edad y fragmentos de profecía (los movimientos celestiales y eventos como la muerte masiva de peces)",
    imagen: "img/popup_the_outsider.jpg",
  },
  aramis_stilton: {
    descripcion:
      "Aramis Stilton es un magnate de las minas de Karnacan que desapareció antes de los acontecimientos de Dishonored 2. Su desaparición provocó el colapso del distrito minero de Batista, ya que el nuevo duque de Serkonan, Luca Abele, tomó el control de las minas y duplicó el trabajo para su propio beneficio. Su hogar fue utilizado por el duque y su círculo íntimo, lo que involucró una sesión de espiritismo para traer a Delilah Copperspoon de regreso del Vacío. La desaparición de Stilton se investiga en la misión A Crack in the Slab, en la que Corvo Attano o Emily Kaldwin ingresan a su antigua mansión lujosa, ahora en ruinas.",
    imagen: "img/popup_aramis_stilton.jpg",
  },
  kirin_jindosh: {
    descripcion:
      "Jindosh es un antiguo alumno del filósofo natural Anton Sokolov.[2] Aunque mostró una gran promesa e inteligencia, Jindosh fue expulsado 2 años después de la Academia de Filosofía Natural por razones desconocidas. Finalmente, Jindosh se afilió a Luca Abele y se convirtió en Gran Inventor del Duque Serkonan. Jindosh construyó una mansión elevada en una colina con vistas a Karnaca que se convirtió en su lugar de residencia. Jindosh también inventó los Clockwork Soldiers mecánicos que usa tanto para asegurar su hogar como para venderlos a los aristócratas adinerados.",
    imagen: "img/popup_kirin_jindosh.png",
  },
};

botonesPersonajes.forEach((element) => {
  element.addEventListener("click", mostrarInformacionPersonaje);
});

btnCerrar.addEventListener("click", cerrarModal);

function mostrarInformacionPersonaje(e) {
  let personaje = e.target.id.replace("boton_", "");
  abrirModal(personajes[personaje].descripcion, personajes[personaje].imagen);
}

function abrirModal(descripcion, imagen) {
  parrafo_personaje.textContent = descripcion;
  imagen_personaje.src = imagen;
  contenedorModal.classList.add("modal-open");
}

function cerrarModal() {
  contenedorModal.classList.remove("modal-open");
  parrafo_personaje.textContent = "";
  imagen_personaje.src = "";
}
