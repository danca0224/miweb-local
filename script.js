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