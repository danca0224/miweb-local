// Marca el link activo en el menú según la URL actual
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// Demo: botón en Home (si existe)
(() => {
  const btn = document.getElementById("btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const msg = document.getElementById("msg");
    if (msg) msg.textContent = "✅ Perfecto: tu sitio multi-página ya funciona.";
  });
})();

// Demo: formulario de contacto (no envía a internet; solo simula)
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const out = document.getElementById("formOut");
    out.textContent = `✅ Recibido (simulado): ${nombre} - ${correo} - ${mensaje}`;
    form.reset();
  });
})();
// Demo: botón de "Solicitar diagnóstico" (Home)
(() => {
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  // Si no estamos en Home, no hacemos nada
  if (!btn || !msg) return;

  btn.addEventListener("click", function () {
    msg.textContent =
      "✅ Solicitud recibida. Un asesor de TecnoWebSupport te contactará pronto para coordinar el diagnóstico.";

    msg.style.marginTop = "10px";
    msg.style.color = "#16a34a";
    msg.style.fontWeight = "600";

    btn.textContent = "Solicitud enviada ✓";
    btn.disabled = true;
    btn.style.opacity = "0.7";
    btn.style.cursor = "not-allowed";

    setTimeout(function () {
        msg.textContent = "";
    }, 4000);
  });
})();

// 🔒 SSL Scan
(() => {
  const hostInput = document.getElementById("host");
  const sslBtn = document.getElementById("sslBtn");
  const sslMsg = document.getElementById("sslMsg");

  if (!hostInput || !sslBtn || !sslMsg) return;

  const normalizeHost = (value) => {
    let h = value.trim();
    h = h.replace(/^https?:\/\//i, "");
    h = h.split("/")[0];
    return h;
  };

  sslBtn.addEventListener("click", () => {
    const host = normalizeHost(hostInput.value);

    if (!host) {
      sslMsg.textContent = "⚠️ Escribe un dominio válido. Ej: example.com";
      return;
    }

    sslMsg.textContent = `Abriendo análisis para: ${host} ...`;

    const url = `https://www.ssllabs.com/ssltest/analyze.html?d=${encodeURIComponent(host)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();

// SSL Scan (abre SSL Labs con el dominio)
(() => {
  const host = document.getElementById("host");
  const btn = document.getElementById("sslBtn");
  const msg = document.getElementById("sslMsg");

  // Si no estamos en ssl.html, no hacemos nada
  if (!host || !btn || !msg) return;

  btn.addEventListener("click", () => {
    const domain = host.value.trim().replace(/^https?:\/\//, "");

    if (!domain) {
      msg.textContent = "⚠️ Escribe un dominio, por ejemplo: bogota.gov.co";
      msg.style.color = "#b45309";
      return;
    }

    const url = `https://www.ssllabs.com/ssltest/analyze.html?d=${encodeURIComponent(domain)}`;

    msg.textContent = `Abriendo análisis para: ${domain}...`;
    msg.style.color = "#16a34a";

    // Crear enlace dinámico (no se bloquea)
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  });
})();