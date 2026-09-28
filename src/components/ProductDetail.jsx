import React, { useState } from 'react'

function ProductDetail({ image, onAddCart, onOpenModal }) {
    const [tab, setTab] = useState('detail');

    return (
        <section className='product'>
            <div className="product-media">
                <img src={image} alt="러닝슈즈" onClick={onOpenModal}
                    title='클릭하면 확대 이미지를 볼 수 있습니다.' />
            </div>
            <div className="product-body">
                <p className="category">running shoes</p>
                <h2>러닝 슈즈</h2>
                <p className="desc">가볍고 편안한 데일리 러닝 슈즈</p>
                <p className="price">109,000원</p>

                <div className="actions">
                    <button className="btn primary" onClick={onAddCart}>장바구니 담기</button>
                    <button className="btn" onClick={onOpenModal}>이미지 확대</button>
                </div>

                <div className="tabs">
                    <button className={tab === 'detail' ? 'tab active' : 'tab'}
                        onClick={() => setTab('detail')}>상세</button>
                    <button className={tab === 'review' ? 'tab active' : 'tab'}
                        onClick={() => setTab('review')}>리뷰</button>
                    <button className={tab === 'qna' ? 'tab active' : 'tab'}
                        onClick={() => setTab('qna')}>문의</button>
                </div>

                <div className="tab-panel">
                    {
                        tab === 'detail' && (
                            <ul className="bullets">
                                <li>뛰어난 쿠셔닝으로 러닝 시 발에 전달되는 충격을 효과적으로 줄여줘요.</li>
                                <li>발을 안정적으로 잡아주는 편안한 착화감으로 더욱 안정적인 러닝을 도와줘요.</li>
                                <li>통기성 좋은 소재로 땀과 열을 빠르게 배출해 쾌적하게 달릴 수 있어요.</li>
                            </ul>
                        )
                    }
                    {
                        tab === 'review' && (
                            <div>
                                <p className="review-score">⭐⭐⭐⭐⭐</p>
                                <p>가볍고 오래 착용해도 편해요</p>
                                <p>6개월 무상 a/s가 가능해요</p>
                            </div>
                        )
                    }
                    {
                        tab === 'qna' && (
                            <div>
                                <p><b>Q.</b> 방수가 되나요?</p>
                                <p><b>A.</b> 가벼운 생활 방수는 가능합니다.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductDetail