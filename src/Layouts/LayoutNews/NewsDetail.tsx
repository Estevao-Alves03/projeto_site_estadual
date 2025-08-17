// Pages/NewsDetail.tsx
import Breadcrumb from "@/Layouts/BreadcrumbProps";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import Advertise from "@/Layouts/Contact/Advertise";

function NewsDetail() {
  const { id } = useParams();

  return (
    <div className="mx-64 py-10">
      {/* Container principal com flex-col para alinhamento vertical */}
      <div className="flex flex-col gap-4">
        {/* Tag Infraestrutura */}
        <div>
          <h1 className="bg-blue-700 text-white font-semibold px-3 rounded-full inline-block">
            Infraestrutura
          </h1>
        </div>

        {/* Conteúdo da notícia */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Nova ponte será inaugurada no centro da cidade
          </h1>
          <p className="text-gray-700">
            Obra que custou R$ 2,5 milhões promete melhorar o trânsito na região
            central
          </p>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex">
            <MdOutlinePersonOutline className="mr-2 mt-0.5 w-5 h-5 text-gray-600" />
            <p>
              <span className="text-gray-600 font-serif">Por</span>{" "}
              <strong className="font-serif">Joao Silva</strong>
            </p>
          </div>
          <div className="flex">
            <CiCalendar className="mr-2 w-5 h-5 mt-0.5 text-gray-600" />
            <p className="text-gray-600 font-serif">
              segunda-feira, 15 de janeiro de 2024
            </p>
          </div>
          <div className="flex">
            <GoClock className="mr-2 w-4 h-4 mt-1 text-gray-600" />
            <p className="text-gray-600 font-serif">07:30</p>
          </div>
          <div className="flex">
            <LuMapPin className="mr-2 w-4 h-4 mt-1 text-gray-600" />
            <p className="text-gray-600 font-serif">Centro</p>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex">
            <FaRegEye className="mr-2 w-4 h-4 mt-1 text-gray-600" />
            <p className="text-gray-600 font-serif">143 vizualizações</p>
          </div>
          <div className="flex">
            <FaRegHeart className="mr-2 h-4 w-4 mt-1 text-gray-600" />
            <p className="text-gray-600 font-serif">34 curtidas</p>
          </div>
          <div className="flex">
            <PiShareNetworkDuotone className="mr-2 w-5 h-5 mt-0.5 text-gray-600" />
            <p className="text-gray-600 font-serif"> 28 Compartilhado</p>
          </div>
        </div>

        <Separator className="mt-3" />

        <div className="border rounded-xl mt-4 max-h-[400px] overflow-hidden">
          <img
            src="../../public/reforma-obras.webp"
            alt="Descrição da imagem"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <p className="font-sans font-medium w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
            vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
            porttitor. Ut in nulla enim. Phasellus molestie magna non est
            bibendum non venenatis nisl tempor <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
            vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
            porttitor. Ut in nulla enim. Phasellus molestie magna non est
            bibendum non venenatis nisl tempor. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor.
          </p>
        </div>

        {/* <Separator className="mt-3" /> */}

        {/* <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <button className="flex items-center gap-3 border px-3 py-2 rounded-lg hover:bg-gray-100">
                <FaRegHeart className="" />
                <p>Curtir (34)</p>
              </button>
            </div>
            <div>
              <button className="flex items-center gap-3 border px-3 py-2 rounded-lg hover:bg-gray-100">
                <PiShareNetworkDuotone />
                <p>Compartilhar</p>
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-600 font-serif">
              Última atualização: 15/01/2024, 07:30
            </p>
          </div>
        </div> */}

        <Separator className="mt-3" />

        <Advertise/>

        <Separator className="mb-3"/>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Nova ponte será inaugurada no centro da cidade
          </h1>
          <p className="text-gray-700">
            Obra que custou R$ 2,5 milhões promete melhorar o trânsito na região
            central
          </p>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex">
            <MdOutlinePersonOutline className="mr-2 mt-0.5 w-5 h-5 text-gray-600" />
            <p>
              <span className="text-gray-600 font-serif">Por</span>{" "}
              <strong className="font-serif">Joao Silva</strong>
            </p>
          </div>
          <div className="flex">
            <CiCalendar className="mr-2 w-5 h-5 mt-0.5 text-gray-600" />
            <p className="text-gray-600 font-serif">
              segunda-feira, 15 de janeiro de 2024
            </p>
          </div>
          <div className="flex">
            <GoClock className="mr-2 w-4 h-4 mt-1 text-gray-600" />
            <p className="text-gray-600 font-serif">07:30</p>
          </div>
          <div className="flex">
            <LuMapPin className="mr-2 w-4 h-4 mt-1 text-gray-600" />
            <p className="text-gray-600 font-serif">Centro</p>
          </div>
        </div>

        <div className="border rounded-xl mt-4 max-h-[400px] overflow-hidden">
          <img
            src="../../public/predio.jpg"
            alt="Descrição da imagem"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <p className="font-sans font-medium w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
            vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
            porttitor. Ut in nulla enim. Phasellus molestie magna non est
            bibendum non venenatis nisl tempor <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
            vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
            porttitor. Ut in nulla enim. Phasellus molestie magna non est
            bibendum non venenatis nisl tempor. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor.
          </p>
        </div>

        <Separator className="mt-3" />

        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <button className="flex items-center gap-3 border px-3 py-2 rounded-lg hover:bg-gray-100">
                <FaRegHeart className="" />
                <p>Curtir (34)</p>
              </button>
            </div>
            <div>
              <button className="flex items-center gap-3 border px-3 py-2 rounded-lg hover:bg-gray-100">
                <PiShareNetworkDuotone />
                <p>Compartilhar</p>
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-600 font-serif">
              Última atualização: 15/01/2024, 07:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
