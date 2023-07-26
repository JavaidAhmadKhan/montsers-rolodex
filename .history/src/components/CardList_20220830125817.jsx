import Card from "./Card";

const CardList = ({ monsters }) => {
  return (
    <div className="m-6 md:m-10 xl:m-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
