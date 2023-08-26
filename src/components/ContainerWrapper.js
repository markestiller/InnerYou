import RectangleComponent from "./RectangleComponent";

const ContainerWrapper = () => {
  return (
    <div className="absolute top-[215px] left-[83px] w-[323px] h-[778px]">
      <div className="absolute top-[0px] left-[0px] rounded-71xl bg-darkslategray-200 w-56 h-[778px]" />
      <div className="absolute top-[75px] left-[183px]" />
      <img
        className="absolute top-[92px] left-[28px] w-[261px] h-[242px]"
        alt=""
        src="/group-101.svg"
      />
      <div className="absolute top-[328px] left-[42px] w-[140px] h-[122px]">
        <RectangleComponent
          rectangleDivBorder="5px solid #f9eaf7"
          rectangleDivZIndex="unset"
          rectangleDivPosition="absolute"
          rectangleDivTop="-5px"
          rectangleDivLeft="-5px"
          rectangleDivWidth="150px"
          rectangleDivBackgroundColor="unset"
          rectangleDivHeight="92.42%"
          rectangleDivWidth1="93.33%"
          rectangleDivRight="6.67%"
          rectangleDivBottom="7.58%"
          rectangleDivBackgroundColor1="#f9eaf7"
        />
        <img
          className="absolute top-[31px] left-[40px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/fluentmdl2chatinvitefriend.svg"
        />
      </div>
      <div className="absolute top-[550px] left-[42px] flex flex-col items-start justify-start gap-[10px]">
        <RectangleComponent
          rectangleDivBorder="5px solid #f9eaf7"
          rectangleDivZIndex="0"
          rectangleDivPosition="relative"
          rectangleDivTop="unset"
          rectangleDivLeft="unset"
          rectangleDivWidth="150px"
          rectangleDivBackgroundColor="unset"
          rectangleDivHeight="92.42%"
          rectangleDivWidth1="93.33%"
          rectangleDivRight="6.67%"
          rectangleDivBottom="7.58%"
          rectangleDivBackgroundColor1="#f9eaf7"
        />
        <img
          className="absolute my-0 mx-[!important] h-[49.18%] w-[42.86%] top-[19.67%] right-[28.57%] bottom-[31.15%] left-[28.57%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/group1.svg"
        />
      </div>
      <img
        className="absolute h-[2.7%] w-[5.77%] top-[93.68%] right-[1.31%] bottom-[3.62%] left-[92.92%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector6.svg"
      />
      <img
        className="absolute h-[2.7%] w-[5.77%] top-[45.61%] right-[5.33%] bottom-[51.69%] left-[88.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector6.svg"
      />
      <img
        className="absolute h-[2.7%] w-[5.77%] top-[21.96%] right-[4.71%] bottom-[75.34%] left-[89.52%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector6.svg"
      />
    </div>
  );
};

export default ContainerWrapper;
