// src/utils/contact.js

const CONTACT = {
  whatsapp: {
    number: "573164167536",
    message: "Hola, Julián. Me gustaría conocer más sobre tus servicios.",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61580255146556",
    instagram: "https://www.instagram.com/im.juliandrojas",
    github: "https://github.com/juliandrojas",
    linkedin: "https://linkedin.com/in/tu-perfil",
  },
  email: "julian.rojas@example.com",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(CONTACT.whatsapp.message)}`;

export default CONTACT;
