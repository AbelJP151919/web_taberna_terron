import React from 'react';

const Privacidad: React.FC = () => {
  return (
    <main className="w-full bg-[#170d0b] text-[#f3ead7] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera roja */}
        <section
          aria-labelledby="privacidad-heading"
          className="bg-[#8f1d1d] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10 text-center"
        >
          <h1
            id="privacidad-heading"
            className="font-CormorantGaramond text-4xl sm:text-5xl font-bold text-[#f3ead7]"
          >
            Política de Privacidad
          </h1>
        </section>

        {/* Hoja de papel crema */}
        <article className="mt-8 bg-[#f3ead7] text-[#170d0b] rounded-2xl shadow-xl shadow-black/40 p-6 sm:p-10 flex flex-col divide-y divide-[#170d0b]/15">
          <section className="pb-8">
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              En Taberna Terrón cuidamos la privacidad de quienes nos visitan.
              Esta política explica cómo tratamos los datos personales que
              recogemos a través de nuestra web, conforme al Reglamento General
              de Protección de Datos (RGPD) y a la LOPDGDD.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Responsable del Tratamiento
            </h2>
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              El responsable del tratamiento de los datos que se recogen en esta
              web es Taberna Terrón, con domicilio en C/ Zurbarán, 20, 06002
              Badajoz.
            </p>
          </section>

          <section className="py-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Datos que Recopilamos y Finalidad
            </h2>
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              Solo tratamos la información que tú nos facilitas de forma
              voluntaria, como tu nombre, teléfono o correo electrónico, cuando
              solicitas una reserva o te pones en contacto con nosotros. Usamos
              estos datos únicamente para gestionar tu reserva y atenderte lo
              mejor posible en el local.
            </p>
          </section>

          <section className="pt-8">
            <h2 className="font-CormorantGaramond text-2xl sm:text-3xl font-bold text-[#8f1d1d] mb-3">
              Conservación y Cesión de Datos
            </h2>
            <p className="text-base leading-relaxed text-[#170d0b]/80">
              No compartiremos tus datos personales con terceros, salvo que la
              ley nos obligue a ello. Los guardaremos solo durante el tiempo
              necesario para cumplir con la finalidad para la que los recogimos.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Privacidad;