//Import all components that are used directly in header navbar
import React from 'react';
import Home from '../Pages/Home';
import Classes from '../Pages/Classes';
import About from '../Pages/About';
import ComingSoon from '../Pages/ComingSoon';
import Policies from '../Pages/Policies';
import Events from '../Pages/Events'
import SPARC from '../Pages/SPARC';

//Import ClassDescriptionItems to autogenerate dropdown of classes under class descriptions
import { ClassDescriptionItems } from '../ClassDescriptionItems';

export const MenuItems = [
    {
        id: "1",
        title: "Home",
        link: "/",
        element: <Home />
    },
    {
        id: "2",
        title: "Classes",
        link: "/classes",
        element: <Classes />,
        submenu: [
            {
                title: "Classes Overview",
                link: "/classes"
            },
            {
                title: "Schedules and Sessions",
                link: "/classes#schedules"
            }, 
            {
                title: "Registration",
                link: "/classes#registration",
            },
            {
                title: "Class Descriptions",
                link: "/classes#descriptions",
                // Submenu of classes is automatically generated by ClassDescriptionItems.js.
                // When you add a new category (with a submenu of classes) to this file, a new 
                // menu item for the new category will automatically appear on the navbar menu!
                submenu: ClassDescriptionItems.map(descriptionItem => {
                    return (
                        {
                            title: descriptionItem.categoryTitle,
                            link: "/classes#" + descriptionItem.categoryUrlTag
                        }
                    )})
            },
            {
                title: "View All Classes",
                link: "/classtables"
            }
        ]
    },
    {
        id: "3",
        title: "Events",
        link: "/events",
        element: <Events />,
        submenu: [
            {
                title: "Recital",
                link: "/recital"
            },
            {
                title: "Other Events",
                link: "/events"
            }
        ]
    },
    {
        id: "4",
        title: "Programs",
        link: "/programs",
        element: <SPARC />,
        submenu: [
            {
                title: "SPARC",
                link: "/sparc"
            },
            {
                title: "STEP",
                link: "/step"
            },
            {
                title: "Student Ambassadors",
                link: "/student-ambassadors"
            },
            {
                title: "After School Programming",
                link: "/after-school"
            },
            /*
            {
                title: "Summer Camps",
                link: "/summer-camps"
            },
            */
        ]
    },
    {
        id: "5",
        title: "Resources",
        link: "/resources",
        element: <Policies />,
        submenu: [
            {
                title: "FAQ",
                link:"/faq"
            },
            {
                title: "Policies & Procedures",
                link: "/policies"
            },
            {
                title: "Contact Us",
                link: "/contact"
            },
            {
                title: "Parent Portal",
                external: true,
                link: "https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=538745"
            },
        ]
    },
    {
        id: "6",
        title: "About",
        link: "/about",
        element: <About />,
        submenu: [
            {
                title: "About Us",
                link: "/about"
            },
            {
                title: "Facilities",
                link: "/facilities"
            },
            {
                title: "Our Team",
                link: "/our-team"
            }
        ]
    },
]