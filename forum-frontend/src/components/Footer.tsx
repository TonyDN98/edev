// import React from 'react';
//
// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-gray-800 text-white py-4 mt-10">
//             <div className="container mx-auto text-center">
//                 <p className="text-sm">
//                     &copy; {new Date().getFullYear()} Forum pentru Developeri. Toate drepturile rezervate.
//                 </p>
//                 <div className="mt-2">
//                     <a
//                         href="#"
//                         className="text-blue-400 hover:underline mx-2"
//                     >
//                         Termeni și Condiții
//                     </a>
//                     <a
//                         href="#"
//                         className="text-blue-400 hover:underline mx-2"
//                     >
//                         Politica de Confidențialitate
//                     </a>
//                 </div>
//             </div>
//             <div className="mt-4">
//                 <p className="text-sm">Urmărește-ne pe:</p>
//                 <div className="flex justify-center space-x-4 mt-2">
//                     <a href="#" className="text-blue-400 hover:underline">Facebook</a>
//                     <a href="#" className="text-blue-400 hover:underline">Twitter</a>
//                     <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
//                 </div>
//             </div>
//
//         </footer>
//
//     );
// };
//
// export default Footer;
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-dark text-white py-6 w-full">
            <div className="container mx-auto text-center sm:text-left">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Forum pentru Developeri. Toate drepturile rezervate.
                    </p>
                    <div className="mt-2 sm:mt-0">
                        <a
                            href="#"
                            className="text-secondary hover:underline mx-2 block sm:inline"
                        >
                            Termeni și Condiții
                        </a>
                        <a
                            href="#"
                            className="text-secondary hover:underline mx-2 block sm:inline"
                        >
                            Politica de Confidențialitate
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
