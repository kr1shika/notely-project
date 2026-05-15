// import { useState } from "react";

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
// <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
//                        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 items-center justify-between">
//                 {/* Logo */}
//                 <div className="md:flex md:items-center md:gap-12">
//                     <a className="block text-white" href="#">
//                         <span className="sr-only">Home</span>
//                         <span className="text-2xl font-bold">AFN</span>
//                     </a>
//                 </div>

//                 {/* Desktop Nav */}
//                 <div className="hidden md:block">
//                     <nav aria-label="Global">
//                         <ul className="flex items-center gap-6 text-sm">
//                             {[
//                                 "Services",
//                                 "About us",
//                                 "History",
//                                 "Contact Us",


//                             ].map((item) => (
//                                 <li key={item}>
//                                     <a
//                                         className="text-gray-400 hover:text-white transition"
//                                         href="#"
//                                     >
//                                         {item}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>

//                 {/* Right side */}
//                 <div className="flex items-center gap-4">
//                     <a
//                         className="hidden sm:block rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700"
//                         href="#"
//                     >
//                         Contact Us
//                     </a>

//                     {/* Mobile Menu Button */}
//                     <div className="block md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="rounded p-2 text-gray-300 hover:text-white"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="size-6"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                             >
//                                 {isOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden mt-2 space-y-2 pb-4">
//                     {[
//                         "Services",
//                         "About us",
//                         "History",
//                         "Contact Us",


//                     ].map((item) => (
//                         <a
//                             key={item}
//                             href="#"
//                             className="block rounded px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-white"
//                         >
//                             {item}
//                         </a>
//                     ))}

//                     <a
//                         href="#"
//                         className="block rounded bg-rose-600 px-4 py-2 text-sm text-white text-center hover:bg-rose-700"
//                     >
//                         Contact Us
//                     </a>
//                 </div>
//             )}
//         </div>
//         </header>
//     );
// };

// export default Header;