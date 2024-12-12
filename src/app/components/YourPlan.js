'use client'
import {useRef, useState} from "react";

const YourPlan = () => {

    const [activeAccordion, setActiveAccordion] = useState(null); // Gère l'élément actif (pour la surbrillance)
    const [openAccordions, setOpenAccordions] = useState([]); // Gère quels accordéons sont ouverts
    const [selections, setSelections] = useState({}); // Gère les sélections utilisateur

    // Si on selection Capsule, on désactive la quantity

    const accordions = [
        {
            id: "preferences",
            title: "Customize Your Preferences",
            content: ["Capsule", "Filter", "Espresso"],
        },
        {
            id: "beanType",
            title: "Choose Your Bean Type",
            content: ["Single Origin", "Decaf", "Blended"],
        },
        {
            id: "quantity",
            title: "Select Quantity",
            content: ["250g", "500g", "1000g"],
        },
        {
            id: "grindOptions",
            title: "Select Grind Options",
            content: ["Wholebean", "Filter", "Cafetière"],
            condition: (selections) => selections["preferences"] !== "Capsule", // Désactivé si "Capsule" est sélectionné
        },
        {
            id: "deliveries",
            title: "Delivery Schedule",
            content: ["Every Week", "Every 2 weeks", "Every month"],
        },
    ];


    // Références pour les éléments de la colonne de droite
    const accordionRefs = useRef({});

    // Fonction pour gérer uniquement l'ouverture et le scroll depuis la colonne de gauche
    const handleLeftColumnClick = (id) => {
        // Ouvrir l'accordéon si fermé
        if (!openAccordions.includes(id)) {
            setOpenAccordions((prevState) => [...prevState, id]);
        }

        // Scroller vers la section correspondante
        if (accordionRefs.current[id]) {
            accordionRefs.current[id].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        // Mettre à jour l'accordéon actif pour la surbrillance
        setActiveAccordion(id);
    };

    // Fonction pour gérer l'ouverture et la fermeture depuis la colonne de droite
    const handleRightColumnClick = (id) => {
        // Basculer entre ouverture et fermeture
        setOpenAccordions(
            (prevState) =>
                prevState.includes(id)
                    ? prevState.filter((key) => key !== id) // Fermer si déjà ouvert
                    : [...prevState, id] // Ouvrir si fermé
        );

        // Mettre à jour l'accordéon actif pour la surbrillance
        setActiveAccordion(id);

        // Scroller uniquement lorsque l'accordéon s'ouvre
        if (!openAccordions.includes(id) && accordionRefs.current[id]) {
            accordionRefs.current[id].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Fonction pour gérer les sélections dans un accordéon
    const handleSelection = (id, value) => {
        // Met à jour la sélection
        setSelections((prevSelections) => ({
            ...prevSelections,
            [id]: value,
        }));

        // Trouver l'accordéon suivant
        const currentIndex = accordions.findIndex(
            (accordion) => accordion.id === id
        );
        const nextAccordion = accordions[currentIndex + 1];

        // Ouvrir l'accordéon suivant s'il existe
        if (nextAccordion && !openAccordions.includes(nextAccordion.id)) {
            handleLeftColumnClick(nextAccordion.id);
        }
    };

    const coffeeSummary = selections.preferences
        ? selections.preferences === "Capsule"
            ? `I drink my coffee using ${selections.preferences}, with a ${selections.beanType || "..."} type of bean. ${selections.quantity || "..."}, sent to me ${selections.deliveries || "..."}.`
            : `I drink my coffee as ${selections.preferences}, with a ${selections.beanType || "..."} type of bean. ${selections.quantity || "..."}, ground ala ${selections.grindOptions || "..."}, sent to me ${selections.deliveries || "..."}.`
        : "I drink my coffee as ..., with a ... type of bean ..., ground ala ..., sent to me ....";



  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <div style={{display: "flex", gap: "20px"}}>
                    {/* Colonne gauche */}
                    <div style={{width: "30%"}}>
                        {accordions.map((accordion) => {
                            const isDisabled = accordion.condition
                                ? !accordion.condition(selections)
                                : false;

                            return (
                                <div
                                    key={accordion.id}
                                    onClick={() =>
                                        !isDisabled && handleLeftColumnClick(accordion.id)
                                    } // Gérer uniquement l'ouverture et le scroll
                                    style={{
                                        cursor: isDisabled ? "not-allowed" : "pointer",
                                        padding: "10px",
                                        backgroundColor:
                                            activeAccordion === accordion.id ? "#007BFF" : "#fff", // Met en surbrillance l'actif
                                        color: activeAccordion === accordion.id ? "#fff" : "#000", // Change la couleur du texte
                                        border: "1px solid #ccc",
                                        marginBottom: "5px",
                                        opacity: isDisabled ? 0.5 : 1,
                                    }}
                                >
                                    {accordion.title}
                                </div>
                            );
                        })}
                    </div>

                    {/* Colonne droite */}
                    <div
                        style={{
                            width: "70%",
                            maxHeight: "400px",
                            overflowY: "auto",
                            border: "1px solid #ddd",
                        }}
                    >
                        {accordions.map((accordion) => {
                            const isDisabled = accordion.condition
                                ? !accordion.condition(selections)
                                : false;

                            return (
                                <div
                                    key={accordion.id}
                                    ref={(el) => (accordionRefs.current[accordion.id] = el)} // Enregistre les références
                                    style={{marginBottom: "10px"}}
                                >
                                    <div
                                        onClick={() =>
                                            !isDisabled && handleRightColumnClick(accordion.id)
                                        } // Gère ouverture/fermeture
                                        style={{
                                            padding: "10px",
                                            backgroundColor:
                                                activeAccordion === accordion.id
                                                    ? "#007BFF"
                                                    : "#f8f9fa", // Met en surbrillance
                                            color: activeAccordion === accordion.id ? "#fff" : "#000",
                                            cursor: isDisabled ? "not-allowed" : "pointer",
                                            border: "1px solid #ccc",
                                        }}
                                    >
                                        {accordion.title}
                                    </div>
                                    {openAccordions.includes(accordion.id) && (
                                        <div
                                            style={{
                                                backgroundColor: "#f8f9fa",
                                                border: "1px solid #ccc",
                                                borderTop: "none",
                                            }}
                                        >
                                            {/* Contenu de l'accordéon */}
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "10px",
                                                    flexWrap: "wrap",
                                                }}
                                            >
                                                {isDisabled ? (
                                                    <></>
                                                ) : (
                                                    accordion.content.map((item, i) => (
                                                        <div
                                                            key={i}
                                                            onClick={() =>
                                                                handleSelection(accordion.id, item)
                                                            } // Gérer la sélection
                                                            style={{
                                                                cursor: "pointer",
                                                                padding: "15px",
                                                                backgroundColor:
                                                                    selections[accordion.id] === item
                                                                        ? "#007BFF"
                                                                        : "#fff",
                                                                color:
                                                                    selections[accordion.id] === item
                                                                        ? "#fff"
                                                                        : "#000",
                                                                border: "1px solid #ccc",
                                                                borderRadius: "5px",
                                                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                                                marginBottom: "10px",
                                                                textAlign: "center",
                                                            }}
                                                        >
                                                            {item}
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Logs des sélections */}
                <div
                    style={{
                        marginTop: "20px",
                        padding: "10px",
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #ccc",
                    }}
                >
                    <h3>Summary</h3>

                    <>
                        <p>
                            {coffeeSummary}
                        </p>

                    </>

                </div>
            </div>
  )
}

export default YourPlan
