const PREZENT_BUTTON = [
    {
        name: 'Скроллер',
        help: 'Димонстрация компанента скролленга',
        key: 'skroll'
    },
    {
        name: 'Динамическая панель',
        help: 'Димонстрация компанента динамическая панель',
        key: 'dinamic'
    },
    {
        name: 'Форма',
        help: 'Димонстрация компанента динамическая форма авторизации',
        key: 'form'
    },
    {
        name: 'Изменить стиль резюме',
        help: 'Димонстрация компанента динамического изменения стилей',
        key: 'style'
    }
];

const PREZENT_ACTIV = {
    'skroll':[
            {
                id: 1,
                titel: 'titel',
                text: 'Базовый текст внутри окна',   
            }
        ],
    'dinamic':[
            {
                id: 1,
                titel: 'img',
                text: 'Базовое изображение внутри окна',   
            }
        ],
    
    'form':[
            {
                id: 1,
                titel:'name',
                text: 'Введите имя',
            },
            {
                id: 2,
                titel:'soname',
                text: 'Введите фамилию',
                value: '' 
            },
            {
                id: 3,
                titel:'login',
                text: 'Введите логин',
            },
            {
                id: 4,
                titel:'pasvord',
                text: 'Введите пароль',
            }
        ],
    'style':[
            {
                id: 1,
                titel: 'color',
                text: 'Изменить цвет окна'
            },
            {
                id: 2,
                titel: 'text',
                text: 'Изменить стиль текста'
            },
            {
                id: 2,
                titel: 'text',
                text: 'Изменить стиль текста'
            }
        ]  
}



export { PREZENT_BUTTON, PREZENT_ACTIV }