import Layout from '../components/UI/Layout';
import Banner from '../components/Home/Banner';
import FooterBanner from '../components/UI/FooterBanner';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg pt-[75px] flex flex-col">
        <Banner />
        <div className="w-full h-96 flex items-center justify-center">
          <span className="lg:text-2xl text-white font-semibold">This section is currently under development :)</span>
        </div>
      </div>
      <FooterBanner />
    </Layout>
  );
}
