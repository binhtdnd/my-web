import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Word from '../pages/Word'
import OptionTraining from '../pages/OptionTraining'
import Training from '../pages/Training'
import { HeaderOnly } from '../component/Layout'
import ChiaDongTu from '../pages/ChiaDongTu'
import Login from '../pages/Login'
import Login3 from '../pages/Login3'
import Dashboard from '../component/Dashboard'
import Preferences from '../component/Preferences/Preferences.js'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/courses/:slug', component: Courses },
    { path: '/words/:slug', component: Word, layout: HeaderOnly },
    { path: '/option-training/:slug', component: OptionTraining },
    { path: '/training/:slug', component: Training, layout: HeaderOnly },
    { path: '/chiadongtu/:slug', component: ChiaDongTu },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/login3', component: Login3, layout: HeaderOnly },
    { path: '/dashboard', component: Dashboard },
    { path: '/preferences', component: Preferences },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }