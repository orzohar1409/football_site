import { Home, AccountCircle } from '@mui/icons-material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsIcon from '@mui/icons-material/Sports';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import ResultsPage from './components/ResultsPage';
import ResumePage from './components/ResumePage';
import WelcomePage from './components/WelcomePage';
import VenuesPage from './components/VenuesPage';
import CalendarPage from './components/CalendarPage';
export const appPages = [
    {
        name: "Welcome",
        path: "/",
        component: <WelcomePage/>,
        icon: () => <Home />,
    },
    {
        name:"Venues",
        path: "/venues",
        component: <VenuesPage/>,
        icon: () => <SportsSoccerIcon />,
    },
    {
        name: "Results",
        path: "/results",
        component: <ResultsPage/>,
        icon: () => <SportsIcon />,
    },
    {
        name:"Calendar",
        path: "/calendar",
        component: <CalendarPage/>,
        icon: () => <CalendarTodayIcon />,
    },
    {
        name: "About me",
        path: "/resume",
        component: <ResumePage/>,
        icon: () => <AccountCircle />,
    }
];