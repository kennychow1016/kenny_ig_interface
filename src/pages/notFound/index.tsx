import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";

const NotFound: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className="my-8 font-bold text-4xl box-border text-center">
          Page Not Found
        </p>
      </IGContainer>
    </>
  );
};

export default NotFound;
