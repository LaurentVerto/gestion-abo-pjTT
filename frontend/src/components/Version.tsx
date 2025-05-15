import React, { useState } from "react";
import Version01 from "./VersionsText/Version01";
import Version02 from "./VersionsText/Version02";

function Version() {
    const [overlay, setOverlay] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null); // pour gérer quelle version est ouverte

    const handleVersionOverlay = () => {
        setOverlay(!overlay);
        setOpenIndex(null); // Ferme les versions à l'ouverture/fermeture
    };

    return (
        <>
            <p className="absolute text-[7px] top-2 left-2 z-50 mix-blend-difference">
                By <br /> LFPC-DEV
            </p>

            {overlay && (
                <div
                    onClick={handleVersionOverlay}
                    className="overlay  w-full h-full bg-black/70 absolute z-49"
                >
                    <div className="w-[70%] h-auto absolute centerP rounded-lg bg-[#282830] drop-figma p-3">
                        <ul className="flex flex-col gap-3">
                            <Version02
                                isOpen={openIndex === 0}
                                onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
                            />
                            <Version01
                                isOpen={openIndex === 1}
                                onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
                            />
                        </ul>

                        <p className="text-xs m-4 text-center mt-10">
                            ⚠️ Le navigateur ne doit pas être en privé pour la sauvegarde de vos contrats
                        </p>
                        <p className="mt-5 text-center text-xs text-white/20 cursor-pointer">
                            Tap pour fermer
                        </p>
                    </div>
                </div>
            )}

            <p
                onClick={handleVersionOverlay}
                className="absolute border cursor-pointer rounded-full right-2 top-2 w-6 h-6 flex justify-center items-center text-base drop-figma z-50 mix-blend-difference"
            >
                ?
            </p>
        </>
    );
}

export default Version;
