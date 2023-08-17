import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react"
import {createPortal} from "react-dom"

/**
 * Composant Modal.
 * Ce composant représente une modale qui peut être ouverte et fermée à l'aide des fonctions "open" et "close".
 * @param {object} props - Les props du composant.
 * @param {string} props.title - Le titre de la modale.
 * @param {React.ReactNode} props.body - Le contenu de la modale.
 * @param {React.ReactNode} props.footer - Le contenu du pied de page de la modale (optionnel).
 * @returns {JSX.Element} Le composant Modal.
 */

type ModalProps = {
    title: string;
    body: React.ReactNode;
    footer?: React.ReactNode;
};


const Modal = forwardRef(({title, body, footer}: ModalProps, ref) => {
    // Utilisation de "useState" pour gérer l'affichage de la modale
    const [display, setDisplay] = useState(false)

    // Fonction pour fermer la modale
    function close() {
        setDisplay(false)
    }

    // Fonction pour ouvrir la modale
    function open() {
        setDisplay(true)
    }

    // Utilisation de "useImperativeHandle" pour exposer une API impérative à partir d'un composant fonctionnel
    useImperativeHandle(ref, () => ({open, close}))

    // Utilisation de "useEffect" pour gérer le défilement du body
    useEffect(() => {
        if (display) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        // Nettoie l'effet lors de la fermeture de la modale
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [display])

    return createPortal(
        <div
            style={{
                position: 'fixed',
                inset: 0,
                display: display ? "flex" : "none",
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)'
            }}
            onClick={() => close()}
        >
            <div
                style={{
                    width: '450px',
                    minHeight: '150px',
                    padding: '0.5rem',
                    backgroundColor: '#fff',
                    borderRadius: '0.375rem',
                    boxShadow: 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h3 style={{ marginLeft: 'auto', marginRight: 'auto', paddingBottom: '.5rem', fontSize: '1.5rem'}}>
                    {title}
                </h3>
                <div style={{ display:'flex', flexWrap:'wrap', flexGrow:'1', justifyItems:'center', lineHeight: '1.25rem', marginBottom: '0.25rem' }} >
                    {body}
                </div>
                <div style={{ backgroundColor: 'rgb(245 245 244)', padding :'.5rem', margin:'.5rem -0.5rem -0.5rem -0.5rem' }}>
                    {footer}
                    <button
                        style ={{ display: 'flex', justifyContent:'center', margin:'auto', padding:'.5rem', backgroundColor:'rgb(34 197 94)', borderRadius: '.25rem' }}
                        onClick={() => close()}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    )
})

export default Modal
