export default function MovieHome(props) {
    return (
        <div className="flex-shrink-0">
            <img 
                className="w-56 h-80 object-cover rounded-md border-2 border-transparent hover:border-accent" 
                src={props.img} 
                alt="Movie" 
            />
        </div>
    )
}
