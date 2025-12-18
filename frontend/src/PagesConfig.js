import { Home, AccountCircle } from '@mui/icons-material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsIcon from '@mui/icons-material/Sports';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import ResultsPage from './components/ResultsPage';
import ResumePage from './components/ResumePage';
import WelcomePage from './components/WelcomePage';
import VenuesPage from './components/VenuesPage';
import CalendarPage from './components/CalendarPage';
import SquadPage from './components/SquadPage';
import IoTPage from "./components/IoTPage";

export const appPages = [
    {
        name: "Welcome",
        path: "/",
        component: <WelcomePage/>,
        icon: () => <Home />,
    },
    {
        name: "Results",
        path: "/results",
        component: <ResultsPage/>,
        icon: () => <SportsIcon />,
    },
    {
        name:"Venues",
        path: "/venues",
        component: <VenuesPage/>,
        icon: () => <SportsSoccerIcon />,
    },
    {
        name:"Calendar",
        path: "/calendar",
        component: <CalendarPage/>,
        icon: () => <CalendarTodayIcon />,
    },
    {
        name:"Squads",
        path: "/Squads",
        component: <SquadPage/>,
        icon: () => <GroupsIcon />,
    },
    {
        name: "About Or Zohar",
        path: "/resume",
        component: <ResumePage/>,
        icon: () => <AccountCircle />,
    },
    {
        name: "IoT Project",
        path: "/iot_project",
        component: <IoTPage/>,
        icon: () => <AccountCircle />,
    },
];