const propiedadesEnVenta = [
    { 
        name: 'Apartamento de lujo en zona exclusiva',
        imgSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        baths: 4,
        price: 5000,
        smoke: false,
        pets: false 
    },      
    { 
        name: 'Apartamento acogedor en la monta\u00f1a',
        imgSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        desc: 'Este apartamento acogedor est\u00e1 situado en lo alto de una monta\u00f1a con impresionantes vistas',
        address: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        baths: 1,
        price: 1200,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Penthouse de lujo con terraza panor\u00e1mica',
        imgSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        desc: 'Este penthouse de lujo ofrece una terraza panor\u00e1mica con vistas espectaculares',
        address: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: 4,
        baths: 4,
        price: 4500,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Casa Chilena en Lo Curro',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1103i215%2Fzhfznczx52ch4223tvd7gs6mk2i215&option=N&h=472&permitphotoenlargement=false',
        desc: 'Excelente casa chilena en amplio lote recién remodelada en Lo Curro, Vitacura.',
        address: 'Vía Roja Santiago, Región Metropolitana de Santiago, Chile',
        rooms: 7,
        baths: 5,
        price: $4,292,851,,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Apartamento de recepción con vistas a la Torre Eiffel',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F977i215%2Fqs57pgdbzn57m06x8zfw0qaxp4i215&option=N&permitphotoenlargement=false&w=1200',
        desc: 'EXCLUSIVO - PARIS 16 - Magnífico apartamento con aire acondicionado, lujosamente reformado, situado entre la Place D'Iéna y el Trocadéro.',
        address: 'Paris, Ile-De-France, 75016 France',
        rooms: 4,
        baths: 9,
        price: $9,782,609,
        smoke: true,
        pets: false 
    } ,
    { 
        name: 'Una propiedad excepcional de en sueño',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F977i215%2F65qjmzghnjw9462xjq4vd00084i215&option=N&permitphotoenlargement=false&w=1200',
        desc: 'Una impresionante residencia inspirada en la arquitectura de Bizancio y Venecia.',
        address: 'Cannes, Provence-Alpes-Cote D'Azur, 06400 France',
        rooms: 7,
        baths: 12,
        price: $130,434,783,
        smoke: true,
        pets: true  
    } 
];




function renderizarPropiedadesEnVenta() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesVentaIndex')) {
        contenedor = document.getElementById('propiedadesVentaIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesVenta')) {
        contenedor = document.getElementById('propiedadesVenta');
        limite = propiedadesEnVenta.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnVenta[i];

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

document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnVenta);
