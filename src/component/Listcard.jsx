const Listcard = ({ item, clickRemoveBtnHandler, clickFinishBtnHandler }) => {
    return (
        <div key={item.id} className='component-style'>
            <div className='wrap'>
                <p className='listtitle'>{item.title}</p>
                <p>{item.detail}</p>
            </div>
            <div><button className='removebtn' onClick={() => clickRemoveBtnHandler(item.id)}>삭제하기</button>
                <button className='finishbtn' onClick={() => clickFinishBtnHandler(item.id)}>완료</button></div>
        </div>
    )
}

export default Listcard;