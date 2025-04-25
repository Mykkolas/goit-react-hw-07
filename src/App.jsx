import './App.css'
import ContactForm from '../src/components/ContactForm/ContactForm'
import ContactList from '../src/components/ContactList/ContactList'
import SearchBox from '../src/components/SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectError } from './redux/contactsSlice'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader' // !!!
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import { Route, Routes } from 'react-router'
import ContactsPage from './pages/ContactsPage/ContactsPage'
function App() {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <div>
        <Navbar />
        <ContactForm />
        <SearchBox />
        {loading && !error && <b>Loading</b>/* <Loader /> */}
        <ContactList />
        {/*  <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div> */}
      </div>
    </>
  )
}

export default App