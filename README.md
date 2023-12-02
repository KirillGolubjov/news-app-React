# Crypto News App Documentation

In this application, you will be able to find information about cryptocurrency from the most popular global media outlets.

To obtain the necessary information, I use the website: https://newsapi.org/, which allows making up to 100 requests for free daily. To access the data, registration on the website and obtaining an API key are required.

For the application's layout, I use ready-made components from React-Bootstrap (^2.6.0). It is a free set of tools for creating websites and web applications.

To manage the application's state, I utilized the Redux library (^4.2.0). It contains a set of tools that significantly simplify data transfer through the context.

The application's router is the react-router module, which includes the main functionality for handling routing. For browser interaction, I use the react-router-dom module (^6.4.3), wrapping components in App.js.

## Next, I would like to describe the application's contents in more detail. First, I formed a framework where the main file is App.js, including all subsequent components and files such as:

Header: HeaderComponent
Body: BodyComponent, NewsModalComponent, NewsCardComponent, ContactComponent, ContactSchoolComponent, /Form: FormComponent
Footer: PaginationComponent
ErrorModalComponent
News.scss
In addition to files forming the visual component, the application contains other files:

apiServices: this file contains asynchronous functions getEverything and getSources, which use the fetch method to retrieve the latest updates from the server.
stateService: this file imports reduxjs/toolkit (^1.9.0), where data is placed (using the object initialState as the default value) and Action-creator functions used in the reducer variable. By forming a reducer, where initialState and Action are placed, using the createReducer function wrapped in configureStore, it was then imported into the root component of the application as the store variable. I also wrapped the root component of our application with the react-redux Provider component.
.env: this file allows us to hide the API key.
The "Header" of the application (HeaderComponent) includes the logo link and a link to contacts.

The body of the application contains the main information of the application. After receiving data in BodyComponent using apiServices, it passes the data to NewsCardComponent, where they are subsequently rendered as 12 "cards" with content. Inside the component is the useEffect hook, imported from React, like other hooks (e.g., useState). This hook allows us to invoke a series of side effects after the component is rendered. In this case, as the second parameter, we have an array with dependencies, and only after their change, useEffect will be executed again.

The "Search" button opens FormComponent – this window allows filtering user queries. The file contains a large number of parameters, such as: search Input, the possibility of sorting by Title, Description, Content, dates from and to, language, as well as choosing a specific news source by name (this query goes directly using apiServices). Inside the component is an object data containing the necessary data when forming a request.

NewsModalComponent – this component allows us to open a modal window containing props passed from BodyComponent. These are the hooks const [show, setShow] = useState(false) and article.

ErrorModalComponent – the second modal window that appears in case of an error.

PaginationComponent() – this component is responsible for the sequence of page numbering and their display.

useDispatch and useSelector – this set of hooks from react-redux allows access to a higher-order existing component. We use this set in ErrorModalComponent, PaginationComponent, and FormComponent. useDispatch – this hook allows us to interact with Redux. useSelector – this hook monitors the state of Redux and, in the presence of changes, triggers the component's rendering.


# Crypto News App Documentation

В данном приложении вы сможете найти информацию о криптовалюте из наиболее популярных мировых СМИ.

Для получения необходимой информации, я использую вебсайт: [https://newsapi.org/](https://newsapi.org/), который позволяет осуществлять бесплатно до 100 запросов ежедневно. Чтобы получать данные, требуется регистрация на сайте и получение API ключа.

Для верстки приложения используеются готовые компоненты из `React-Bootstrap(^2.6.0)`. Это свободный набор инструментов для создания сайтов и веб-приложений.

Для управления состоянием приложения, я воспользовался библиотекой `Redux(^4.2.0)`. Она содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.

Маршрутизатором приложения является модуль `react-router`, который содержит основной функционал по работе с маршрутизацией. Для работы с браузером я использую модуль `react-router-dom(^6.4.3)` обернув компоненты в `App.js`

## Далее я хотел бы описать содержимое приложения более подробно.

Первым делом был сформирован каркас, где гланым файлом является `App.js`, включающий в себя все последущие компоненты и файлы, такие как:
Header: `HeaderComponent`
Body: `BodyComponent`, `NewsModalComponent`, `NewsCardComponent`, `ContactComponent`, `ContactSchoolComponent`, /Form: `FormComponent`
Footer: `PaginationComponent`
`ErrorModalComponent`
`News.scss`

Помимо файлов формирующих визуальную составляющую, приложение содержит и другие файлы:

`apiServices` - в данном файле содержатся асинхронные функции `getEverything` и `getSources`, которые методом `fetch` передают последние обновления с сервера.

`stateService` - это файл в который импортирован `reduxjs/toolkit(^1.9.0)`, в котором поместились данные(в качестве значения по умолчанию используется объект initialState) и функции Action-creator, которые используются в переменной reducer. Сформировав reducer, куда помещаются initialState и Action, с помощью функции createReducer обернутую в configureStore он был импортирован далее в корневой компонент в качестве переменной store. Так же я обернул корневой компонент нашего приложения компонентом `react-redux Provider`.

`.env` - этот файл позволяет нам скрыть `ApiKey`.

"Шапка" приложения `HeaderComponent` включает в себя лого-линк и ссылку на контакты.

Тело приложения содержит основную информацию приложения. Получив данные в `BodyComponent` с помощью `apiServices`, он передает данные в `NewsCardComponent` которые в последствии там рендерятся в виде 12-ти "карточек" с содержимым.
Внутри компонента находится хук `useEffect`, который импортируется из React как и другие хуки (например `useState`). Этот хук позволяет нам вызвать ряд побочных эффектов, после того как компонент отрендерится. В данном случае, в качестве второго параметра у нас массив с зависимостями, только после их изменения, `useEffect` будет выполнятся повторно.

Кнопка `Search` открывает `FormComponent`, это окно, позволяющее отфильтровать запрос пользователя. Файл содержит большое количество параметров, такие как: поисковый `Input`, возможность сортировки по `Title, Description, Content`, даты с и до, язык, а так же выбор конкретного источника новостей по имени(данный запрос идет напрямую при помощи `apiServices`). Внутри компонента находится объект
`data`, содержащий в себе необходимые нам данные при формировании запроса.

`NewsModalComponent` - этот компонент, возволяет нам открыть модальное окно, которое содежит в себе пропсы переданные из `BodyComponent`. Это хуки `const [show, setShow] = useState(false)` и `article`.

`ErrorModalComponent` - второе модальное окно, появляющееся при возникновении ошибки.

`PaginationComponent()` - этот компонент отвечает за последовательность нумерации страниц и их отображение.

`useDispatch` и `useSelector` - этот набор хуков от `react-redux` позволяет получить доступ к существующему компоненту более высокого порядка. Мы используем данный набор в `ErrorModalComponent`,`PaginationComponent` и `FormComponent`. `useDispatch` - это хук благодаря которому мы можем взаимодействовать с redux. `useSelector` - это хук который следит за `redux` состоянием и при наличии изменений запускает отрисовку компонента.
