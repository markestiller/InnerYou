import ToothbrushForm2 from "./ToothbrushForm2";
import ToothbrushForm1 from "./ToothbrushForm1";

const ToothbrushForm = () => {
  return (
    <div className="absolute top-[340px] left-[431px] w-[541px] h-[585px] text-left text-16xl text-black font-bubblegum-sans">
      <ToothbrushForm2 />
      <ToothbrushForm2 propTop="75px" />
      <ToothbrushForm1 />
      <ToothbrushForm1 propTop="225px" />
      <ToothbrushForm1 propTop="300px" />
      <ToothbrushForm1 propTop="375px" />
      <ToothbrushForm1 propTop="450px" />
      <div className="absolute top-[525px] left-[0px] w-[541px] h-[60px]">
        <div className="absolute top-[0px] left-[0px] w-[541px] h-[60px]">
          <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
          <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
          <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
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
          <div className="absolute top-[15px] left-[20px] bg-paleturquoise-200 box-border w-[37px] h-[33px] border-[4px] border-solid border-black" />
        </div>
        <div className="absolute top-[11px] left-[89px] [text-decoration:line-through] inline-block w-[452px] h-[38px]">
          Brush your teeth
        </div>
        <img
          className="absolute h-[43.33%] w-[6.84%] top-[30%] right-[89.46%] bottom-[26.67%] left-[3.7%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
      </div>
    </div>
  );
};

export default ToothbrushForm;
