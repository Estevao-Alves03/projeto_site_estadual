import React from "react";

function Advertise() {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá, gostaria de anunciar no site!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full mx-auto my-4">
      <div className="border border-gray-200 bg-gradient-to-r from-green-100 to-blue-100 p-8 flex items-center justify-center min-h-[140px] rounded-xl shadow-sm">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <h1 className="text-3xl font-bold text-gray-800">
              Anuncie Conosco
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-xl">
            Fale diretamente com nosso time comercial pelo WhatsApp
          </p>

          <div className="mt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-md flex items-center gap-2 text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.43c.173.099.495.148.87-.075.39-.227 1.262-1.24 1.459-1.49.198-.248.297-.372.446-.372.149 0 .298.037.446.223.149.198.594.744.713.996.118.254.223.254.421.149.198-.099.843-.31 1.586-.992.744-.683.248-.744-.173-.843-.421-.099-3.658-.183-4.158 0-.5.183-.843.594-.644.683.248.148.843.347 1.213.545.372.198.558.298.644.447.099.149.099.843-.148 1.587-.248.744-.545 1.34-.842 1.734-.297.397-.595.52-.892.52-.298 0-.223-.099-.57-.446-.347-.347-1.387-1.353-1.536-1.452-.149-.099-.297-.149-.446.074-.149.223-.594.744-.744.992-.149.249-.298.273-.545.075-.248-.173-.941-.35-1.782-1.114-.653-.595-1.092-1.338-1.219-1.563-.124-.227-.013-.35.087-.463.087-.099.198-.248.298-.372.099-.124.124-.223.198-.372.074-.149.037-.273-.025-.372-.063-.099-.545-1.309-.744-1.785-.198-.479-.396-.413-.545-.421-.149-.008-.321-.01-.495-.01z" />
              </svg>
              Fale pelo WhatsApp
            </a>
          </div>

          <div className="mt-1">
            <p className="text-sm text-gray-600">
              Resposta rápida | Orçamento sem compromisso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertise;