const Home = ({ splitSelectorProp, tabIndexProp }) => {
  const [splitIndex, setSplitIndex] = splitSelectorProp;
  const [tabIndex, setTabIndex] = tabIndexProp;
  function reset() {
    setTabIndex(-1);
    setSplitIndex(-1);
  }

  return (
    <div>
      <button onClick={() => reset()}>home</button>
    </div>
  );
};

export default Home;
