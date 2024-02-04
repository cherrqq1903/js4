const propiedadesEnAlquiler = [
    { 
        name: 'Este apartamento de 2 habitaciones est\u00e1 ubicado en el coraz\u00f3n de la ciudad, cerca de todo.',
        imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2000,
        smoke: false,
        pets: true 
    },      
    { 
        name: 'Apartamento luminoso con vista al mar',
        imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        desc: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        baths: 3,
        price: 2500,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Condominio moderno en zona residencial',
        imgSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc: 'Este elegante condominio moderno est\u00e1 ubicado en una tranquila zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2200,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Apartamento Frances',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F977i215%2Fqzvwm883w3kb4xebk32pg8jjr6i215&option=N&permitphotoenlargement=false&w=1200',
        desc: 'Acogedor y Elegante!',
        address: 'Paris, Ile-De-France, 75016 France',
        rooms: 2,
        baths: 3,
        price: $2,413,043,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Apartamento de recepción Avenue Foch',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F977i215%2Fmd2byschp99qmxpvhpww6tf4n3i215&option=N&permitphotoenlargement=false&w=1200',
        desc: 'Apartamento de recepción Avenue Foch ubicado en el segundo piso de un edificio muy hermoso con partes comunes de alto nivel.',
        address: 'Paris, Ile-De-France, 75116 France',
        rooms: 4,
        baths: 5,
        price: $6,195,652,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Villa lujosa en Al Manara',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1259i215%2Fmbjm68rv6qd0mz6zn0e0ae3sf6i215&option=N&permitphotoenlargement=false&w=1200',
        desc: 'Dubai Sothebys International Realty se complace en presentar la cotización de esta impresionante villa de nueve dormitorios en Al Manara.',
        address: 'Al Manara, Al Manara  Dubai, United Arab Emirates',
        rooms: 9,
        baths: 1,
        price: $1,907,357,
        smoke: true,
        pets: false  
    } 
];

function renderizarPropiedadesEnAlquiler() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesAlquilerIndex')) {
        contenedor = document.getElementById('propiedadesAlquilerIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesAlquiler')) {
        contenedor = document.getElementById('propiedadesAlquiler');
        limite = propiedadesEnAlquiler.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnAlquiler[i];

        const divCol = document.createElement('div');
        divCol.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        divCol.appendChild(cardDiv);

        const img = document.createElement('img');
        img.src = propiedad.imgSrc;
        img.className = 'card-img-top';
        img.alt = propiedad.name;
        cardDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);

        cardBody.innerHTML = `
            <h5 class="card-title">${propiedad.name}</h5>
            <p class="card-text">${propiedad.desc}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.baths} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
        `;

        contenedor.appendChild(divCol);
    }
}
document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnAlquiler);
