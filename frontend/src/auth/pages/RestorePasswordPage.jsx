import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RestorePasswordPage = () => {
  return (
    <AuthLayout message="recuperar la contraseña">
      <div>
          <form className="">
              <div className="form-row">
                  <div className="col-md-12">
                      <div className="position-relative form-group"><label htmlFor="exampleEmail" className="">Email</label><input name="email" id="exampleEmail" placeholder="Email here..." type="email" className="form-control"/></div>
                  </div>
              </div>
              <div className="mt-4 d-flex align-items-center"><h6 className="mb-0"> <Link to={"/auth/login"} className="text-primary"> Ingresa con una cuenta existente </Link> </h6>
                  <div className="ml-auto">
                      <button className="btn btn-primary btn-lg">Recuperar contraseña</button>
                  </div>
              </div>
          </form>
        </div>
    </AuthLayout>
  )
}
