const Footer = () => {
  return (
    <footer style={{ background: "linear-gradient(135deg, #1F3A5F 0%, #0f1e30 50%, #0a0f1a 100%)" }} className="text-white">
      <div className="container mx-auto py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center mb-5">
              <img
                src="/logo-tuaiti-main-inverse.svg"
                alt="TUAITI – Technology for Businesses"
                className="h-20 w-auto"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Soporte tecnológico gestionado para empresas. Ayudamos a las empresas a mantener la continuidad operativa y a tomar las decisiones tecnológicas adecuadas.
            </p>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#home" },
                { label: "Sobre Nosotros", href: "#about" },
                { label: "Servicios", href: "#services" },
                { label: "Contacto", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2">
              {[
                "Servidores siempre bajo control",
                "Tu correo y archivos, siempre disponibles",
                "Internet estable en toda tu oficina",
                "Tus datos protegidos ante cualquier imprevisto",
                "Menos tareas manuales, más productividad",
                "Soporte rápido cuando algo falla",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Tuaiti | Tecnología para Empresas | Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Politica de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
