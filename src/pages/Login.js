import './Login.css';
import logo from '../images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { login } from '../functions/login';
import Request from '../functions/Request';

export default function Login() {

  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const from = location.state?.from || '/movies';
    try {
      const data = { email, password };
      const response = await Request.post('/auth/login/', data, {});

      if (response.data.status) {
        login(response.data.jwt, response.data.userId);
        navigate(from, { replace: true });
      }

    } catch (e) {
      setError('ایمیل یا رمز عبور صحیح نیست')
    }



  }

  return (
    <>
      <div className="floating-card">

        <div className="card-body p-md-5 mx-md-4">

          <div className="icon-picture">
            <img src={logo} />
          </div>

          <div className="text-center">
            <h2 className="mt-1 mb-5 pb-1">فرم ورود</h2>
          </div>

          <form onSubmit={handleLogin}>
            <p>لطفا اطلاعات خود را وارد کنید</p>

            <div className="form-outline mb-4">
              <input
                required
                type="email"
                id="form2Example11"
                className="form-control"
                onChange={e => { setEmail(e.target.value) }}
              />
              <label className="form-label" for="form2Example11">نام کاربری</label>
            </div>

            <div className="form-outline mb-4">
              <input
                required
                type="password"
                id="form2Example22"
                className="form-control"
                onChange={e => { setPassword(e.target.value) }}
              />
              <label className="form-label" for="form2Example22">رمز عبور</label>
            </div>
            {error &&
              <div className="text-center pt-1 mb-5 pb-1">
                <span className='text-danger'>{error}</span>
              </div>
            }
            <div className="text-center pt-1 mb-5 pb-1">
              <button className="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3" type="submit">ورود</button>
            </div>

            <div className="d-flex align-items-center justify-content-center pb-4">
              <div className="mx-3">
                <Link to='/signup'>
                  <button type="button" className="btn btn-outline-danger">ثبت نام</button>
                </Link>
              </div>
              <p className="mb-0 me-2">حساب ندارید؟</p>
            </div>

            <div className="d-flex align-items-center justify-content-center pb-4">
              <div className="mx-3">
                <a
                  href  ='https://github.com/login/oauth/authorize?client_id=922ec040dfe40c36e914&scope=user'
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Icon
                    icon="bi:github"
                    className="star-icon "
                    style={{ fontSize: '4rem' }}
                  />
                </a>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}