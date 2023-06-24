import { CloseIcon } from "./Icons";



export const Drawer = ({ children, isOpen, setIsOpen }) => {
    return (
        <main
            className={
                " fixed overflow-hidden  bg-gray-900 bg-opacity-70 inset-0 transform ease-in-out z-50 " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0"
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >

                <article className="relative w-screen max-w-lg px-10 mx-auto bg-gray-dark flex flex-col space-y-6 overflow-y-scroll h-full text-white">
                    <div className="p-3" >
                        <button onClick={() => { setIsOpen(false); }} >
                            <CloseIcon className="stroke-gray-light w-6 h-6" />
                        </button>
                    </div>
                    {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    )
}
