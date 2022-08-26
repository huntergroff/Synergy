//Import all components that are used directly in header navbar
import Home from '../Pages/Home';
import Classes from '../Pages/Classes';
import About from '../Pages/About';
import ComingSoon from '../Pages/ComingSoon';

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
        element: <ComingSoon />,
        submenu: [
            {
                title: "Recital",
                link: "/events#recital"
            },
            {
                title: "Intensives",
                link: "/events#intensives"
            },
            {
                title: "Pop-ups and Masterclasses",
                link: "/events#popups"
            },
            {
                title: "Summer Camps",
                link: "/events#summercamps"
            }
        ]
    },
    {
        id: "4",
        title: "Programs",
        link: "/programs",
        element: <ComingSoon />
    },
    {
        id: "5",
        title: "Resources",
        link: "/resources",
        element: <ComingSoon />,
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
                link: "/about#facilities"
            },
            {
                title: "Our Team",
                link: "/about#teachers"
            }
        ]
    },
]