import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import IGUser from "components/IGUser";

const Following: React.FC = () => {
  const friends = [
    {
      id: 1,
      location: "Hong Kong",
      account: "max",
      isFollowing: true,
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "World",
      account: "Kitty",
      isFollowing: true,
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Singapore",
      account: "joanne",
      isFollowing: true,
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "China",
      account: "Mary",
      isFollowing: true,
      avatar: "/images/avatars/a4.png",
    },
    {
      id: 5,
      location: "Hong Kong",
      account: "Ken",
      isFollowing: true,
      avatar: "/images/avatars/a5.png",
    },
  ];

  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {friends.map((item) => {
            const { id, account, avatar, isFollowing, location } = item;
            return (
              <div className="-mt-3" key={id}>
                <IGUser
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
