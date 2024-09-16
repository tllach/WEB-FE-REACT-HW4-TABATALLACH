function SwoatCard({id, title, items}) {
    return (
        <div className="block max-w p-6 bg-stone-300 border border-gray-200 rounded-2xl shadow hover:shadow-slate-800 ">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-center text-black py-2">{title}</h4>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h5 className="font-bold">{item.id}. {item.title}</h5>
                        <p className="px-8 pb-1">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SwoatCard;