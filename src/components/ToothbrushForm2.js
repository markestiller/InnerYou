import { useMemo } from "react";

const ToothbrushForm2 = ({ propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[541px] h-[60px] text-left text-16xl text-black font-bubblegum-sans"
      style={groupDivStyle}
    >
      <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
      <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
      <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
      <div className="absolute top-[0px] right-[0px] w-[541px] h-[60px]">
        <img
          className="absolute top-[0px] right-[122px] w-[423px] h-[68px]"
          alt=""
          src="/group-18.svg"
        />
        <div className="absolute top-[15px] left-[89px] inline-block w-[452px] h-[38px]">
          Brush your teeth
        </div>
        <div className="absolute top-[15px] left-[89px] inline-block w-[452px] h-[38px]">
          Brush your teeth
        </div>
        <img
          className="absolute top-[0px] right-[122px] rounded-mini w-[423px] h-[68px]"
          alt=""
          src="/group-18.svg"
        />
        <div className="absolute top-[15px] left-[89px] inline-block w-[452px] h-[38px]">
          Brush your teeth
        </div>
        <div className="absolute top-[15px] left-[89px] inline-block w-[452px] h-[38px]">
          Brush your teeth
        </div>
      </div>
      <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
    </div>
  );
};

export default ToothbrushForm2;
