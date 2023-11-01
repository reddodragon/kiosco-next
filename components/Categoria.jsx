import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {

    const { categoriaActual, handleClickCategoria } = useQuiosco()

    const { nombre, icono, id } = categoria;

    return (
        <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border p-1 hover:bg-amber-400`}>
            <Image
                width={80}
                height={80}
                src={`/assets/img/icono_${icono}.svg`}
                alt="Imagen Icono"
            />
            <button
                type="button"
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    );
};

export default Categoria;
