import 'font-awesome/css/font-awesome.min.css';

export interface ButtonProps {
  caption: string;
  icon: string;
  bordered: boolean;
  onClick: Function;
  size?: string;
}

const Button = (props: ButtonProps) => {
  const size = props.size ? true : false;
  return (
    <button className={`font-bold py-2 px-4 rounded-xl text-white w-full h-[48px]  text-[18px] text-center tracking-wider hover:bg-grey inline-flex items-center justify-center ${props.bordered?'text-lightprimary border-lightprimary border-2 bg-[#162724]':'bg-primary'} ${props.size?'sm:h-[50px] sm:text-[18px]':'sm:h-[60px] sm:text-[20px]'}`} onClick={() => props.onClick()}>
        {props.icon?<i className={"fa fa-"+props.icon+" fa-lg pr-[10px]"}></i>:""}
        <span>{props.caption}</span>
    </button>
  );
};

export default Button;
