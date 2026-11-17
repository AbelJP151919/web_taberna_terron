/**
 * Taberna_Terron.tsx
 * ---------------------------------------------------------------------------
 * Home de Taberna Terrón (Badajoz).
 *
 * Paleta (sacada de su Instagram y del local):
 *   tinta   #170d0b  -> fondo base, hero y textos oscuros
 *   rojo    #8f1d1d  -> pared roja del local (sección de platos)
 *   verde   #0f2f2d  -> carpintería verde azulada (sección de ubicación)
 *   crema   #f3ead7  -> cartas y menús impresos (texto y botones)
 *   ámbar   #e3a857  -> luz de los faroles (precios y etiquetas)
 */

import { Link } from 'react-router-dom';
import carta from './data/carta.json';
import type { Plato, Carta } from './interfaces/Carta_Interface';

const TELEFONO_TEL = 'tel:+34924939054';
const INSTAGRAM_URL = 'https://www.instagram.com/tabernaterron/';

// CONFIRMAR con el cliente el nombre exacto de cada premio y el permiso para usarlos.
const PREMIOS = [
  { titulo: 'Mejor bar de Extremadura', detalle: 'Premio TdeBares' },
  { titulo: 'Un Solete', detalle: 'Guía Repsol' },
  { titulo: 'Mejor taberna extremeña', detalle: 'Premio de la crítica' },
];

// Sustituir por las fotos reales del cliente (carpeta public/img/galeria).
const GALERIA = [
  { src: '/images/galeria/galeria_1.webp', alt: 'Comedor rojo con faroles de mimbre' },
  { src: '/images/galeria/galeria_2.webp', alt: 'Mesa con mantel floral lista para cenar' },
  { src: '/images/galeria/galeria_3.webp', alt: 'Fachada de Taberna Terrón en Badajoz' },
  { src: '/images/galeria/galeria_4.webp', alt: 'Tabla de quesos y panes extremeños' },
  { src: '/images/galeria/galeria_5.webp', alt: 'Paella cocinándose a la puerta de la taberna' },
  { src: '/images/galeria/galeria_6.webp', alt: 'Mesas largas del comedor preparadas para un evento' },
];

const Taberna_Terron: React.FC = () => {
  const destacados: Plato[] = (carta.cartas as Carta[])
    .flatMap(c => c.categorias)
    .flatMap(cat => cat.platos)
    .filter(p => p.destacado);

  return (
    <div className="w-full min-h-screen bg-[#170d0b] text-[#f3ead7]">
      <main className="w-full">
        {/* ------------------------------------------------------------ */}
        {/* HERO                                                          */}
        {/* ------------------------------------------------------------ */}
        <section className="relative w-full h-[85vh] min-h-[480px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('./public/backgroundImage.webp')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#170d0b]/70 via-[#170d0b]/55 to-[#170d0b]" />

          <div className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center">
            <h1 className="font-CormorantGaramond text-5xl sm:text-6xl md:text-8xl font-bold text-[#f3ead7] leading-none">
              Taberna Terrón
            </h1>
            <p className="mt-4 font-CormorantGaramond text-2xl md:text-3xl italic text-[#e3a857]">
              Taberna extremeña 2.0
            </p>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-stone-200 font-CormorantGaramond">
              Cocina extremeña para compartir, en el corazón de Badajoz.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/carta"
                className="px-6 py-3 bg-[#f3ead7] text-[#170d0b] font-Montserrat font-semibold rounded-lg hover:bg-white transition-colors"
              >
                Ver carta
              </Link>
              <Link
                to="/reservas"
                className="px-6 py-3 border border-[#f3ead7] text-[#f3ead7] font-Montserrat rounded-lg hover:bg-[#f3ead7]/10 transition-colors"
              >
                Reservar mesa
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* PREMIOS                                                       */}
        {/* ------------------------------------------------------------ */}
        <section
          aria-label="Premios y reconocimientos"
          className="w-full border-y border-[#f3ead7]/15 bg-[#170d0b] px-6 py-10"
        >
          <ul className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#f3ead7]/15">
            {PREMIOS.map(p => (
              <li key={p.titulo} className="flex flex-col items-center text-center gap-1 px-4">
                <span className="font-CormorantGaramond text-2xl font-bold text-[#f3ead7]">
                  {p.titulo}
                </span>
                <span className="text-sm text-[#e3a857]">{p.detalle}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* PLATOS DESTACADOS (pared roja, fotos como cuadros)            */}
        {/* ------------------------------------------------------------ */}
        <section
          aria-labelledby="platos-heading"
          className="w-full bg-[#8f1d1d] py-16 sm:py-24 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="platos-heading"
              className="font-CormorantGaramond text-4xl md:text-5xl font-bold text-[#f3ead7] mb-16 text-center"
            >
              Nuestros platos destacados
            </h2>

            <div className="flex flex-col gap-20">
              {destacados.map((p, i) => {
                const invertido = i % 2 === 1;
                return (
                  <article
                    key={p.id}
                    className={`flex flex-col items-center gap-8 md:gap-14 md:flex-row ${
                      invertido ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <img
                      src={p.foto}
                      alt={p.nombre}
                      loading="lazy"
                      className={`w-full md:w-1/2 h-72 md:h-96 object-cover border-[10px] border-[#f3ead7] shadow-2xl shadow-black/50 ${
                        invertido ? 'md:rotate-1' : 'md:-rotate-1'
                      }`}
                    />

                    <div
                      className={`flex flex-col gap-3 w-full md:w-1/2 text-center ${
                        invertido ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <h3 className="font-CormorantGaramond text-3xl md:text-4xl font-bold text-[#f3ead7]">
                        {p.nombre}
                      </h3>
                      {p.descripcion && (
                        <p className="text-[#f3ead7]/85 leading-relaxed max-w-md md:max-w-none">
                          {p.descripcion}
                        </p>
                      )}
                      <p className="font-CormorantGaramond text-2xl font-semibold text-[#e3a857]">
                        {p.precio !== null
                          ? `${p.precio.toFixed(2).replace('.', ',')} €`
                          : 'Consultar'}
                      </p>
                      <p className="font-CormorantGaramond text-2xl font-semibold text-[#e3a857]">
                        {p.precioPesetas !== null
                          ? `${p.precioPesetas.toFixed(0).replace('.', ',')} Pts`
                          : 'Consultar'}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* GALERÍA + INSTAGRAM                                           */}
        {/* ------------------------------------------------------------ */}
        <section
          aria-labelledby="galeria-heading"
          className="w-full bg-[#170d0b] py-16 sm:py-24 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="galeria-heading"
              className="font-CormorantGaramond text-4xl md:text-5xl font-bold text-[#f3ead7] mb-12 text-center"
            >
              Conoce la taberna
            </h2>

            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {GALERIA.map(f => (
                <li key={f.src} className="overflow-hidden rounded-lg border border-[#f3ead7]/20">
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="block w-full aspect-[4/3] object-cover"
                  />
                </li>
              ))}
            </ul>

            <div className="mt-12 flex justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-[#f3ead7]/60 text-[#f3ead7] hover:bg-[#f3ead7]/10 transition-colors"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
                <span>Síguenos en Instagram @tabernaterron</span>
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* UBICACIÓN (verde de la carpintería, mapa grande)              */}
        {/* ------------------------------------------------------------ */}
        <section
          aria-labelledby="ubicacion-heading"
          className="w-full bg-[#0f2f2d] py-16 sm:py-24 px-6"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-14">
            <div className="w-full md:w-2/5 flex flex-col justify-center gap-6">
              <h2
                id="ubicacion-heading"
                className="font-CormorantGaramond text-4xl font-bold text-[#f3ead7]"
              >
                Dónde estamos
              </h2>

              <p className="text-base text-[#f3ead7]/85 leading-relaxed">
                Una taberna extremeña en pleno centro de Badajoz, con cocina
                para compartir, buen ambiente y un local con mucha historia en
                cada rincón.
              </p>

              <address className="not-italic flex flex-col gap-2 text-[#f3ead7]/85">
                <p>
                  <span className="text-[#e3a857] font-semibold">Dirección: </span>
                  C/ Zurbarán, 20, 06002 Badajoz
                </p>
                <p>
                  <span className="text-[#e3a857] font-semibold">Teléfono: </span>
                  <a
                    href={TELEFONO_TEL}
                    className="hover:text-white underline underline-offset-4"
                  >
                    924 93 90 54
                  </a>
                </p>
              </address>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Taberna+Terr%C3%B3n,+Zurbaran,+20,+06002+Badajoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#f3ead7] text-[#170d0b] font-semibold hover:bg-white transition-colors"
                >
                  Cómo llegar
                </a>
                <a
                  href={TELEFONO_TEL}
                  className="px-5 py-2.5 rounded-lg border border-[#f3ead7]/60 text-[#f3ead7] hover:bg-[#f3ead7]/10 transition-colors"
                >
                  Llamar
                </a>
              </div>
            </div>

            <div className="w-full md:w-3/5">
              <div className="overflow-hidden rounded-lg border-[6px] border-[#f3ead7] shadow-2xl shadow-black/40">
                <iframe
                  title="Ubicación de Taberna Terrón en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d475.2572128721473!2d-6.9706140489616155!3d38.8754862060067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd16e5004e97e6a7%3A0xb0bfd1647cdb7b46!2sTaberna%20Terr%C3%B3n%2C%20Zurbaran%2C%2020%2C%2006002%20Badajoz!3m2!1d38.8756275!2d-6.9707159!5e0!3m2!1ses!2ses!4v1794834800361!5m2!1ses!2ses"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full h-80 sm:h-[26rem] lg:h-[34rem] [filter:sepia(20%)_saturate(90%)]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Taberna_Terron;