export default function ButtonStore(props) {
    return(
        <div className="flex justify-center pt-2">
            <button className="px-4 py-2 border border-secondary rounded-full text-textPrimary hover:bg-hover transition duration-200">{props.store}</button>
        </div>    
    )
}