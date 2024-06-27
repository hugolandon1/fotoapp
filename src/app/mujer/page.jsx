import Image from "next/image"


const Mujer = () => {
    return (
        <div className="relative h-auto bg-slate-900">
            <div className="flex justify-center gap-3 bg-slate-900">

                <Image
                    className="w-[100vw] h-[100%]"
                    src="https://i.ibb.co/9NzJvHj/beerreea.png"
                    width={700}
                    height={700}
                    alt="esto imagen"
                />
            </div>
            {/* <div className="absolute top-[50] left-[50] translate-y-[-230%] translate-x-[265%]">
                <h1 className="text-white text-[5rem]">MUJER</h1>
            </div> */}
        </div>
    )
}

export default Mujer