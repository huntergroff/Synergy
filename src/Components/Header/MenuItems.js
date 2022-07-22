import Home from '../Pages/Home';
import Classes from '../Pages/Classes';
import Events from '../Pages/Events';
import Programs from '../Pages/Programs';
import Resources from '../Pages/Resources';
import About from '../Pages/About';

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
                submenu: [
                    {
                        title: "Ballet",
                        link: "/classes#ballet"
                    }, 
                    {
                        title: "Lyrical/Contemporary",
                        link: "/classes#lyrical"
                    },
                    {  
                        title: "Hip Hop",
                        link: "/classes#hiphop"
                    }, 
                    {
                        title: "Explore Teen/Adult",
                        link: "/classes#explore"
                    }, 
                    {
                        title: "Focus Fitness",
                        link: "/classes#focus"
                    }
                ]
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
        element: <Programs />
    },
    {
        id: "5",
        title: "Resources",
        link: "/resources",
        element: <Resources />,
        submenu: [
            {
                title: "FAQ",
                link:"/faq"
            }
        ]
    },
    {
        id: "6",
        title: "About",
        link: "/about",
        element: <About />,
        submenu: [
            {
                title: "Contact Us",
                link: "/contact"
            },
            {
                title: "Facilities",
                link: "/about#facilities"
            }
        ]
    },
]