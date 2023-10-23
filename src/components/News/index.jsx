const News = ({items}) => {
    return <section>
        <div className="container d-flex">
            {items.map((item, index) => {
                return <div className="news-item d-flex" key={index}>
                    <h2 className="person-name">{item.title}</h2>
                    <img src={item.img} alt={item.title} />
                    <div className="desc">
                       <p>Position: {item.position}</p> 
                       <p>Number: {item.number}</p>
                    </div>
                </div>
            })}
        </div>
    </section>
}
export default News;