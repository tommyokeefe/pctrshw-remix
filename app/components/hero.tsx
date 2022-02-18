type HeroProps = {
  heroImage: string;
};

export default function Hero({ heroImage }: HeroProps) {
  return (
    <div className='hero'>
      <img src={heroImage} alt='Pictureshow Title Image' />
    </div>
  );
}
