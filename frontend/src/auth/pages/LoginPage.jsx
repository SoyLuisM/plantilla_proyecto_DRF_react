import { AuthLayout } from "../layout/AuthLayout"
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <AuthLayout message="iniciar sesion">
        <h6 className="mt-3">No tienes una cuenta??? <Link to={"/auth/register"} className="text-primary"> Crea una </Link> </h6>
        <div className="divider row"></div>
        <div>
            <form className="">
            <div className="alert alert-danger fade show" role="alert">This is a danger alert — check it out!</div>
                <div className="alert alert-success fade show" role="alert">This is a success alert — check it out!</div>
                <div className="alert alert-warning fade show" role="alert">This is a warning alert — check it out!</div>
                <div className="form-row">
                    
                    <div className="col-md-6">
                        <div className="position-relative form-group"><label htmlFor="exampleEmail" className="">Email</label><input name="email" id="exampleEmail" placeholder="Email here.." type="email" className="form-control"/></div>
                    </div>
                    <div className="col-md-6">
                        <div className="position-relative form-group"><label htmlFor="examplePassword" className="">Contraseña</label><input name="password" id="examplePassword" placeholder="Password here.." type="password"
                                                                                                                            className="form-control" /></div>
                    </div>
                </div>

                

                <div className="divider row"></div>
                <div className="d-flex align-items-center">
                    <div className="ml-auto"> <Link to={"/auth/restorepassword"} className="btn-lg btn btn-link"> Recuperar contraseña </Link>
                        <button className="btn btn-primary btn-lg">Iniciar sesion</button>
                    </div>
                </div>
            </form>
        </div>
    </AuthLayout>
  )
}
