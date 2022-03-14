import BucketItem from '../backet-item/backet-item'
import Header from '../header/header'
import Map from '../map/map'
import { backetDatas } from '../../mock/data.js'
import { useState } from 'react'
import cn from 'classnames'
import MapI from '../map/map'

function Backet() {
  const [formState, setFormState] = useState({
    address: {
      value: '',
      touched: false,
      error: false,
      regex: /^[а-яА-ЯёЁa-zA-Z0-9.'][а-яА-ЯёЁa-zA-Z0-9.' ]+[а-яА-ЯёЁa-zA-Z0-9.']?$/u,
    },
    name: {
      value: '',
      touched: false,
      error: false,
      regex: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
    },
    phone: {
      value: '',
      touched: false,
      error: false,
      regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    },
    email: {
      value: '',
      touched: false,
      error: false,
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    type: {
      value: 'Тип упаковки',
      touched: false,
    },
    comment: {
      value: '',
      touched: false,
    },
  })
  const [buttonState, setButtonState] = useState(false)
  const handleChange = ({ target }) => {
    const { name, value } = target
    if (formState[name].regex) {
      const rule = formState[name].regex
      const isFieldValid = rule.test(value)
      setFormState({
        ...formState,
        [name]: {
          ...formState[name],
          value: value,
          error: !isFieldValid,
          touched: true,
        },
      })
    } else {
      setFormState({
        ...formState,
        [name]: {
          ...formState[name],
          value: value,
          touched: true,
        },
      })
    }
    if (buttonState) {
      setButtonState(!buttonState)
    }
  }
  const onSubmit = (dataState) => {
    const json = JSON.stringify(dataState)
    console.log(json)
    alert(json)
  }
  const initialValue = 0
  const prices = backetDatas.map((item) => item.price)
  const finalPrice = prices.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue,
  )

  const addressClass = cn('backet-form__input backet-form__address', {
    'error-form': formState.address.error && formState.address.touched,
  })
  const nameClass = cn('backet-form__input backet-form__name', {
    'error-form': formState.name.error && formState.name.touched,
  })
  const phoneClass = cn('backet-form__input backet-form__phone', {
    'error-form': formState.phone.error && formState.phone.touched,
  })
  const emailClass = cn('backet-form__input backet-form__email', {
    'error-form': formState.email.error && formState.email.touched,
  })
  const typeClass = cn('backet-form__input backet-form__type', {
    'backet-form__type-active': buttonState && formState.type.touched,
  })

  const isDisabled =
    formState.address.error ||
    formState.name.error ||
    formState.phone.error ||
    formState.email.error ||
    formState.type.value === 'Тип упаковки'

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="menu__list">
          <a className="menu__link menu__link--active" href="/#">
            Главная
          </a>
          <div className="menu__link-slash">/</div>
          <a className="menu__link" href="/#">
            {' '}
            Корзина
          </a>
        </div>
        <div className="backet__wrapper">
          <section>
            <h1 className="backet__title">Корзина</h1>
            <div className="backet__login-wrapper">
              <p className="backet__login">Есть аккаунт ?</p>
              <a className="backet__login-link" href="/#">
                Войти
              </a>
            </div>
            <form
              className="backet-form"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault()
                onSubmit({
                  address: formState.address.value,
                  name: formState.name.value,
                  phone: formState.phone.value,
                  email: formState.email.value,
                  type: formState.type.value,
                  comment: formState.comment.value,
                })
              }}
            >
              <ul className="backet-form__list">
                <li className="backet-form__item">
                  <input
                    type="text"
                    id="address"
                    className={addressClass}
                    value={formState.address.value}
                    name="address"
                    onChange={handleChange}
                  />
                  {!formState.address.error && (
                    <label
                      className={
                        !formState.address.touched
                          ? 'backet-form__label'
                          : 'backet-form__label-active'
                      }
                      htmlFor="address"
                    >
                      Адрес
                    </label>
                  )}
                  {formState.address.error && formState.address.touched && (
                    <label
                      className="backet-form__label-active error-form__label"
                      htmlFor="address"
                    >
                      Ошибка ввода
                    </label>
                  )}
                </li>
                <li className="backet-form__item backet-form__double-item">
                  <input
                    type="text"
                    id="name"
                    className={nameClass}
                    value={formState.name.value}
                    name="name"
                    onChange={handleChange}
                  />
                  {!formState.name.error && (
                    <label
                      className={
                        !formState.name.touched
                          ? 'backet-form__label'
                          : 'backet-form__label-active'
                      }
                      htmlFor="name"
                    >
                      Ваше имя
                    </label>
                  )}
                  {formState.name.error && formState.name.touched && (
                    <label
                      className="backet-form__label-active error-form__label"
                      htmlFor="name"
                    >
                      Ошибка ввода
                    </label>
                  )}
                  <input
                    type="tel"
                    id="phone"
                    className={phoneClass}
                    value={formState.phone.value}
                    name="phone"
                    onChange={handleChange}
                  />
                  {!formState.phone.error && (
                    <label
                      className={
                        !formState.phone.touched
                          ? 'backet-form__label backet-form__phone__label'
                          : 'backet-form__phone__label-active'
                      }
                      htmlFor="phone"
                    >
                      Ваш телефон
                    </label>
                  )}
                  {formState.phone.error && formState.phone.touched && (
                    <label
                      className="backet-form__phone__label-active error-form__label"
                      htmlFor="phone"
                    >
                      Ошибка ввода
                    </label>
                  )}
                </li>
                <li className="backet-form__item">
                  <input
                    type="text"
                    id="email"
                    className={emailClass}
                    value={formState.email.value}
                    name="email"
                    onChange={handleChange}
                  />
                  {!formState.email.error && (
                    <label
                      className={
                        !formState.email.touched
                          ? 'backet-form__label'
                          : 'backet-form__label-active'
                      }
                      htmlFor="email"
                    >
                      Ваш e-mail
                    </label>
                  )}
                  {formState.email.error && formState.email.touched && (
                    <label
                      className="backet-form__label-active error-form__label"
                      htmlFor="email"
                    >
                      Ошибка ввода
                    </label>
                  )}
                </li>
                <li className="backet-form__item">
                  <button
                    type="text"
                    className={typeClass}
                    style={buttonState ? { borderBottom: 'none' } : {}}
                    style={
                      formState.type.value !== 'Тип упаковки'
                        ? { color: 'black' }
                        : {}
                    }
                    id="type"
                    onClick={(evt) => {
                      evt.preventDefault()
                      setButtonState(!buttonState)
                    }}
                  >
                    {formState.type.value}
                    <input
                      className="backet-form__array"
                      type="image"
                      src="/img/array.png"
                      alt="array"
                    />
                  </button>
                  {buttonState && (
                    <ul className="type-list">
                      <li className="type-item">
                        <input
                          className="type-item__checkbox"
                          type="checkbox"
                          id="without packaging"
                          name="type"
                          value="Без упаковки"
                          onChange={handleChange}
                        />
                        <label
                          className={
                            formState.type.value === 'Без упаковки'
                              ? 'type-item__label-active'
                              : ''
                          }
                          htmlFor="without packaging"
                        >
                          Без упаковки
                        </label>
                      </li>
                      <li className="type-item">
                        <input
                          className="type-item__checkbox"
                          type="checkbox"
                          id="standard"
                          name="type"
                          value="Стандартная"
                          onChange={handleChange}
                        />
                        <label
                          className={
                            formState.type.value === 'Стандартная'
                              ? 'type-item__label-active'
                              : ''
                          }
                          htmlFor="standard"
                        >
                          Стандартная
                        </label>
                      </li>
                      <li className="type-item">
                        <input
                          className="type-item__checkbox"
                          type="checkbox"
                          id="gift"
                          name="type"
                          value="Подарочная"
                          onChange={handleChange}
                        />
                        <label
                          className={
                            formState.type.value === 'Подарочная'
                              ? 'type-item__label-active'
                              : ''
                          }
                          htmlFor="gift"
                        >
                          Подарочная
                        </label>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="backet-form__item">
                  <input
                    type="text"
                    id="comment"
                    className="backet-form__input backet-form__comment"
                    value={formState.comment.value}
                    name="comment"
                    onChange={handleChange}
                  />
                  <label
                    className={
                      !formState.comment.touched
                        ? 'backet-form__label'
                        : 'backet-form__label-active'
                    }
                    htmlFor="comment"
                  >
                    Введите комментарий
                  </label>
                </li>
              </ul>
              <article className="backet-goods">
                <h2 className="backet-goods__title">Выбранные товары</h2>
                {backetDatas.map((item) => (
                  <BucketItem key={item.id} data={item} />
                ))}
              </article>
              <button
                type="submit"
                className="button__buy"
                disabled={isDisabled}
              >
                Купить
              </button>
            </form>
          </section>
          <section>
            <div className="map__wrapper">
              <div className="map">
                <MapI />
              </div>
              <div className="final-price__wrapper">
                <p className="final-price">Итог:</p>
                <p className="final-price">{finalPrice}руб.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default Backet
