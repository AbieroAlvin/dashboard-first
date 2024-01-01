const MainCard = ({
  imgUrl,
  name,
  iconUrl,
  followers,
  today,
  borderStyle,
  textStyle,
}) => {
  return (
    <div
      className={`sm:max-w-[250px] w-full flex flex-col items-center ${borderStyle}  px-0 pt-2 rounded-md cursor-pointer hover:opacity-[90%] `}
    >
      <div className="dark:bg-[var(--Card-BG)] bg-[var(--L-Card-BG)] p-6 w-full flex flex-col items-center rounded-md gap-4">
        <div className="flex gap-2">
          <img src={imgUrl} alt={name} />
          <p className="text-sm text-[var(--D-Text)] ">{name}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-bold dark:text-[var(--White-Text)]  text-[var(--VD-Text)]">
            {followers}
          </h1>
          <h3 className="uppercase text-[14px] text-[var(--D-Text)] tracking-widest">
            Followers
          </h3>
        </div>
        <div className="flex gap-1 text-[13px] items-center">
          <img src={iconUrl} alt={name} className="w-[6px] h-[6px]" />
          <p className={textStyle}>{today} Today</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
