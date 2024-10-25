import CardWithImage from "./components/AnimatedCardWithImage/page";
import CardWithoutImage from "./components/AnimatedCardWithoutImage/paage";
import CustomCard from "./components/CustomCard/page";
import SocialSection from "./components/SocialSection/page";
import UserCard from "./components/UserCard/page";
import SocialCard from "./components/SocialCard/page";
import ProfileCard from "./components/ProfileCard/page";
import BlurredImageCard from "./components/BlurredImageCard/page";
export default function Home() {
  return (
    <div className="cards-page">
      <div className="container">
        {/* Título Principal */}
        <div className="containerTitle text-center my-5">
          <h1 className="main-title text-4xl font-bold text-gray-800 mb-2">
            Cards Collection
          </h1>
          <p className="subtitle text-lg text-gray-600">
            Explora diferentes diseños de cards.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="cards-container">
          <CardWithoutImage />
          <SocialCard />
          <ProfileCard />
          <UserCard />
          <CustomCard />
          <CardWithImage />

          <BlurredImageCard />

          {/* Puedes agregar más cards personalizadas aquí */}
        </div>

        {/* Sección de redes sociales */}
        <SocialSection />
      </div>
    </div>
  );
}
