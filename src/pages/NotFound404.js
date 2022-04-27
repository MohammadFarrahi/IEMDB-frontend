import { Link } from "react-router-dom";


export default function NotFound404() {

  return (
    <div>
      <div className="text-center text-danger display-1 mt-5">
        صفحه مورد نظر یافت نشد
      </div>
      <div className="text-center mt-4">

        <Link className='text-decoration-none text-success h3'to='/movies'>بازگشت به صفحه فیلم‌ها</Link>
      </div>
    </div>

  )
}