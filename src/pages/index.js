import '../main.css';
import {title} from '../titulo';

const Page = () => {
  return <div>
          <p> {title}</p>
          <a href="/about">About</a>
        </div>
}

export default Page;