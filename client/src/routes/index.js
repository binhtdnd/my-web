import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Word from '../pages/Word'
import OptionTraining from '../pages/OptionTraining'
import Training from '../pages/Training'
import { HeaderOnly } from '../component/Layout'
import ChiaDongTu from '../pages/ChiaDongTu'
import Test from '../pages/Test'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/courses/:slug', component: Courses },
    { path: '/words/:slug', component: Word, Layout: HeaderOnly },
    { path: '/option-training/:slug', component: OptionTraining },
    { path: '/training/:slug', component: Training, Layout: HeaderOnly },
    { path: '/chiadongtu/:slug', component: ChiaDongTu },
    { path: '/test', component: Test },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }