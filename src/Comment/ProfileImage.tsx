export type ProfileImageProps = {
  imgSrc?: string;
};

const ProfileImage = ({ imgSrc = "Martian.webp" }: ProfileImageProps) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImage;
