// src/utils/contact.js

const CONTACT = {
  // WhatsApp (número sin + ni espacios)
  whatsapp: {
    number: "573164167536",
    message:
      "Hola%20Juli%C3%A1n%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20contactarte.",
  },

  // Redes sociales (¡sin espacios al final!)
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61580255146556",
    instagram: "https://www.instagram.com/im.juliandrojas",
    github: "https://github.com/juliandrojas",
    linkedin: "https://linkedin.com/in/tu-perfil",
  },

  email: "julian.rojas@example.com",
};

// ✅ URL CORRECTA: sin espacios después de "/wa.me/"
export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp.number}?text=${CONTACT.whatsapp.message}`;

export default CONTACT;
