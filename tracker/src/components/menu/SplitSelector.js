const SplitSelector = ({ splitSelectorProp, tabIndexProp }) => {
  const [splitIndex, setSplitIndex] = splitSelectorProp;
  const [tabIndex, setTabIndex] = tabIndexProp;

  function setPushPullLegs(num) {
    setSplitIndex(0);
    setTabIndex(0);
  }
  function setUpperLower() {
    setSplitIndex(1);
    setTabIndex(3);
  }
  function setFullBody() {
    setSplitIndex(2);
    setTabIndex(5);
  }

  return (
    <ul className="selector">
      <li>
        <button onClick={() => setPushPullLegs()}>Push,Pull,Legs</button>
      </li>
      <li>
        <button onClick={() => setUpperLower()}>Upper,Lower</button>
      </li>
      <li>
        <button onClick={() => setFullBody()}>Full Body</button>
      </li>
    </ul>
  );
};

export default SplitSelector;
