AYC Portal - Versión avanzada

Incluye:
- Logo AYC Salud (grande en login, pequeño en dashboard)
- Dashboard moderno con tarjetas
- Mensaje global y mensajes dirigidos a usuarios
- Subida de archivos para todos o por usuario
- Borrado de mensajes y documentos
- Notificaciones por correo usando EmailJS

Para activar los correos:
1) Crea una cuenta en https://www.emailjs.com
2) Crea un Service y un Email Template.
3) En dashboard.html:
   - Cambia "TU_PUBLIC_KEY_AQUI" por tu Public Key real.
   - Cambia "TU_SERVICE_ID" y "TU_TEMPLATE_ID" por los IDs reales de EmailJS.
4) En la plantilla de EmailJS, usa las variables:
   - {{to_name}}
   - {{to_email}}
   - {{subject}}
   - {{message}}

Si no configuras EmailJS, el portal igual funciona localmente (solo que no se enviarán correos).
