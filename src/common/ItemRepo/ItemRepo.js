import './itemRepo.css';

const ItemRepo = ({ repositories }) => {
    return (
        <div className="item-repo">
            {repositories.map((item, index) => {
                return (
                    <ul key={index}>
                        <a href={item.html_url}>{item.name}</a>
                    </ul>
                );
            })}
        </div>
    );
};

export default ItemRepo;
