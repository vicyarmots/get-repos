import './itemRepo.css';

const ItemRepo = ({ repos }) => {
    return (
        <div className="item-repo">
            {repos.map((item, index) => {
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
