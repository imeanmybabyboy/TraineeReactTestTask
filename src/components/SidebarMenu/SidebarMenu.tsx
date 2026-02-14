import { useEffect, useState } from "react";
import "./ui/SidebarMenu.css";
import PropTypes from "prop-types";

export default function SidebarMenu({ isOpen }: { isOpen: boolean }) {
    const navLinks = [
        { title: "Main menu", links: ["Home", "Products", "News"] },
        {
            title: "Feedback",
            links: ["Products feedback", "Employees opinions"],
        },
        {
            title: "Contacts",
            links: ["Employees contacts", "Employers contacts"],
        },
        { title: "About us", links: ["About company", "Our story"] },
    ];

    const [path, setPath] = useState(navLinks[0].links[0]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (!isSidebarOpen) {
            setOpenIndex(null)
        }
    
        const handleClickOutside = (e: MouseEvent) => {
            const sidebar = document.getElementById("sidebar");
            const target = e.target as HTMLElement;
            if (e.target === null) return;

            if (isSidebarOpen && sidebar && !target.closest("#sidebar")) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        setIsSidebarOpen(isOpen);
    }, [isOpen]);

    const toggleAccordion = (index: any) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <main id="sidebarParent">
            <span
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <span>Chosen path: {path}</span>
                <button
                    style={{ width: "fit-content" }}
                    onClick={(e) => {
                        if (!isSidebarOpen) {
                            setIsSidebarOpen(true);
                            e.stopPropagation();
                        }
                    }}
                >
                    Open sidebar
                </button>
            </span>

            <div id="sidebar" className={`${isSidebarOpen ? "open" : "close"}`}>
                <h3>Navigation</h3>
                <ul>
                    {navLinks.map((nav, index) => (
                        <li key={index} style={{ marginTop: "10px" }}>
                            <span
                                className="nav-title"
                                onClick={() => toggleAccordion(index)}
                            >
                                {nav.title}
                            </span>

                            {openIndex === index && (
                                <ul className="sub-links">
                                    {nav.links.map((link, i) => (
                                        <li
                                            key={i}
                                            onClick={() => setPath(link)}
                                        >
                                            - {link}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

SidebarMenu.propTypes = {
    isOpen: PropTypes.bool,
};
