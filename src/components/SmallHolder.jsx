import SmallCard from "./SmallCard";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";
import down from "../assets/images/icon-down.svg";
import up from "../assets/images/icon-up.svg";

const SmallHolder = () => {
  const greenText = "text-green";
  const redText = "text-red";
  return (
    <div className="w-full mt-8">
      <div className="dark:text-[var(--White-Text)] text-[var(--Dark-Text)]">
        <h2 className="text-2xl font-semibold">Overview - Today</h2>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 mt-4 place-items-center w-full">
        <SmallCard
          imgUrl={facebook}
          name="Page Views"
          iconUrl={up}
          followers={87}
          today={3}
          textStyle={greenText}
        />
        <SmallCard
          imgUrl={facebook}
          name="Likes"
          iconUrl={down}
          followers={52}
          today={2}
          textStyle={redText}
        />
        <SmallCard
          imgUrl={instagram}
          name="Likes"
          iconUrl={up}
          followers={5462}
          today={2257}
          textStyle={greenText}
        />
        <SmallCard
          imgUrl={instagram}
          name="Profile Views"
          iconUrl={up}
          followers="52k"
          today={1375}
          textStyle={greenText}
        />
        <SmallCard
          imgUrl={twitter}
          name="Retweets"
          iconUrl={up}
          followers={117}
          today={303}
          textStyle={greenText}
        />
        <SmallCard
          imgUrl={twitter}
          name="Likes"
          iconUrl={up}
          followers={507}
          today={553}
          textStyle={greenText}
        />
        <SmallCard
          imgUrl={youtube}
          name="Likes"
          iconUrl={down}
          followers={107}
          today={19}
          textStyle={redText}
        />
        <SmallCard
          imgUrl={youtube}
          name="Total Views"
          iconUrl={down}
          followers={1407}
          today={12}
          textStyle={redText}
        />
      </div>
    </div>
  );
};

export default SmallHolder;
