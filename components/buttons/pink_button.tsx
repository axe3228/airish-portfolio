const PinkButton = (props: any) => {
    return ( 
        <button className="w-[210px] font-darkergrotesque-500 text-primary-50 border-2 border-primary 
        text-[20px] rounded-tl-[20px] pb-[15px] pt-[10px] rounded-br-[20px] bg-primary">{props.title}</button>
    );
}
 
export default PinkButton;