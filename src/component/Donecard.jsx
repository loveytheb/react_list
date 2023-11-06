const Donecard = ({ item, clickDoneRemoveBtnHandler, clickDoneCancelBtnHandler }) => {
    return (<div key={item.id} className='component-style'>
        <div className='wrap'>
            <p className='listtitle'>{item.title}</p>
            <p>{item.detail}</p>
        </div>
        <div><button className='removebtn' onClick={() => clickDoneRemoveBtnHandler(item.id)}>삭제하기</button>
            <button className='finishbtn' onClick={() => clickDoneCancelBtnHandler(item.id)}>취소</button></div>
    </div>
    )
}

export default Donecard;