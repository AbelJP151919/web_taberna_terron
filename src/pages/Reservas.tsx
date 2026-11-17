import React, { useState } from 'react';

/**
 * Diseño: cabecera roja (pared del local), formulario en papel crema y
 * "otras formas de reservar" en verde (carpintería).
 *
 * OJO: el número de WhatsApp debe ser un móvil con WhatsApp activo.
 * El 924 93 90 54 parece un fijo: confirmar con el cliente.
 */

const WHATSAPP_NUMBER = '34924939054'; // prefijo de país + número, sin + ni espacios
const TELEFONO_VISIBLE = '924 93 90 54';
const NOMBRE_LOCAL = 'Taberna Terrón';
const DIRECCION = 'C/ Zurbarán, 20, 06002 Badajoz';

interface ReservaForm {
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: string;
  comentarios: string;
}

const inicial: ReservaForm = {
  nombre: '',
  telefono: '',
  fecha: '',
  hora: '',
  personas: '2',
  comentarios: '',
};

const hoy = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];

const inputClass =
  'w-full rounded-lg border border-[#170d0b]/25 bg-white/70 px-4 py-2.5 text-[#170d0b] placeholder-[#170d0b]/40 ' +
  'focus:outline-none focus:ring-2 focus:ring-[#8f1d1d] focus:border-[#8f1d1d]';

const labelClass = 'block text-sm font-semibold text-[#170d0b] mb-1.5';

const Reservas_Terron: React.FC = () => {
  const [form, setForm] = useState<ReservaForm>(inicial);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fechaLegible = new Date(`${form.fecha}T00:00`).toLocaleDateString(
      'es-ES',
      { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    );

    const lineas = [
      `Hola, me gustaría hacer una reserva en ${NOMBRE_LOCAL}:`,
      '',
      `Nombre: ${form.nombre.trim()}`,
      `Teléfono: ${form.telefono.trim()}`,
      `Fecha: ${fechaLegible}`,
      `Hora: ${form.hora}`,
      `Personas: ${form.personas}`,
    ];

    if (form.comentarios.trim()) {
      lineas.push(`Comentarios: ${form.comentarios.trim()}`);
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lineas.join('\n')
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="w-full bg-[#170d0b] text-[#f3ead7] px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Cabecera */}
        <section
          aria-labelledby="reservas-heading"
          className="bg-[#8f1d1d] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10"
        >
          <h1
            id="reservas-heading"
            className="font-CormorantGaramond text-4xl sm:text-5xl font-bold text-[#f3ead7] mb-4 text-center"
          >
            Reservas
          </h1>
          <p className="text-[#f3ead7]/90 leading-relaxed text-center max-w-xl mx-auto">
            Reserva tu mesa en {NOMBRE_LOCAL}. Rellena el formulario y te
            abriremos WhatsApp con tu solicitud lista para enviar.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="px-5 py-2.5 rounded-lg border border-[#f3ead7]/70 text-[#f3ead7] hover:bg-[#f3ead7]/10 transition-colors"
            >
              Llamar al {TELEFONO_VISIBLE}
            </a>
          </div>
        </section>

        {/* Formulario (papel crema) */}
        <section
          aria-labelledby="formulario-heading"
          className="mt-8 bg-[#f3ead7] text-[#170d0b] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10"
        >
          <h2
            id="formulario-heading"
            className="font-CormorantGaramond text-3xl font-bold text-[#8f1d1d] mb-6 pb-3 border-b-2 border-[#8f1d1d]"
          >
            Solicitar reserva
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClass}>Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Tu nombre"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="telefono" className={labelClass}>Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="600 000 000"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="fecha" className={labelClass}>Fecha</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                min={hoy()}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="hora" className={labelClass}>Hora</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={form.hora}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="personas" className={labelClass}>Número de personas</label>
              <input
                type="number"
                id="personas"
                name="personas"
                value={form.personas}
                onChange={handleChange}
                min={1}
                max={20}
                required
                className={inputClass}
              />
              <p className="mt-1.5 text-xs text-[#170d0b]/60">
                Para grupos de más de 20 personas, llámanos.
              </p>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="comentarios" className={labelClass}>
                Comentarios <span className="font-normal text-[#170d0b]/60">(opcional)</span>
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={form.comentarios}
                onChange={handleChange}
                rows={3}
                placeholder="Alergias, trona, celebración…"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto sm:self-start px-6 py-3 rounded-lg bg-[#8f1d1d] text-[#f3ead7] font-semibold hover:bg-[#a52222] transition-colors focus:outline-none focus:ring-2 focus:ring-[#170d0b]/50"
              >
                Reservar por WhatsApp
              </button>
              <p className="text-xs text-[#170d0b]/60">
                Se abrirá WhatsApp con tu solicitud ya escrita. La reserva queda
                confirmada cuando el local te responda.
              </p>
            </div>
          </form>
        </section>

        {/* Otras formas (verde) */}
        <section
          aria-labelledby="otras-formas-heading"
          className="mt-8 bg-[#0f2f2d] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10"
        >
          <h2
            id="otras-formas-heading"
            className="font-CormorantGaramond text-3xl font-bold text-[#f3ead7] mb-4"
          >
            Otras formas de reservar
          </h2>
          <ul className="flex flex-col gap-3 text-[#f3ead7]/85">
            <li>
              <span className="text-[#e3a857] font-semibold">Por teléfono: </span>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="underline underline-offset-4 hover:text-white"
              >
                {TELEFONO_VISIBLE}
              </a>
            </li>
            <li>
              <span className="text-[#e3a857] font-semibold">En persona: </span>
              {DIRECCION}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Reservas_Terron;