function BucketItem({data}) {
const {
    amount,
    img,
    name,
    price,
    type,
} = data;

  return (
    <div className="backet-goods__wrapper">
      <img className="backet-goods__img" src={img} alt={name} />
      <div className="backet-goods__description-wrapper">
        <h3 className="backet-goods__description-title">{name}</h3>
        <p className="backet-goods__description">
          {type}
        </p>
        <div className="backet-goods__description-buttons">
          <input
            className="backet-goods__button"
            type="image"
            src="/img/minus.png"
            alt="minus"
          ></input>
          <p className="backet-goods__items">{amount}</p>
          <input
            className="backet-goods__button"
            type="image"
            src="/img/plus.png"
            alt="plus"
          ></input>
        </div>
      </div>
      <div className="backet-goods__right-wrapper">
        <h3 className="backet-goods__price">{price} руб.</h3>
        <button className="backet-goods__button-delete">Удалить</button>
      </div>
    </div>
  )
}

export default BucketItem
