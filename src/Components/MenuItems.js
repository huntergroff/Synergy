import Home from './Home';
import Classes from './Classes';
import Events from './Events';
import Programs from './Programs';
import Resources from './Resources';
import About from './About';

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
        element: <Classes />
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