import Menu from "./Menu";
const Home = ({ splitSelectorProp, tabIndexProp }) => {
  const [splitIndex, setSplitIndex] = splitSelectorProp;
  const [tabIndex, setTabIndex] = tabIndexProp;
  function reset() {
    setTabIndex(-1);
    setSplitIndex(-1);
  }

  return (
    <div>
      <button className="side-button" onClick={() => reset()}>Home</button>
    </div>
  );
};

export default Home;
