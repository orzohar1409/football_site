import { Home, AccountCircle } from '@mui/icons-material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsIcon from '@mui/icons-material/Sports';

import ResultsPage from './components/ResultsPage';
import ResumePage from './components/ResumePage';
import WelcomePage from './components/WelcomePage';

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
        name: "About me",
        path: "/resume",
        component: <ResumePage/>,
        icon: () => <AccountCircle />,
    }
];