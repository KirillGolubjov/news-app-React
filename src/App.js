import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import HeaderComponent from './Header';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import ContactSchoolComponent from './Body/ContactSchool';
import { Routes, Route } from 'react-router-dom';

// Компоненты в React это обычные JS функции, которые возвращают JSX/React элемент.

function App() {
  // JSX это новый синтакс от React который совмещает в себе JS и HTML в удобном виде.
  // JSX/React элемент имеет правило: возвращается только один элемент или компонент: Один главный и бесконечно второстепенный.
  // в JSX атрибут class переименован в className

  // react-router-dom - это библиотека, которая помогает нам работать со ссылками
  // Каждый Rout компонент отвечает за какую-либо ссылку
  // В Rout мы передаем те комроненты, которые мы хотим видеть по данной в path property, ссылке.
  // Мы можем передавать данные со ссылки компонента
  // ':' означает, что мы возьмем всё что написано после / и передадим в переменную которую назначили после ':'
  // в нашем случае http://localhost:3000/privet будет означать то, что мы показываем newsGroup & pagination компоненты и передаем им переменную q со значением 'privet'
  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NewsGroupComponent />
              <PaginationComponent />
            </>
          }
        />
        <Route
          path="/:q"
          element={
            <>
              <NewsGroupComponent />
              <PaginationComponent />
            </>
          }
        />
        <Route
          path="/lang/:lang"
          element={
            <>
              <NewsGroupComponent />
              <PaginationComponent />
            </>
          }
        />

        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/contact/school" element={<ContactSchoolComponent />} />
      </Routes>

      <ErrorModalComponent />
    </Container>
  );
}

export default App;
// npm i react-router-dom
