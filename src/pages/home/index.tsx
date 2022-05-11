import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import IGPost from "./components/IGPost";
import IGProfile from "./components/IGProfile";
import IGStory from "./components/IGStory";

const IGPostList: React.FC = () => {
  const data = [
    {
      id: 1,
      location: "Hong Kong",
      account: "kennychow1016",
      avatar: "./images/avatar.png",
      photo: "/images/posts/main1.png",
      likes: 888,
      description: "I make it!",
      hashTags: "#Hire Me",
      createTime: "1 HOURS AGO",
    },
    {
      id: 2,
      location: "World",
      account: "Mary",
      avatar: "/images/avatars/a2.png",
      photo: "/images/posts/main2.png",
      likes: 333,
      description: "Second Post!",
      hashTags: "#frontend",
      createTime: "5 HOURS AGO",
    },
    {
      id: 3,
      location: "Taipei",
      account: "Ken",
      avatar: "/images/avatars/a3.png",
      photo: "/images/posts/main3.png",
      likes: 777,
      description: "Third Post!",
      hashTags: "#frontend",
      createTime: "6 HOURS AGO",
    },
    {
      id: 4,
      location: "Kwai Chung",
      account: "zoe",
      avatar: "/images/avatars/a4.png",
      photo: "/images/posts/main4.png",
      likes: 824,
      description: "Fourth Post!",
      hashTags: "#frontend",
      createTime: "7 HOURS AGO",
    },
    {
      id: 5,
      location: "Central",
      account: "kitty",
      avatar: "/images/avatars/a5.png",
      photo: "/images/posts/main5.png",
      likes: 98,
      description: "Fifth",
      hashTags: "#frontend",
      createTime: "10 HOURS AGO",
    },
  ];

  return (
    <>
      {data.map((item) => {
        const {
          id,
          location,
          account,
          avatar,
          photo,
          likes,
          description,
          hashTags,
          createTime,
        } = item;
        return (
          <IGPost
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
            key={id}
          />
        );
      })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
