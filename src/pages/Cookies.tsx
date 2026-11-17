import React from 'react';

const Cookies: React.FC = () => {
  return (
    <main className="w-full bg-[#170d0b] text-[#f3ead7] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera roja */}
        <section
          aria-labelledby="cookies-heading"
          className="bg-[#8f1d1d] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10 text-center"
        >
          <h1
            id="cookies-heading"
            className="font-CormorantGaramond text-4xl sm:text-5xl font-bold text-[#f3ead7]"
          >
            Política de Cookies
          </h1>
        </section>

        {/* Hoja de papel crema */}
        <article className="mt-8 bg-[#f3ead7] text-[#170d0b] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10 flex flex-col divide-y divide-[#170d0b]/15">
          <section className="pb-8">
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              En Taberna Terrón usamos cookies propias y de terceros para que la
              web funcione correctamente y para entender cómo la utilizan
              nuestros visitantes.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Tipos de cookies que usamos
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-3 text-base leading-relaxed text-[#170d0b]/80">
              <li>
                <strong className="text-[#170d0b]">Cookies técnicas:</strong>{' '}
                imprescindibles para que la web funcione y puedas moverte por
                sus distintas secciones.
              </li>
              <li>
                <strong className="text-[#170d0b]">Cookies de análisis:</strong>{' '}
                nos ayudan a contar las visitas y a medir cómo se usa la web,
                para poder mejorarla y ofrecerte mejor contenido.
              </li>
            </ul>
          </section>

          <section className="pt-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Gestión de cookies
            </h2>
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              Puedes aceptar, bloquear o borrar las cookies en cualquier momento
              desde los ajustes de tu navegador.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Cookies;