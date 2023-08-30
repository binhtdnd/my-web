import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Word from '../pages/Word'
import NoRemember from '../pages/NoRemember'
import OptionTraining from '../pages/OptionTraining'
import Training from '../pages/Training'
import { HeaderOnly } from '../component/Layout'
import ChiaDongTu from '../pages/ChiaDongTu'




const publicRoutes = [
    { path: '/', component: Home },
    { path: '/courses/:slug', component: Courses },
    { path: '/words/:slug', component: Word, layout: HeaderOnly },
    { path: '/noremember/:slug', component: NoRemember, layout: HeaderOnly },
    { path: '/option-training/:slug', component: OptionTraining },
    { path: '/training/:slug', component: Training, layout: HeaderOnly },
    { path: '/chiadongtu/:slug', component: ChiaDongTu },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }