import {appRoutes} from '@/routes';
import type { AppRoute } from '@/types/props';
import { Route, Routes } from 'react-router-dom';


const Routing = () => {
    return (
        <Routes>
            {
                appRoutes.map(({ title, path, element }: AppRoute, index: number) => (
                    <Route key={title + index} path={path} element={element} />
                ))
            }
        </Routes>
    )
}


export default Routing;