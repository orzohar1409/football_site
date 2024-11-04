import { Home, AccountCircle } from '@mui/icons-material';
import YourTeamGames from './components/YourTeamGames';

export const appPages = [
    {
        name: "Games",
        path: "/",
        component: <YourTeamGames/>,
        icon: () => <Home />,
    },
    {
        name: "About me",
        path: "/resume",
        icon: () => <AccountCircle />,
    }
];
