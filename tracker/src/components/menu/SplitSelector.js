const SplitSelector = ({ splitSelectorProp, tabIndexProp }) => {
  const [splitIndex, setSplitIndex] = splitSelectorProp;
  const [tabIndex, setTabIndex] = tabIndexProp
  
  function setPushPullLegs(num){
    setSplitIndex(0)
    setTabIndex(0)
  }
  function setUpperLower(){
    setSplitIndex(1)
    setTabIndex(3)
  }
  function setFullBody(){
    setSplitIndex(2)
    setTabIndex(5)
  }
  return (
    <div>
      <div>
        <a>
          <button onClick={() => setPushPullLegs()}>Push,Pull,Legs</button>
        </a>
        <a>
          <button onClick={() => setUpperLower}>Upper,Lower</button>
        </a>
        <a>
          <button onClick={() => setFullBody()}>Full Body</button>
        </a>
      </div>
    </div>
  );
};

export default SplitSelector;
