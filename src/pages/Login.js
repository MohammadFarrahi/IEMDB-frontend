import './Login.css';
import logo from '../images/logo.png'

export default function Login() {
  return (
    <>
    <div className="floating-card">
      
      <div className="card-body p-md-5 mx-md-4">

        <div className="icon-picture">
          <img src={logo}/>  
        </div>

        <div className="text-center">
          <h2 className="mt-1 mb-5 pb-1">فرم ورود</h2>
        </div>

        <form>
          <p>لطفا اطلاعات خود را وارد کنید</p>

          <div className="form-outline mb-4">
            <input type="email" id="form2Example11" className="form-control" />
            <label className="form-label" for="form2Example11">نام کاربری</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form2Example22" className="form-control" />
            <label className="form-label" for="form2Example22">رمز عبور</label>
          </div>

          <div className="d-flex align-items-center justify-content-center pb-4">
            <div className="mx-3">
              <button type="button" className="btn btn-outline-danger">ثبت نام</button>
            </div>
            <p className="mb-0 me-2">حساب ندارید؟</p>
          </div>

        </form>

      </div>
    </div>
    </>
  )
}