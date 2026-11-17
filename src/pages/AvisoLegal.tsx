import React from 'react';

const AvisoLegal: React.FC = () => {
  return (
    <main className="w-full bg-[#170d0b] text-[#f3ead7] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera roja */}
        <section
          aria-labelledby="aviso-heading"
          className="bg-[#8f1d1d] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10 text-center"
        >
          <h1
            id="aviso-heading"
            className="font-CormorantGaramond text-4xl sm:text-5xl font-bold text-[#f3ead7]"
          >
            Aviso Legal
          </h1>
        </section>

        {/* Hoja de papel crema */}
        <article className="mt-8 bg-[#f3ead7] text-[#170d0b] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10 flex flex-col divide-y divide-[#170d0b]/15">
          <section className="pb-8">
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              Conforme al artículo 10 de la Ley 34/2002, de 11 de julio, de
              Servicios de la Sociedad de la Información y de Comercio
              Electrónico (LSSICE), estos son los datos identificativos del
              titular de este sitio web:
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Datos del titular
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-base leading-relaxed text-[#170d0b]/80">
              <li>
                <strong className="text-[#170d0b]">Denominación social:</strong>{' '}
                [pendiente de completar]
              </li>
              <li>
                <strong className="text-[#170d0b]">NIF:</strong>{' '}
                [pendiente de completar]
              </li>
              <li>
                <strong className="text-[#170d0b]">Domicilio:</strong> C/
                Zurbarán, 20, 06002 Badajoz, España
              </li>
              <li>
                <strong className="text-[#170d0b]">Teléfono:</strong>{' '}
                924 93 90 54
              </li>
              <li>
                <strong className="text-[#170d0b]">Correo electrónico:</strong>{' '}
                [pendiente de completar]
              </li>
              <li>
                <strong className="text-[#170d0b]">Actividad:</strong> Servicios
                de restauración y hostelería
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Condiciones de Uso
            </h2>
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              Al acceder y utilizar este sitio web pasas a ser usuario y aceptas
              estas Condiciones de Uso. La información sobre la carta, los menús
              y los precios es meramente informativa y puede cambiar sin previo
              aviso.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default AvisoLegal;