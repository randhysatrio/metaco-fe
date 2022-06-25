import Layout from '../components/UI/Layout';
import { ReactComponent as FourOFour } from '../assets/images/icons/404.svg';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-metaco_bg">
        <FourOFour />
        <div className="flex flex-col items-center gap-3">
          <span className="text-white font-bold text-lg">Page not found!</span>
          <span className="text-white text-sm md:text-base">Sorry we couldn't find the page you're looking for</span>
        </div>
      </div>
    </Layout>
  );
}
