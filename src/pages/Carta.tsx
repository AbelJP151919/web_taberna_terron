import React, { useState } from 'react';
import type { Plato, Carta, Categoria } from '../interfaces/Carta_Interface';
import carta from '../data/carta.json';

/**
 * Diseño: fondo tinta, cabecera roja (pared del local) y una "hoja de carta"
 * en papel crema por categoría, como sus menús impresos.
 */

const cartas = carta.cartas as unknown as Carta[];

const ALERGENOS: Record<string, string> = {
  gluten: 'Gluten',
  lacteos: 'Lácteos',
  sulfitos: 'Sulfitos',
  crustaceos: 'Crustáceos',
  moluscos: 'Moluscos',
  pescado: 'Pescado',
  huevos: 'Huevos',
  frutos_de_cascara: 'Frutos de cáscara',
  cacahuetes: 'Cacahuetes',
  soja: 'Soja',
  sesamo: 'Sésamo',
  altramuces: 'Altramuces',
};

const formatPrecio = (precio: number | null) =>
  precio !== null ? `${precio.toFixed(2).replace('.', ',')} €` : 'Consultar';

const formatPrecioPesetas = (precio: number | null) =>
  precio !== null ? `${precio.toFixed(0).replace('.', ',')} Pts` : 'Consultar';

const Carta_Terron: React.FC = () => {
  const [activa, setActiva] = useState<string>(cartas[0].id);
  const cartaActiva = cartas.find(c => c.id === activa) ?? cartas[0];
  const categorias: Categoria[] = cartaActiva.categorias.filter(
    cat => cat.platos.length > 0
  );

  return (
    <main className="w-full bg-[#170d0b] text-[#f3ead7] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera */}
        <section
          aria-labelledby="carta-heading"
          className="bg-[#8f1d1d] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10"
        >
          <h1
            id="carta-heading"
            className="font-CormorantGaramond text-4xl sm:text-5xl font-bold text-[#f3ead7] mb-4 text-center"
          >
            Nuestra carta
          </h1>
          <p className="text-[#f3ead7]/90 leading-relaxed text-center max-w-2xl mx-auto">
            Elige la carta que quieras consultar.
          </p>

          <div
            role="tablist"
            aria-label="Cartas"
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {cartas.map(c => {
              const seleccionada = c.id === activa;
              return (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  aria-selected={seleccionada}
                  onClick={() => setActiva(c.id)}
                  className={`px-5 py-2.5 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#e3a857] ${
                    seleccionada
                      ? 'bg-[#f3ead7] text-[#170d0b]'
                      : 'border border-[#f3ead7]/70 text-[#f3ead7] hover:bg-[#f3ead7]/10'
                  }`}
                >
                  {c.nombre.replace('Carta ', '')}
                </button>

              );
            })}
          </div>
        </section>

        {/* Una hoja de papel por categoría */}
        <div role="tabpanel" className="mt-8 flex flex-col gap-8">
          {categorias.map((categoria: Categoria) => (
            <section
              key={categoria.id}
              aria-labelledby={`cat-${categoria.id}`}
              className="bg-[#f3ead7] text-[#170d0b] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10"
            >
              <h2
                id={`cat-${categoria.id}`}
                className="font-CormorantGaramond text-3xl font-bold text-[#8f1d1d] mb-6 pb-3 border-b-2 border-[#8f1d1d]"
              >
                {categoria.nombre}
              </h2>

              <ul className="flex flex-col gap-5">
                {categoria.platos.map((plato: Plato) => (
                  <li key={plato.id}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-CormorantGaramond text-xl font-bold text-[#170d0b]">
                        {plato.nombre}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-[#170d0b]/40 translate-y-[-4px]"
                      />
                      <span className="font-CormorantGaramond text-xl font-bold text-[#8f1d1d] whitespace-nowrap">
                        {formatPrecio(plato.precio)}
                      </span>
                      <span className="font-CormorantGaramond text-xl font-bold text-[#8f1d1d] whitespace-nowrap">
                        {formatPrecioPesetas(plato.precioPesetas)}
                      </span>
                    </div>

                    {plato.descripcion && (
                      <p className="mt-1 text-sm text-[#170d0b]/70">
                        {plato.descripcion}
                      </p>
                    )}

                    {plato.alergenos && plato.alergenos.length > 0 && (
                      <ul aria-label="Alérgenos" className="mt-2 flex flex-wrap gap-1.5">
                        {plato.alergenos.map(a => (
                          <li
                            key={a}
                            className="text-xs px-2 py-0.5 rounded-full border border-[#170d0b]/25 text-[#170d0b]/70"
                          >
                            {ALERGENOS[a] ?? a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#f3ead7]/60">
          Precios con IVA incluido. Si tienes alguna alergia o intolerancia,
          consúltanos antes de pedir.
        </p>
      </div>
    </main>
  );
};

export default Carta_Terron;