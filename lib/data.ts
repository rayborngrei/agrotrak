export type Category={id:string; name:string; description:string; icon:string};
export type Product={slug:string; name:string; category:string; brand:string; description:string; legacy?:string};
export const categories:Category[]=[
{id:'traktory',name:'Тракторы',description:'Для полевых и хозяйственных работ',icon:'◉'},
{id:'pochva',name:'Обработка почвы',description:'Культиваторы и почвообрабатывающие орудия',icon:'≋'},
{id:'posev',name:'Посев и уборка',description:'Сеялки и жатки для работы в поле',icon:'✳'},
{id:'korma',name:'Заготовка кормов',description:'Техника для кормозаготовки и раздачи',icon:'⌁'},
{id:'pogruzka',name:'Погрузка',description:'Погрузчики и навесное оборудование',icon:'↗'},
{id:'transport',name:'Перевозка урожая',description:'Прицепы и тракторные полуприцепы',icon:'▱'},
{id:'opryskivateli',name:'Внесение удобрений',description:'Опрыскиватели и оборудование',icon:'✣'}];
export const products:Product[]=[
{slug:'belarus-821',name:'Беларус 82.1 с малой кабиной',category:'traktory',brand:'БЕЛАРУС',description:'Трактор для сельскохозяйственных и хозяйственных работ.',legacy:'/tehnika/traktory/belarus-821-s-maloy-kabinoy.html'},
{slug:'lovol-te404',name:'LOVOL TE404GIII',category:'traktory',brand:'LOVOL',description:'Трактор для сельскохозяйственных задач.',legacy:'https://kazan.agrotrac.ru/tehnika/traktory/traktory-lovol/traktor-lovol-te404giii.html'},
{slug:'seyalka-zs-6',name:'Сеялка ЗС-6',category:'posev',brand:'Уточните у менеджера',description:'Сеялка для полевых работ.',legacy:'/tehnika/tehnika-dlya-poseva-i-uborki-urozhaya/seyalka-zs-6.html'},
{slug:'pst-12',name:'Полуприцеп тракторный ПСТ-12',category:'transport',brand:'Уточните у менеджера',description:'Тракторный полуприцеп для транспортных задач.',legacy:'/tehnika/tehnika-dlya-hraneniya-transportirovki-i-pererabotki-urozhaya/polupritsepy/polupritsep-traktornyy-pst-12.html'},
{slug:'pnb-1200',name:'Погрузчик ПНБ-1200 «Геракл»',category:'pogruzka',brand:'Уточните у менеджера',description:'Навесной погрузчик. Совместимость и комплектацию уточняйте при обращении.',legacy:'/tehnika/tehnika-dlya-zagotovki-i-razdachi-kormov/pnb-1200-gerakl-na-mtz-12212-mtz-12213.html'},
{slug:'sun-plant',name:'Жатка для подсолнечника SUN PLANT',category:'posev',brand:'SUN PLANT',description:'Жатка для уборки подсолнечника.',legacy:'/tehnika/tehnika-dlya-poseva-i-uborki-urozhaya/zhatka-dlya-uborki-podsolnechnika-sun-plant-pzn.html'},
{slug:'kbm-6-4p',name:'Культиватор КБМ-6-4П',category:'pochva',brand:'Уточните у менеджера',description:'Культиватор для обработки почвы. Характеристики требуют подтверждения.'},
{slug:'ags-3000',name:'Опрыскиватель AGS 3000 EN HP',category:'opryskivateli',brand:'Техника Сервис',description:'Прицепной опрыскиватель для сельского хозяйства.'},
{slug:'pchn-40k',name:'Плуг чизельный ПЧН-4,0К',category:'pochva',brand:'Светлоградагромаш',description:'Почвообрабатывающее орудие для рыхления.'},
{slug:'lovol-te244',name:'LOVOL TE244',category:'traktory',brand:'LOVOL',description:'Компактный трактор для хозяйственных работ.'}];
export const getProducts=()=>products; export const getProduct=(slug:string)=>products.find(p=>p.slug===slug); export const getCategory=(id:string)=>categories.find(c=>c.id===id);
export const contacts={phone:'8 800 301-44-59',tel:'+78003014459',email:'info@agrotrac.ru',address:'Набережные Челны, Автодорога №1, Мензелинский тракт, 9'};
