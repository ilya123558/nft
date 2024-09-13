import { PropsWithChildren } from "react";

interface IProps {
  className?: string 
}

export const Container: React.FC<PropsWithChildren<IProps>> = ({children, className=''}) => {
  return (
    <div className={"w-full mr-auto ml-auto px-[20px] max-w-[1280px] " + className}>
      {children}
    </div>
  );
};