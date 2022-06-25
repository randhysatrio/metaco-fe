import footer from '../../assets/images/banner/Footer/footer.png';

export default function FooterBanner() {
  return (
    <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden relative cursor-pointer">
      <img src={footer} alt="footer_bg" className="h-full object-cover scale-105" />
      <div className="flex flex-col absolute">
        <span className="text-lg md:text-4xl text-white font-semibold w-[450px] text-center tracking-wide">
          Find Latest Esport Event on Metaco
        </span>
      </div>
    </div>
  );
}
