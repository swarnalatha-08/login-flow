export default function Button({className,label,...rest}:any){
    return(
        <button className={className} {...rest}>{label}</button>
    )
}