const SmallCard = ({ imgUrl, name, iconUrl, followers, today, textStyle }) => {
  return (
    <div className="w-full min-w-[250px] dark:bg-[var(--Card-BG)] bg-[var(--L-Card-BG)] p-4  flex flex-col rounded-md gap-4 cursor-pointer dark:text-[var(--D-Text)] text-[var(--Dark-Text)]">
      <div className="flex justify-between">
        <p className="dark:text-[var(--D-Text)] text-[var(--Dark-Text)] font-semibold text-[13px]">
          {name}
        </p>
        <img src={imgUrl} alt={name} />
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl dark:text-[var(--White-Text)] text-[var(--VD-Text)]">
          {followers}
        </h2>
        <div className={`${textStyle} flex gap-1 items-center text-[12px]`}>
          <img src={iconUrl} alt="/" /> {today}%
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
