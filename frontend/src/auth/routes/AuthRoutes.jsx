import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, Registerpage, RestorePasswordPage } from "../"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={ <LoginPage/> }/>
        <Route path="/restorepassword" element={ <RestorePasswordPage/> }/>
        <Route path="/register" element={ <Registerpage/> }/>

        <Route path="/*" element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}
