import { useMemo } from "react";

const RectangleComponent = ({
  rectangleDivBorder,
  rectangleDivZIndex,
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivBackgroundColor,
  rectangleDivHeight,
  rectangleDivWidth1,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivBackgroundColor1,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      border: rectangleDivBorder,
      zIndex: rectangleDivZIndex,
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth,
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [
    rectangleDivBorder,
    rectangleDivZIndex,
    rectangleDivPosition,
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth,
    rectangleDivBackgroundColor,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      height: rectangleDivHeight,
      width: rectangleDivWidth1,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [
    rectangleDivHeight,
    rectangleDivWidth1,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivBackgroundColor1,
  ]);

  return (
    <div
      className="relative rounded-xl shadow-[102px_100px_40px_rgba(0,_0,_0,_0),_65px_64px_37px_rgba(0,_0,_0,_0.01),_37px_36px_31px_rgba(0,_0,_0,_0.05),_16px_16px_23px_rgba(0,_0,_0,_0.09),_4px_4px_13px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] box-border w-[148px] h-[130px] border-[4px] border-solid border-mediumturquoise"
      style={rectangleDivStyle}
    >
      <div
        className="absolute h-[93.85%] w-[94.59%] top-[0%] right-[5.41%] bottom-[6.15%] left-[0%] rounded-3xs bg-paleturquoise-100"
        style={rectangleDiv1Style}
      />
    </div>
  );
};

export default RectangleComponent;
