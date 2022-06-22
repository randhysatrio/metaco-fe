import Layout from '../components/UI/Layout';
import Banner from '../components/Home/Banner';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-metaco_bg pt-[75px] flex flex-col">
        <Banner />
      </div>
    </Layout>
  );
}
