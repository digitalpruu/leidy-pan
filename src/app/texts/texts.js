const title = "Leidy Pan";
const email = "albaledyquiceno62@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los accesorios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = " 3103326026";

const textos = {
    index: {
        title: `${title}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "Somos una panadería artesanal liderada por Alba Ledy Quiceno Gallego, especializada en la elaboración de productos frescos y deliciosos como panes pequeños, rollos, mogollas, dulces, galletas, lenguas, mantecadas y brownies. Nuestro enfoque es brindar a nuestros clientes productos de calidad, perfectos para cualquier ocasión, con un toque tradicional y casero",
        description2: "En nuestra panadería, nos esforzamos por ofrecer una experiencia única en cada bocado, utilizando recetas tradicionales y los mejores ingredientes para garantizar el sabor y la frescura de cada uno de nuestros productos. Además, nos aseguramos de mantener un compromiso con la calidad y la satisfacción de nuestros clientes."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Elaboramos con amor,",
            p2: "horneamos con pasión",
        },
        address: email,
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
