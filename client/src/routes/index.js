import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Word from '../pages/Word'
import OptionTraining from '../pages/OptionTraining'
import Training from '../pages/Training'
import { HeaderOnly } from '../component/Layout'
import ChiaDongTu from '../pages/ChiaDongTu'

import Login from '../pages/Login'



const publicRoutes = [
    { path: '/', component: Home },
    { path: '/courses/:slug', component: Courses },
    { path: '/words/:slug', component: Word, layout: HeaderOnly },
    { path: '/option-training/:slug', component: OptionTraining, needLogin: true },
    { path: '/training/:slug', component: Training, layout: HeaderOnly },
    { path: '/chiadongtu/:slug', component: ChiaDongTu, needLogin: true },

    { path: '/login', component: Login, layout: HeaderOnly },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }