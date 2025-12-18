import { homeRoutes } from '@/routes';
import type { AppRoute } from '@/types/props';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from '@/layouts/mobile/layout';


const Routing = () => {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                {
                    homeRoutes.map(({ title, path, element }: AppRoute, index: number) => (
                        <Route key={title + index} path={path} element={element} />
                    ))
                }
            </Route>
        </Routes>
    )
}


export default Routing;