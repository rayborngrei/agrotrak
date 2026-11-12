import type {Metadata} from 'next';import './style.css';import {Header,Footer} from '@/components/UI';
export const metadata:Metadata={title:{default:'АгроТрак — сельскохозяйственная техника',template:'%s | АгроТрак'},description:'Тракторы, посевная и почвообрабатывающая техника, оборудование для хозяйства.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Header/><main>{children}</main><Footer/></body></html>}
