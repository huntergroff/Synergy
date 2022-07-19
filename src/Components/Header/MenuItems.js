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
                title: "Classes At Synergy",
                link: "/"
            },
            {
                title: "Schedules and Sessions",
                link: "/"
            }, 
            {
                title: "Registration",
                link: "/",
            },
            {
                title: "Class Descriptions",
                link: "/",
                submenu: [
                    {
                        title: "Ballet",
                        link: "/"
                    }, 
                    {
                        title: "Lyrical/Contemporary",
                        link: "/"
                    },
                    {  
                        title: "Hip Hop",
                        link: "/"
                    }, 
                    {
                        title: "Explore Teen/Adult",
                        link: "/"
                    }, 
                    {
                        title: "Focus Fitness",
                        link: "/#home-message"
                    }
                ]
            }
        ]
    },
    {
        id: "3",
        title: "Events",
        link: "/events",
        element: <Events />
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
        element: <Resources />
    },
    {
        id: "6",
        title: "About",
        link: "/about",
        element: <About />
    },
]