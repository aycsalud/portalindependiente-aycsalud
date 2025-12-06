// Lista de clientes del portal AYC Salud
// role: "admin" para el administrador con acceso al panel completo

const CLIENTES = [

  // --- ADMINISTRADOR ---
  { 
    usuario: "admin",
    pass: "adminAYC2025",
    nombre: "Administrador AYC",
    servicio: "Administración",
    categoria: "Admin",
    correo: "admin@ayc.com",
    estado: "Activo",
    role: "admin"
  },

  // --- USUARIO LUNA ---
  {
    usuario: "luna",
    pass: "AYC-LUNA-2025",
    nombre: "Luna Carrillo",
    servicio: "Portal AYC Salud",
    categoria: "Profesional independiente",
    correo: "lunamcarrillog@gmail.com",
    estado: "Activo",
    ultima: "2025-12-06"
  }

];
