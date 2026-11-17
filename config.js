// Configuración de la app. Con API_URL vacío funciona en MODO DEMO (datos simulados, no se guarda nada).
window.RDP_CONFIG = {
  API_URL: "https://rdp-escorial-api.diegortizdao.workers.dev",
  AUTH: "pilot"         // "pilot" (correo + clave de acceso, solo pruebas) | "entra" (Microsoft Entra ID, cuando IT lo habilite)
};
